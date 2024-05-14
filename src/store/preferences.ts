// Libraries
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Types
import { PreferenceStore } from "./types";

const usePreferenceStore = create<PreferenceStore>()(
  persist(
    (set) => ({
      viewMode: "grid",
      dataTypeShown: "movie",

      setViewMode: (mode: string) => set({ viewMode: mode }),
      setDataTypeShown: (type: string) => set({ dataTypeShown: type }),
    }),
    {
      name: "moviely-preferences",
    }
  )
);
export default usePreferenceStore;
