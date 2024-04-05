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

interface DrawerItem {
  text: string;
  imgSrc: string; // URL of the image
}

interface TemporaryDrawerProps {
  title: string;
  items: string; // JSON string of items
  initialOpen?: boolean;
}

const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({ title, items, initialOpen = false }) => {
  const [open, setOpen] = React.useState<boolean>(initialOpen);

  // Parse the items JSON string
  let parsedItems: DrawerItem[] = [];
  try {
    parsedItems = JSON.parse(items);
  } catch (error) {
    console.error("Error parsing items JSON", error);
  }

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {parsedItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* Render the image for each item */}
                <img src={item.imgSrc} alt={item.text} style={{ width: 24, height: 24 }} />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>{title}</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
