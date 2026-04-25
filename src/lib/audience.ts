import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// The three audience modes. Values match the data-audience attribute
// and the CSS selectors in globals.css — keep them in sync.
export type Audience = "tutor" | "developer" | "reader";

// Labels shown in the audience switcher UI.
export const AUDIENCES = [
  { id: "developer", label: "Fellow Developer" },
  { id: "tutor", label: "Tutor" },
  { id: "reader", label: "Blog Reader" },
] as const satisfies readonly { id: Audience; label: string }[];

// Default audience when no preference is stored.
export const DEFAULT_AUDIENCE: Audience = "developer";

// localStorage key used by the persist middleware. The pre-hydration
// script (next sub-step) reads from this same key to avoid the FOUC.
export const AUDIENCE_STORAGE_KEY = "n3m3sis-audience";

type AudienceState = {
  audience: Audience;
  setAudience: (audience: Audience) => void;
};

export const useAudienceStore = create<AudienceState>()(
  persist(
    (set) => ({
      audience: DEFAULT_AUDIENCE,
      setAudience: (audience) => {
        set({ audience });
        // Reflect the change on the html element so CSS updates instantly.
        // We also do this via a React effect for the cases where the store
        // updates outside a component, but this belt-and-suspenders catch
        // is cheap and prevents any race window.
        if (typeof document !== "undefined") {
          document.documentElement.setAttribute("data-audience", audience);
        }
      },
    }),
    {
      name: AUDIENCE_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
