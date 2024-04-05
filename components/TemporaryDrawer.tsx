import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Define props types for Drawer Items
type DrawerItemProps = {
  text: string;
  link: string;
  iconName: string; // Assume iconName can be used to dynamically load the correct icon
};

type TemporaryDrawerProps = {
  title: string; // Title for the drawer
  items: DrawerItemProps[]; // Array of items for dynamic rendering
  initialOpen?: boolean;
};

const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({ title, items, initialOpen = false }) => {
  const [open, setOpen] = useState(initialOpen);

  // Placeholder for dynamic icon loading function
  const getIcon = (iconName: string): JSX.Element => {
    // Logic to dynamically load an icon based on iconName
    // This could be a mapping of names to imported icons, or dynamic imports
    // For placeholder purposes, return a generic icon or null
    return null; // Placeholder implementation
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>{title}</Button>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box role="presentation" sx={{ width: 250 }}>
          <List>
            {items.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={item.link}>
                  <ListItemIcon>{getIcon(item.iconName)}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
