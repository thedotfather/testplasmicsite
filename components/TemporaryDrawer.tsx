import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

// Assuming items will be passed as children now
interface TemporaryDrawerProps {
  title: string;
  children?: React.ReactNode; // Using children to pass items
  initialOpen?: boolean;
}

const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({
  title,
  children,
  initialOpen = false,
}) => {
  const [open, setOpen] = React.useState<boolean>(initialOpen);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>{title}</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>{children}</List> {/* Render children directly */}
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
