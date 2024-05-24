import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import MUI_X_Data_Grid_MIT from "./components/MUI_X_Data_Grid_MIT";
import CustomerTableComponent from "./components/CustomerTableComponent";

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
  name: "MUI X DataGrid",
  props: {
    rows: {
      type: "object",
      defaultValue: [
        { id: 1, lastName: "Doe", firstName: "John", age: 30 },
        { id: 2, lastName: "Smith", firstName: "Anna", age: 24 },
      ],
      description:
        "Array of objects where each object represents a row in the data grid. Example: [{ id: 1, lastName: 'Doe', firstName: 'John', age: 30 }]",
    },
    columns: {
      type: "object",
      defaultValue: [
        { field: "id", headerName: "ID", width: 90 },
        { field: "firstName", headerName: "First name", width: 150, editable: false },
        { field: "lastName", headerName: "Last name", width: 150, editable: false },
        { field: "age", headerName: "Age", type: "number", width: 110, editable: false },
      ],
      description: "Array of column definitions. Example: [{ field: 'id', headerName: 'ID', width: 90 }]",
    },
    pageSizeOptions: {
      type: "object",
      description: "JSON array of numbers indicating available page sizes, e.g., [25, 50, 100]",
      defaultValue: [25, 50, 100],
    },
    cellTextColor: {
      type: "color",
      defaultValue: "#333",
    },
    headerTextColor: {
      type: "color",
      defaultValue: "#333",
    },
    toolbarButtonsColor: {
      type: "color",
      defaultValue: "#1976d2",
    },
    font: {
      type: "choice",
      options: [
        { label: "Default", value: "" },
        { label: "Lucida Console", value: "Lucida Console" },
        { label: "Times New Roman", value: "Times New Roman" },
        { label: "Arial", value: "Arial" },
      ],
    },
    checkboxSelection: {
      type: "boolean",
      defaultValue: false,
    },
    toolbar: {
      type: "boolean",
      defaultValue: true,
    },
    columnsButton: {
      type: "boolean",
      defaultValue: true,
    },
    filtersButton: {
      type: "boolean",
      defaultValue: true,
    },
    densityButton: {
      type: "boolean",
      defaultValue: true,
    },
    exportButton: {
      type: "boolean",
      defaultValue: true,
    },
    searchBar: {
      type: "boolean",
      defaultValue: true,
    },
    hideFooterPagination: {
      type: "boolean",
      defaultValue: false,
    },
    onRowClick: {
      type: "eventHandler",
      argTypes: [
        { name: "params", type: "object" },
        { name: "event", type: "object" },
      ],
      description: "Function called when a row is clicked",
    },
    onCellClick: {
      type: "eventHandler",
      argTypes: [
        { name: "params", type: "object" },
        { name: "event", type: "object" },
      ],
      description: "Function called when a cell is clicked",
    },
    processRowUpdate: {
      type: "eventHandler",
      argTypes: [
        { name: "newRow", type: "object" },
        { name: "oldRow", type: "object" },
      ],
      description: "Function called when a cell is edited",
    },
    rowActions: {
      type: "object",
      description: "Actions configuration with icon types and event names",
      defaultValue: [
        { icon: "Edit", action: "onEdit" },
        { icon: "Delete", action: "onDelete" },
      ],
    },
    onRowAction: {
      type: "eventHandler",
      description: "Handler for action clicks",
      argTypes: [
        { name: "action", type: "string" },
        { name: "row", type: "object" },
      ],
    },
  },
  states: {
    selectedRow: {
      type: "readonly",
      variableType: "object",
      onChangeProp: "onRowClick",
      onChangeArgsToValue: (params: any) => params.row,
    },
    selectedRowKey: {
      type: "readonly",
      variableType: "text",
      onChangeProp: "onRowClick",
      onChangeArgsToValue: (params: any) => params.id,
    },
    selectedCellField: {
      type: "readonly",
      variableType: "text",
      onChangeProp: "onCellClick",
      onChangeArgsToValue: (params: any) => params.field,
    },
    selectedCellValue: {
      type: "readonly",
      variableType: "text",
      onChangeProp: "onCellClick",
      onChangeArgsToValue: (params: any) => params.formattedValue,
    },
  },
  classNameProp: "className",
});

PLASMIC.registerComponent(CustomerTableComponent, {
  name: "CustomerTable",
  props: {
    searchPlaceholder: {
      type: "string",
      defaultValue: "Search customers...",
      description: "Placeholder text for the search input",
    },
    filterOptions: {
      type: "object",
      defaultValue: ["Active", "Inactive", "VIP", "New"],
      description: "Options for the filter dropdown",
    },
    addButtonText: {
      type: "string",
      defaultValue: "Add Customer",
      description: "Text for the add customer button",
    },
    customers: {
      type: "object",
      defaultValue: [
        { name: "John Doe", email: "johndoe@example.com", status: "Active" },
        { name: "Jane Smith", email: "janesmith@example.com", status: "Active" },
        { name: "Bob Johnson", email: "bobjohnson@example.com", status: "Inactive" },
        { name: "Sarah Lee", email: "sarahlee@example.com", status: "Active" },
        { name: "Michael Brown", email: "michaelbrown@example.com", status: "Active" },
      ],
      description: "Array of customer objects with name, email, and status",
    },
    onAddCustomer: {
      type: "eventHandler",
      argTypes: [],
      description: "Handler for when the add customer button is clicked",
    },
    onSearch: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
      description: "Handler for when a search is performed",
    },
    onFilterChange: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
      description: "Handler for when a filter option is changed",
    },
  },
  classNameProp: "className",
});

export default PLASMIC;
