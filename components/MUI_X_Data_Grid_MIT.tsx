import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowsProp, GridRowParams } from '@mui/x-data-grid';

interface DataGridDemoProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  pageSizeOptions: Array<number | { label: string, value: number }>;
  cellTextColor?: string; // Custom prop for cell text color
  headerTextColor?: string; // Custom prop for header text color
  font: string; // Custom prop for font
  className?: string; // Allows custom class names for styling
  checkboxSelection: boolean; // Prop for enabling checkbox selection
}

const DataGridDemo: React.FC<DataGridDemoProps> = ({
  rows,
  columns,
  pageSizeOptions,
  cellTextColor,
  headerTextColor,
  font,
  className,
  checkboxSelection,
}) => {
  // State for storing the selected row and its key
  const [selectedRow, setSelectedRow] = React.useState<any>(null);
  const [selectedRowKey, setSelectedRowKey] = React.useState<number | string | null>(null);

  // Handler for row click events
  const onRowClick = React.useCallback((params: GridRowParams, event: React.MouseEvent<HTMLElement>) => {
    setSelectedRow(params.row);
    setSelectedRowKey(params.id);
    // Additional logic for the click event can be placed here
  }, []);

  const dataGridProps: any = {
    rows,
    columns,
    pageSizeOptions,
    checkboxSelection,
    onRowClick,
  };

  return (
    <Box sx={{ height: 400, width: '100%' }} className={className}>
      <DataGrid
        {...dataGridProps}
        sx={{
          '& .MuiDataGrid-cell': {
            color: cellTextColor,
            fontFamily: font, // Corrected to 'fontFamily' for JSX syntax
          },
          '& .MuiDataGrid-columnHeaders': {
            color: headerTextColor,
            fontFamily: font,
          },
        }}
      />
    </Box>
  );
};

export default DataGridDemo;
