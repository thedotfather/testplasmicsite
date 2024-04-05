import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import TemporaryDrawer from "./components/TemporaryDrawer"; // Make sure this path matches the location of your component file

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
    title: {
      type: "string",
      defaultValue: "My Drawer", // You can set a default title here if you want
    },
    initialOpen: {
      type: "boolean",
      defaultValue: false, // Set the default state of the drawer
    },
  },
  // This comment is just to reiterate that if TemporaryDrawer correctly renders its children,
  // Plasmic Studio will allow users to place other components within it.
});
