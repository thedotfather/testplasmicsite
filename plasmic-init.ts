import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import TemporaryDrawer from "./components/TemporaryDrawer"; // Adjust this path as needed

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "idofrxou7QwiqC59JfPkC",
      token: "4fAvhBxx9oCaQdG6cmh2pfgkTV52FRKkwJnYwYGXQlCfqgl4NXvXzYRoCRmIeh231ctooBoGgeJygK9Ieo1A",
    },
  ],
  preview: false,
});

// Register TemporaryDrawer component with new props
PLASMIC.registerComponent(TemporaryDrawer, {
  name: "TemporaryDrawer",
  props: {
    title: {
      type: "string",
      defaultValue: "Open Drawer",
    },
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
