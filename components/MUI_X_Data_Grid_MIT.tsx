import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowsProp, GridRowParams, GridCellParams, GridToolbarContainer, GridToolbarExport, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarQuickFilter, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import PrintIcon from '@mui/icons-material/Print';
import ErrorIcon from '@mui/icons-material/Error'; // Fallback icon

interface DataGridDemoProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  actions: ActionConfig[];
  eventHandlers: Record<string, (id: any) => void>;
  pageSizeOptions: Array<number | { label: string, value: number }>;
  cellTextColor?: string; // Custom prop for cell text color
  headerTextColor?: string; // Custom prop for header text color
  toolbarButtonsColor: string;
  font: string; // Custom prop for font
  className?: string; // Allows custom class names for styling
  checkboxSelection: boolean; // Prop for enabling checkbox selection
  toolbar: boolean;
  columnsButton: boolean;
  filtersButton: boolean;
  densityButton: boolean;
  exportButton: boolean;
  searchBar: boolean;
  hideFooterPagination: boolean;
  onDelete: (id: number | string) => void;  // Prop to handle delete action
  onPrint: (id: number | string) => void;   // Prop to handle print action
  onRowClick: (params: GridRowParams, event: React.MouseEvent<HTMLElement>) => void; // Handler for row click events
  onCellClick: (params: GridCellParams, event: React.MouseEvent<HTMLElement>) => void; // Handler for cell click events
  processRowUpdate: (newRow: any, oldRow: any) => any;
  onAction: (actionType: string, row: any) => void;
}

const iconMapping = {
  delete: <DeleteIcon />,
  print: <PrintIcon />,
};

interface ActionConfig {
  iconType: string;
  actionEventName: string;
}

// Define the icons state with a specific index signature
interface IconsState {
  [key: string]: React.ComponentType<any> | null;
}

const loadIcon = async (iconName: string): Promise<React.ComponentType<any> | null> => {
  if (!iconName) return null;
  try {
    const icon = require(`@mui/icons-material/Error`).default;
    return icon;
  } catch (error) {
    console.error("Failed to load icon: ", iconName);
    return ErrorIcon; // Return the ErrorIcon as a fallback
  }
};

const DataGridDemo: React.FC<DataGridDemoProps> = ({
  rows,
  columns,
  pageSizeOptions,
  cellTextColor,
  headerTextColor,
  toolbarButtonsColor,
  font,
  className,
  checkboxSelection,
  toolbar,
  columnsButton,
  filtersButton,
  densityButton,
  exportButton,
  searchBar,
  hideFooterPagination,
  onRowClick,
  onCellClick,
  processRowUpdate,
  actions,
  onAction,
  eventHandlers,
  onDelete,
  onPrint
}) => {
  const handleProcessRowUpdate = (newRow: any, oldRow: any) => {
    processRowUpdate(newRow, oldRow);
    return new Promise((resolve, reject) => {
      resolve(newRow);
    });
  };

  const [icons, setIcons] = React.useState<Record<string, React.ComponentType>>({});

  React.useEffect(() => {
    const loadIcons = async () => {
      const defaultIconModule = await import('@mui/icons-material/Error');
      const defaultIcon = defaultIconModule.default;
      const newIcons: Record<string, React.ComponentType> = {};

      for (const action of actions) {
        try {
          const iconModule = await import(`@mui/icons-material/${action.iconType}`).catch(() => ({ default: defaultIcon }));
          newIcons[action.iconType] = iconModule.default;
        } catch (error) {
          console.error(`Error loading icon ${action.iconType}:`, error);
          newIcons[action.iconType] = defaultIcon; // Use ErrorIcon as fallback
        }
      }

      setIcons(newIcons);
    };

    loadIcons();
  }, [actions]);
  

  const augmentedColumns = [
    ...columns,
    {
      field: 'actions',
      type: 'actions',
      getActions: (params: GridRowParams) => actions.map(action => (
        <GridActionsCellItem
          key={`${params.id}-${action.iconType}`}
          icon={React.createElement(icons[action.iconType] || ErrorIcon)}
          onClick={() => onAction(action.actionEventName, params.row)}
          label={action.iconType}
        />
      )),
    },
  ];
  const dataGridProps: any = {
    rows,
    columns: augmentedColumns,
    pageSizeOptions,  
    checkboxSelection,
    hideFooterPagination,
    onRowClick,
    onCellClick,
    processRowUpdate: (newRow: any, oldRow: any) => handleProcessRowUpdate(newRow, oldRow),
    onAction
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
          '& .MuiDataGrid-toolbarContainer .MuiButtonBase-root':{
            color: toolbarButtonsColor
          }
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
