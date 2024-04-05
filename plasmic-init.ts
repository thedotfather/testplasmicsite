import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import TemporaryDrawer from "./components/TemporaryDrawer";

export const PLASMIC = initPlasmicLoader({
  projects: [
    // Your project configuration
  ],
  preview: false,
});

PLASMIC.registerComponent(TemporaryDrawer, {
  name: "TemporaryDrawer",
  props: {
    title: "string",
    items: {
      type: "array",
      defaultValue: ["Inbox", "Starred", "Send email", "Drafts"],
    },
    initialOpen: {
      type: "boolean",
      defaultValue: false,
    },
  },
});
