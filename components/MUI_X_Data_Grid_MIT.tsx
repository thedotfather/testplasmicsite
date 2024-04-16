import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridColDef, GridRowsProp, GridRowParams, GridCellParams, GridToolbarContainer, GridToolbarExport, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarQuickFilter } from '@mui/x-data-grid';

interface DataGridDemoProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  pageSizeOptions: Array<number | { label: string, value: number }>;
  cellTextColor?: string; // Custom prop for cell text color
  headerTextColor?: string; // Custom prop for header text color
  font: string; // Custom prop for font
  className?: string; // Allows custom class names for styling
  checkboxSelection: boolean; // Prop for enabling checkbox selection
  toolbar: boolean;
  columnsButton: boolean;
  filtersButton: boolean;
  densityButton: boolean;
  exportButton: boolean;
  searchBar: boolean;
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
  toolbar,
  columnsButton,
  filtersButton,
  densityButton,
  exportButton,
  searchBar,
  onRowClick,
  onCellClick,
  processRowUpdate
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
  };

  return (
    <Box sx={{ height: 400, width: '100%' }} className={className}>
      <DataGrid
        {...dataGridProps}
        slots={{ toolbar: toolbar ? CustomToolbar : null }}
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
  
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        {columnsButton && <GridToolbarColumnsButton />}
        {filtersButton && <GridToolbarFilterButton />}
        {densityButton && <GridToolbarDensitySelector />}
        {exportButton && <GridToolbarExport />}
        <Box sx={{ flexGrow: 1 }} />
        {searchBar && <GridToolbarQuickFilter />}
      </GridToolbarContainer>
    );
  }
};



export default DataGridDemo;
