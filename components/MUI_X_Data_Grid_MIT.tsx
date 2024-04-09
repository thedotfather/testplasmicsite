import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

interface DataGridDemoProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  pageSizeOptions: Array<number
  | { label: string, value: number }>;
  className?: string;
  style?: React.CSSProperties;
}

const DataGridDemo: React.FC<DataGridDemoProps> = ({
  rows,
  columns,
  pageSizeOptions,
  className,
  style
}) => {
  // Using 'any' to bypass TypeScript checks as a last resort
  const dataGridProps: any = {
    rows,
    columns,
    pageSizeOptions,
    checkboxSelection: true,
  };

  return (
    <Box sx={{ height: 400, width: '100%' }} className={className} style={style}>
      <DataGrid {...dataGridProps} />
    </Box>
  );
};

export default DataGridDemo;
