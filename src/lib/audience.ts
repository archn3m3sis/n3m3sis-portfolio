import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Audience = "developer" | "employer" | "client" | "reader" | "student";

export const AUDIENCES = [
  {
    id: "developer",
    label: "Here as a developer looking to collaborate",
  },
  {
    id: "employer",
    label:
      "Here as recruiter for an employer or as an employer to discuss opportunities",
  },
  {
    id: "client",
    label:
      "Here to request home or small-business services — workflow automation, AI integrations, or security baselining and testing",
  },
  {
    id: "reader",
    label: "Here as a reader to view blog content",
  },
  {
    id: "student",
    label:
      "Here as a student to check out your security and developer knowledge base",
  },
] as const satisfies readonly { id: Audience; label: string }[];

export const AUDIENCE_STORAGE_KEY = "n3m3sis-audience";

type AudienceState = {
  audience: Audience | null;
  setAudience: (audience: Audience) => void;
  clearAudience: () => void;
};

export const useAudienceStore = create<AudienceState>()(
  persist(
    (set) => ({
      audience: null,
      setAudience: (audience) => {
        set({ audience });
        if (typeof document !== "undefined") {
          document.documentElement.setAttribute("data-audience", audience);
        }
      },
      clearAudience: () => {
        set({ audience: null });
        if (typeof document !== "undefined") {
          document.documentElement.removeAttribute("data-audience");
        }
      },
    }),
    {
      name: AUDIENCE_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
