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

PLASMIC.registerComponent(TemporaryDrawer, {
  name: "TemporaryDrawer",
  props: {
    title: "string",
    // Change items to a string that should contain JSON data
    items: {
      type: "string",
      defaultValue: JSON.stringify([
        { text: "Inbox", imgSrc: "path/to/your/default/image.svg" },
        { text: "Starred", imgSrc: "path/to/another/image.svg" }
      ]),
      description: "JSON string representing list of items. Each item should have 'text' and 'imgSrc'.",
    },
    initialOpen: "boolean",
  },
});
