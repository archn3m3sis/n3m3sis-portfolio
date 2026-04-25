import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Audience = "developer" | "employer" | "client" | "reader" | "student";

export const AUDIENCES = [
  {
    id: "developer",
    label: "Developer",
    blurb: "Here to collaborate on code, projects, or open-source work.",
  },
  {
    id: "employer",
    label: "Recruiter / Employer",
    blurb: "Here to discuss opportunities, contracts, or hiring.",
  },
  {
    id: "client",
    label: "Client",
    blurb:
      "Here to engage on home or small-business services — workflow automation, AI integrations, or security baselining and testing.",
  },
  {
    id: "reader",
    label: "Reader",
    blurb: "Here for the blog and long-form writing.",
  },
  {
    id: "student",
    label: "Student",
    blurb: "Here to study the security & developer knowledge base.",
  },
] as const satisfies readonly { id: Audience; label: string; blurb: string }[];

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
