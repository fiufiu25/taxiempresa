import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Divider, Typography } from '@mui/material';


export default function Drawers({Enlaces}) {
    console.log("aqui",Enlaces)
  return (
    <>
   
    <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          
          <Typography variant='h5' sx={{textAlign:"center",fontFamily:"impact",pt:2}}>
            TAXI ASTRO
          </Typography>
            {
               Enlaces&& Enlaces.map(item=>(
                    <ListItem sx={{py:1}} disablePadding key={item.title}>
<ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
                        </ListItem>
                ))
            }
            
          
         
         
        </List>
      </nav>
    </Box>
    </>
  );
}
