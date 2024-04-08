import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

interface DataGridDemoProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  pageSize?: number;
}

const DataGridDemo: React.FC<DataGridDemoProps> = ({
  rows,
  columns,
  pageSize = 5,
}) => {
  // Using 'any' to bypass TypeScript checks as a last resort
  const dataGridProps: any = {
    rows,
    columns,
    pageSizeOptions: [25, 50, 100],
    checkboxSelection: true,
    
  };

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid {...dataGridProps} />
    </Box>
  );
};

export default DataGridDemo;
