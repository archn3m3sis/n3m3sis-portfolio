"use client";

import { useEffect, useRef, useState } from "react";
import { CursorTargetIcon } from "@/components/icons/cursor-target";

type Snap = { left: number; top: number; width: number; height: number };

const BASE_SIZE = 36;
const HOVER_PADDING = 8;
const CLICKABLE_SELECTOR =
  'a, button, [role="button"], [role="link"], input:not([disabled]), select, textarea, [data-clickable="true"]';

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [snap, setSnap] = useState<Snap | null>(null);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
        setVisible(true);
        const target = document.elementFromPoint(e.clientX, e.clientY);
        if (!target) {
          setSnap(null);
          return;
        }
        const clickable = target.closest(CLICKABLE_SELECTOR) as HTMLElement | null;
        if (clickable) {
          const r = clickable.getBoundingClientRect();
          setSnap({
            left: r.left - HOVER_PADDING,
            top: r.top - HOVER_PADDING,
            width: r.width + HOVER_PADDING * 2,
            height: r.height + HOVER_PADDING * 2,
          });
        } else {
          setSnap(null);
        }
      });
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const style: React.CSSProperties = snap
    ? {
        left: snap.left,
        top: snap.top,
        width: snap.width,
        height: snap.height,
        opacity: visible ? 1 : 0,
        transition:
          "left 220ms cubic-bezier(0.16,1,0.3,1), top 220ms cubic-bezier(0.16,1,0.3,1), width 220ms cubic-bezier(0.16,1,0.3,1), height 220ms cubic-bezier(0.16,1,0.3,1), opacity 200ms ease",
      }
    : {
        left: pos.x - BASE_SIZE / 2,
        top: pos.y - BASE_SIZE / 2,
        width: BASE_SIZE,
        height: BASE_SIZE,
        opacity: visible ? 1 : 0,
        transition:
          "width 200ms cubic-bezier(0.16,1,0.3,1), height 200ms cubic-bezier(0.16,1,0.3,1), opacity 200ms ease",
      };

  const innerLineStyle: React.CSSProperties = {
    boxShadow:
      "0 0 4px rgba(255,255,255,0.85), 0 0 10px rgba(170,210,255,0.7), 0 0 18px rgba(120,180,255,0.5)",
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[9999] rounded-md"
      style={style}
    >
      {/* horizontal crosshair */}
      <span
        className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/90"
        style={innerLineStyle}
      />
      {/* vertical crosshair */}
      <span
        className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-white/90"
        style={innerLineStyle}
      />
      {/* center magenta target */}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <CursorTargetIcon
          size={snap ? 28 : BASE_SIZE}
          className="opacity-90 mix-blend-screen drop-shadow-[0_0_6px_rgba(201,159,255,0.7)]"
        />
      </span>
    </div>
  );
}
