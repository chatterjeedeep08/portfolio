import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { FaCertificate } from "react-icons/fa";


function certifications() {
  return (
    <Card sx={{ minWidth: 275, margin:10, marginTop:5, marginBottom:5}}>
          <CardContent>
            <Typography variant="h4">
                <span role="img" aria-label="sparkles">✨</span>
                Some added feathers to my cap:
            </Typography>
            <br/>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FaCertificate color="#ffcb74"/>
                </ListItemIcon>
                <ListItemText 
                  primary="Microsoft Certified: Azure Data Fundamentals"
                  secondary="Certification Number: I189-4703"/>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FaCertificate color="#ffcb74"/>
                </ListItemIcon>
                <ListItemText 
                  primary="Microsoft Certified: Azure Fundamentals"
                  secondary="Certification Number: I315-7433"/>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FaCertificate color="#ffcb74"/>
                </ListItemIcon>
                <ListItemText 
                  primary="Google UX Design Professional Certificate"
                  secondary="Certification Ongoing"/>
              </ListItem>
            </List>
          </CardContent>
        </Card>
  );
}
export default certifications;