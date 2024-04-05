import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import TemporaryDrawer from "./components/TemporaryDrawer"; // Ensure this path is accurate

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "idofrxou7QwiqC59JfPkC",
      token: "4fAvhBxx9oCaQdG6cmh2pfgkTV52FRKkwJnYwYGXQlCfqgl4NXvXzYRoCRmIeh231ctooBoGgeJygK9Ieo1A",
    },
  ],
  preview: false,
});

PLASMIC.registerComponent(TemporaryDrawer, {
  name: "TemporaryDrawer",
  props: {
    title: "string",
    initialOpen: "boolean",
  },
  // Note: The component is designed to accept children directly in its implementation,
  // which should be utilized within Plasmic Studio as needed.
});
