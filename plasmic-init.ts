import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import TemporaryDrawer from "./components/TemporaryDrawer"; // Use "./" if plasmic-init.ts is at the root level

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "idofrxou7QwiqC59JfPkC",
      token: "4fAvhBxx9oCaQdG6cmh2pfgkTV52FRKkwJnYwYGXQlCfqgl4NXvXzYRoCRmIeh231ctooBoGgeJygK9Ieo1A",
    },
  ],
  preview: false,
});

// Register TemporaryDrawer component
PLASMIC.registerComponent(TemporaryDrawer, {
  name: "TemporaryDrawer", // This is the name you'll see in Plasmic Studio
  props: {
    open: 'boolean', // Considering 'open' is managed internally, you might not need to expose it. This is just an example.
  },
  // Add more props as needed. Since your component uses internal state and provides no props for customization, this is a basic setup.
});
