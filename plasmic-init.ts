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
    // Example 'rows' data structure
    rows: {
      type: 'object',
      defaultValue: [
        { id: 1, lastName: 'Doe', firstName: 'John', age: 30 },
        { id: 2, lastName: 'Smith', firstName: 'Anna', age: 24 },
        // Add more example rows as needed
      ],
      description: "Array of objects where each object represents a row in the data grid. Example: [{ id: 1, lastName: 'Doe', firstName: 'John', age: 30 }]",
    },
    
    // Example 'columns' data structure
    columns: {
      type: 'object',
      defaultValue: [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'firstName', headerName: 'First name', width: 150, editable: false },
        { field: 'lastName', headerName: 'Last name', width: 150, editable: false },
        { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: false },
        // Add more example columns as needed
      ],
      description: "Array of column definitions. Example: [{ field: 'id', headerName: 'ID', width: 90 }]",
    }, 
    pageSizeOptions: {
      type: "object",
      description: "JSON array of numbers indicating available page sizes, e.g., [25, 50, 100]",
      defaultValue: [25, 50, 100]
    },
    cellTextColor: {
      type: 'color',
      defaultValue: '#333' // Default cell text color
    },
    headerTextColor: {
      type: 'color',
      defaultValue: '#333' // Default header background color
    },
    font: {
      type: 'choice',
      options: [
        {label: "Default", value: ""}, 
        {label: "Lucida Console", value: "Lucida Console"}, 
        {label: "Times New Roman", value: "Times New Roman"}, 
        {label: "Arial", value: "Arial"}
      ]
    },
    checkboxSelection: {
      type: 'boolean',
      defaultValue: false
    },
    onRowClick: {
      type: "eventHandler",
      argTypes: [
        { name: "params", type: "object"},
        { name: "event", type: "object" }
      ],
      description: "Function called when a row is clicked"
    },
    onCellClick: {
      type: "eventHandler",
      argTypes: [
        { name: "params", type: "object"},
        { name: "event", type: "object" }
      ],
      description: "Function called when a cell is clicked"
    },
    onCellEditStop: {
      type: "eventHandler",
      argTypes: [
        { name: "params", type: "object"},
        { name: "event", type: "object" }
      ],
      description: "Function called when a cell is edited"
    },
    
  },
  states: {
    selectedRow: {
      type: "readonly",
      variableType: 'object',
      onChangeProp: 'onRowClick',
      onChangeArgsToValue: (params: any) => params.row
    },
    selectedRowKey: {
      type: "readonly",
      variableType: 'text',
      onChangeProp: 'onRowClick',
      onChangeArgsToValue: (params: any) => params.id
    },
    selectedCellField: {
      type: 'readonly',
      variableType: 'text',
      onChangeProp: 'onCellClick',
      onChangeArgsToValue: (params: any) => params.field
    },
    selectedCellValue: {
      type: 'readonly',
      variableType: 'text',
      onChangeProp: 'onCellClick',
      onChangeArgsToValue: (params: any) => params.formattedValue
    }
  },
  classNameProp: "className"
});

export default PLASMIC;