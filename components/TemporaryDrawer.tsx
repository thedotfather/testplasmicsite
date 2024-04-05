import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// Importing icons
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// Add other necessary icon imports here

// Define a type for the items in the drawer
type DrawerItem = {
  text: string;
  iconName: 'inbox' | 'mail'; // Extend this union type as you add more icons
  link: string;
};

// Helper function to dynamically select the icon
const getIcon = (iconName: DrawerItem['iconName']): React.ReactNode => {
  switch (iconName) {
    case 'inbox':
      return <InboxIcon />;
    case 'mail':
      return <MailIcon />;
    // Add more cases for other icons as needed
    default:
      return null; // Return null or a default icon as a fallback
  }
};

const TemporaryDrawer: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate(); // Hook for navigation

  const items: DrawerItem[] = [ // Example items array, adjust according to your needs
    { text: 'Inbox', iconName: 'inbox', link: '/inbox' },
    { text: 'Send email', iconName: 'mail', link: '/send-email' },
    // Add more item objects as needed
  ];

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (link: string) => {
    navigate(link); // Use the navigate function to change routes
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {items.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => handleNavigation(item.link)}>
              <ListItemIcon>
                {getIcon(item.iconName)}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* If you have other groups of items, repeat the mapping process here as needed */}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
