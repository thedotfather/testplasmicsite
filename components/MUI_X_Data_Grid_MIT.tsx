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
  disableColumnSorting: boolean;
  toolbarQuickSearch: boolean;
  disableColumnSelector: boolean;
  onRowClick: (params: GridRowParams, event: React.MouseEvent<HTMLElement>) => void; // Handler for row click events
  onCellClick: (params: GridCellParams, event: React.MouseEvent<HTMLElement>) => void; // Handler for cell click events
  processRowUpdate: (newRow: any, oldRow: any) => any;
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
  disableColumnSorting,
  disableColumnSelector,
  onRowClick,
  onCellClick,
  processRowUpdate,
  toolbarQuickSearch
}) => {
  const handleProcessRowUpdate = (newRow: any, oldRow: any) => {
    processRowUpdate(newRow, oldRow);
    return new Promise((resolve, reject) => {
      if (newRow && Object.keys(newRow).length !== 0) {
        resolve(newRow); // Resolves with the newRow when it's not empty
      } else {
        resolve({}); // Resolves with an empty object or another default value when newRow is empty
      }
    });
  };
  const dataGridProps: any = {
    rows,
    columns,
    pageSizeOptions,  
    checkboxSelection,
    disableColumnSorting,
    disableColumnSelector,
    onRowClick,
    onCellClick,
    processRowUpdate: (newRow: any, oldRow: any) => handleProcessRowUpdate(newRow, oldRow)
  };

  return (
    <Box sx={{ height: 400, width: '100%' }} className={className}>
      <DataGrid
        {...dataGridProps}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: toolbarQuickSearch
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
