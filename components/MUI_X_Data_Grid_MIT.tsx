import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

interface DataGridDemoProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  pageSizeOptions: Array<number
  | { label: string, value: number }>;
  cellTextColor?: string; // Custom prop for cell text color
  headerTextColor?: string; // Custom prop for header background color
  className?: string;
}

const DataGridDemo: React.FC<DataGridDemoProps> = ({
  rows,
  columns,
  pageSizeOptions,
  cellTextColor,
  headerTextColor,
  className
}) => {
  // Using 'any' to bypass TypeScript checks as a last resort
  const dataGridProps: any = {
    rows,
    columns,
    pageSizeOptions,
    checkboxSelection: true,
  };

  return (
    <Box sx={{ height: 400, width: '100%' }} className={className}>
      <DataGrid {...dataGridProps} sx={{
          '& .MuiDataGrid-cell': {
            color: cellTextColor, // Apply the cell text color
          },
          '& .MuiDataGrid-columnHeaders': {
            color: headerTextColor, // Apply the header background color
          },
        }} />
    </Box>
  );
};

export default DataGridDemo;
