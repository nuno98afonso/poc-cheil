'use client';

import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListIcon from '@mui/icons-material/List';
import { useRouter } from 'next/navigation';

const drawerWidth = 240;

const Sidebar = () => {
  const router = useRouter();
  
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <List>
        {['Activities', 'Activity Types'].map((text, index) => (
          <ListItem key={text} onClick={() => handleNavigation(`/${text.replaceAll(' ','')}`)}>
            <ListItemIcon>
              {index % 2 === 0 ? <AssignmentIcon /> : <ListIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
