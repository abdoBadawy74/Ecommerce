import { ExpandMore } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

export default function Links() {
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center",position:"relative" }}>
        <Typography variant="body1">Home</Typography>
        <ExpandMore sx={{ fontSize: "16px" }} />
       <Paper>
         <nav aria-label="secondary mailbox folders">
           <List>
             <ListItem disablePadding>
               <ListItemButton>
                 <ListItemText primary="Trash" />
               </ListItemButton>
             </ListItem>
             <ListItem disablePadding>
               <ListItemButton component="a" href="#simple-list">
                 <ListItemText primary="Spam" />
               </ListItemButton>
             </ListItem>
           </List>
         </nav>
       </Paper>
      </Box>
    </div>
  );
}
