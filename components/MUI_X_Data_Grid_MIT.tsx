import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowsProp, GridRowParams  } from '@mui/x-data-grid';

interface DataGridDemoProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  pageSizeOptions: Array<number
  | { label: string, value: number }>;
  cellTextColor?: string; // Custom prop for cell text color
  headerTextColor?: string; // Custom prop for header background color
  font: string;
  className?: string;
  checkboxSelection : boolean;
  onRowClick: (params: GridRowParams, event: React.MouseEvent<HTMLElement>) => void;
}

const DataGridDemo: React.FC<DataGridDemoProps> = ({
  rows,
  columns,
  pageSizeOptions,
  cellTextColor,
  headerTextColor,
  font,
  checkboxSelection,
  className,
  onRowClick
}) => {
  // Using 'any' to bypass TypeScript checks as a last resort
  const dataGridProps: any = {
    rows,
    columns,
    pageSizeOptions,
    checkboxSelection,
    onRowClick
  };

  return (
    <Box sx={{ height: 400, width: '100%' }} className={className}>
      <DataGrid {...dataGridProps} sx={{
          '& .MuiDataGrid-cell': {
            color: cellTextColor,
            'font-family': font,
          },
          '& .MuiDataGrid-columnHeaders': {
            color: headerTextColor,
            'font-family': font,
          },
        }} 
      />
    </Box>
  );
};

export default DataGridDemo;
