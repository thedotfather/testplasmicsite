import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridColDef, GridRowsProp, GridRowParams, GridCellParams } from '@mui/x-data-grid';

interface DataGridDemoProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  pageSizeOptions: Array<number | { label: string, value: number }>;
  cellTextColor?: string; // Custom prop for cell text color
  headerTextColor?: string; // Custom prop for header text color
  font: string; // Custom prop for font
  className?: string; // Allows custom class names for styling
  checkboxSelection: boolean; // Prop for enabling checkbox selection
  onRowClick: (params: GridRowParams, event: React.MouseEvent<HTMLElement>) => void; // Handler for row click events
  onCellClick: (params: GridCellParams, event: React.MouseEvent<HTMLElement>) => void; // Handler for cell click events
  processRowUpdate: (newRow: any, oldRow: any) => any;
  test: boolean
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
  onRowClick,
  onCellClick,
  processRowUpdate,
  test
}) => {
  const handleProcessRowUpdate = (newRow: any, oldRow: any) => {
    processRowUpdate(newRow, oldRow);
    return new Promise((resolve, reject) => {
      resolve(newRow);
    });
  };
  const dataGridProps: any = {
    rows,
    columns,
    pageSizeOptions,  
    checkboxSelection,
    onRowClick,
    onCellClick,
    processRowUpdate: (newRow: any, oldRow: any) => handleProcessRowUpdate(newRow, oldRow),
    test
  };

  return (
    <Box sx={{ height: 400, width: '100%' }} className={className}>
      <DataGrid
        {...dataGridProps}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: test, 
          },
        }}
        sx={{
          '& .MuiDataGrid-cell': {
            color: cellTextColor,
            fontFamily: font,
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
