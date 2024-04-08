import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import MUI_X_Data_Grid_MIT from "./components/MUI_X_Data_Grid_MIT"; // Make sure this path matches the location of your component file

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
  name: "DataGridDemo",
  props: {
    // Assuming 'rows' should be treated as a slot for arbitrary content
    // However, given it's an array of objects, a direct 'slot' type might not be applicable
    // Instead, we'll register it as 'object', understanding it may need custom handling in Plasmic
    rows: "object",
    
    // Register 'columns' as an object array; similar reasoning as 'rows'
    // Note: Direct manipulation of complex structures like 'columns' in Plasmic might be limited
    columns: "object",
    
    // 'pageSize' is a simple scalar prop, registered directly
    pageSize: "number",
    
    // Additional dynamic or conditional props can be handled similarly
    // For example, if 'pageSizeOptions' needed dynamic handling based on another prop
    // pageSizeOptions: {
    //   type: 'choice',
    //   options: ['5', '10', '20', '50', '100'],
    //   hidden: (props) => !props.pageSize, // Hypothetical dynamic behavior
    // }
  }
});


export default PLASMIC;