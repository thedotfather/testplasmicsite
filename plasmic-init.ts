import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import MUI_X_Data_Grid_MIT from "./components/MUI_X_Data_Grid-MIT"; // Make sure this path matches the location of your component file

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "idofrxou7QwiqC59JfPkC",
      token: "4fAvhBxx9oCaQdG6cmh2pfgkTV52FRKkwJnYwYGXQlCfqgl4NXvXzYRoCRmIeh231ctooBoGgeJygK9Ieo1A",
    },
  ],
  preview: false,
});

PLASMIC.registerComponent(MUI_X_Data_Grid_MIT, {
  name: "MUI_X_Data_Grid-MIT",
});

export default PLASMIC;