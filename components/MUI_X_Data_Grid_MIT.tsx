import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowsProp, GridRowParams, GridCellParams, useGridApiRef, GridCellModesModel } from '@mui/x-data-grid';

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
  const apiRef = useGridApiRef();
  const [cellModesModel, setCellModesModel] = React.useState<GridCellModesModel>({});

  const handleProcessRowUpdate = (newRow: any, oldRow: any) => {
    const updatedRow = processRowUpdate ? processRowUpdate(newRow, oldRow) : newRow;
    // Set the cell mode to view after processing update
    setCellModesModel({
      ...cellModesModel,
      [newRow.id]: {
        ...cellModesModel[newRow.id],
        [newRow.field]: { mode: 'view' }
      }
    });
    return updatedRow;
  };
  
  // 'dataGridProps' uses 'any' type to bypass TypeScript checks for additional props like 'onRowClick'
  const dataGridProps: any = {
    rows,
    columns,
    pageSizeOptions,
    checkboxSelection,
    onRowClick,
    onCellClick,
    onCellEditStop,
    processRowUpdate: (newRow: any, oldRow: any) => handleProcessRowUpdate(newRow, oldRow),
    apiRef
  };

  return (
    <Box sx={{ height: 400, width: '100%' }} className={className}>
      <DataGrid
        {...dataGridProps}
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
