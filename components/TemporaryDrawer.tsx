import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Define an interface for each item in the drawer
interface DrawerItem {
  text: string;
  imgSrc: string; // URL of the image
}

// Define the props for the TemporaryDrawer component
interface TemporaryDrawerProps {
  title: string; // Explicitly typed
  items: DrawerItem[]; // Assuming items should be an array of DrawerItem
  initialOpen?: boolean;
}

// Use the TemporaryDrawerProps interface to type the props argument
const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({
  title,
  items, // Assuming you might change how items are handled based on previous discussions
  initialOpen = false,
}) => {
  const [open, setOpen] = React.useState<boolean>(initialOpen);

  // Your component implementation...
  // For simplicity, and assuming items handling might be different, not repeating it here

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>{title}</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        {/* Drawer content */}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
