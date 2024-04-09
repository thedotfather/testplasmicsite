import * as React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

interface DataGridDemoProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  pageSizeOptions: Array<number | { label: string, value: number }>;
  style?: React.CSSProperties; // Allows passing custom styles for sizing
}

const DataGridDemo: React.FC<DataGridDemoProps> = ({
  rows,
  columns,
  pageSizeOptions,
  style, // Accepts style prop
}) => {
  // Setup for DataGrid properties
  const dataGridProps: any = {
    rows,
    columns,
    pageSizeOptions,
    checkboxSelection: true,
  };

  // Apply custom styles to the container
  return (
    <div style={style}> {/* Apply the style prop to control size */}
      <DataGrid {...dataGridProps} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default DataGridDemo;
