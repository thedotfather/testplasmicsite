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

// Registering the TemporaryDrawer component with Plasmic
PLASMIC.registerComponent(TemporaryDrawer, {
  name: "TemporaryDrawer",
  props: {
    // Assuming `items` is an array of objects each with `text`, `iconName`, and `link`
    items: {
      type: "object", // Specify as "array" or "object" based on how you implement the prop handling in Plasmic
      defaultValue: [
        { text: 'Inbox', iconName: 'inbox', link: '/inbox' },
        { text: 'Send email', iconName: 'mail', link: '/send-email' }
      ],
      description: "List of items in the drawer",
    },
    initialOpen: {
      type: "boolean",
      defaultValue: false,
      description: "Whether the drawer is open initially",
    },
  }
});

export default PLASMIC;