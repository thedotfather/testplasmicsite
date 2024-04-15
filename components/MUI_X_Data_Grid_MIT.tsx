import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowsProp, GridRowParams, GridCellParams, useGridApiRef } from '@mui/x-data-grid';

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
  onCellEditStop: (params: GridCellParams, event: React.MouseEvent<HTMLElement>) => void; // Handler for when cell editing stops
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
  onRowClick,
  onCellClick,
  onCellEditStop,
  processRowUpdate
}) => {
  const [oldRowData, setOldRowData] = React.useState<any>({});

  const handleCellEditStart = (params: GridCellParams) => {
    // Capture the old row data at the start of editing
    const oldRow = rows.find(r => r.id === params.id);
    setOldRowData(oldRow);
  };

  const handleCellEditStop = (params: GridCellParams) => {
    // Process the row update after editing stops
    if (oldRowData) {
      processRowUpdate(params.row, oldRowData);
    }
  };
  // 'dataGridProps' uses 'any' type to bypass TypeScript checks for additional props like 'onRowClick'
  const dataGridProps: any = {
    rows,
    columns,
    pageSizeOptions,
    checkboxSelection,
    onRowClick,
    onCellClick,
    //onCellEditStop : (params: GridCellParams, event: React.MouseEvent<HTMLElement>) => handleCellEditStop(params, event),
    processRowUpdate //processRowUpdate: (newRow: any, oldRow: any) => handleProcessRowUpdate(newRow, oldRow)
  };

  return (
    <Box sx={{ height: 400, width: '100%' }} className={className}>
      <DataGrid
        {...dataGridProps}
        onCellEditStart={handleCellEditStart}
        onCellEditStop={handleCellEditStop}
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
