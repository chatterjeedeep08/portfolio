import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { Grid } from "@mui/material";
import {AiFillStar} from 'react-icons/ai';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(256, 256, 256, .25)',
}));

function education() {
  return (
    <Card sx={{ minWidth: 275, margin:5}}>
      <CardContent>
          <Typography variant="h4">
              <span role="img" aria-label="graduation-cap">🎓</span>
              My education:
          </Typography>
          <br/>
          <Accordion>
            <MuiAccordionSummary
              expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container>
                <Grid item xs={12} sm={6} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Typography variant="h5">Vellore Institute of Technology, Bhopal</Typography>
              </Grid>
                <Grid item xs={12} sm={6} sx={{display:{md:'inline', lg:'none', sm:'none', xs:'none'}}}>
              <Typography variant="h5">VIT University, Bhopal</Typography>
              </Grid>
                <Grid item xs={12} sm={6} sx={{display:{md:'none', lg:'none', sm:'inline'}}}>
              <Typography variant="h5">VIT Bhopal</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>

              <Typography variant="h5" display="flex" justifyContent="right" sx={{marginLeft: 2, marginRight:2}}>2019 - 2023</Typography>
              </Grid>
              </Grid>
            </MuiAccordionSummary>
            <AccordionDetails>
              <List>
                  <ListItem>
                    <ListItemIcon>
                      <AiFillStar style={{color:"#ffcb74"}}/>
                    </ListItemIcon>
                    <ListItemText
                      primary="Degree: Bachelor of Technology"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AiFillStar style={{color:"#ffcb74"}}/>
                    </ListItemIcon>
                    <ListItemText
                      primary="CGPA: 8.42/10"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AiFillStar style={{color:"#ffcb74"}}/>
                    </ListItemIcon>
                    <ListItemText
                      primary="Major: Computer Science and Engineering"
                    />
                  </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          {/*=============================================================================================== */}
          {/*=============================================================================================== */}
          <Accordion>
            <MuiAccordionSummary
              expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container>
                <Grid item xs={12} sm={6} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Typography variant="h5">DAV Model School, Durgapur</Typography>
              </Grid>
                <Grid item xs={12} sm={6} sx={{display:{md:'inline', lg:'none', sm:'none', xs:'none'}}}>
              <Typography variant="h5">DAV Model School</Typography>
              </Grid>
                <Grid item xs={12} sm={6} sx={{display:{md:'none', lg:'none', sm:'inline'}}}>
              <Typography variant="h5">DAV Model School</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Typography variant="h5" display="flex" justifyContent="right" sx={{marginLeft: 2, marginRight:2}}>2017 - 2019</Typography>
              </Grid>
              </Grid>
            </MuiAccordionSummary>
            <AccordionDetails>
              <List>
                  <ListItem>
                    <ListItemIcon>
                      <AiFillStar style={{color:"#ffcb74"}}/>
                    </ListItemIcon>
                    <ListItemText
                      primary="Degree: Higher Secondary Certificate"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AiFillStar style={{color:"#ffcb74"}}/>
                    </ListItemIcon>
                    <ListItemText
                      primary="Percentage: 77.0%"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AiFillStar style={{color:"#ffcb74"}}/>
                    </ListItemIcon>
                    <ListItemText
                      primary="Major: Science (Mathematics, Physics, Chemistry)"
                    />
                  </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          {/*=============================================================================================== */}
          {/*=============================================================================================== */}
          <Accordion>
            <MuiAccordionSummary
              expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container>
                <Grid item xs={12} sm={6} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Typography variant="h5">DAV Model School, Durgapur</Typography>
              </Grid>
                <Grid item xs={12} sm={6} sx={{display:{md:'inline', lg:'none', sm:'none', xs:'none'}}}>
              <Typography variant="h5">DAV Model School</Typography>
              </Grid>
                <Grid item xs={12} sm={6} sx={{display:{md:'none', lg:'none', sm:'inline'}}}>
              <Typography variant="h5">DAV Model School</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Typography variant="h5" display="flex" justifyContent="right" sx={{marginLeft: 2, marginRight:2}}>2017</Typography>
              </Grid>
              </Grid>
            </MuiAccordionSummary>
            <AccordionDetails>
              <List>
                  <ListItem>
                    <ListItemIcon>
                      <AiFillStar style={{color:"#ffcb74"}}/>
                    </ListItemIcon>
                    <ListItemText
                      primary="Degree: Secondary Certificate"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AiFillStar style={{color:"#ffcb74"}}/>
                    </ListItemIcon>
                    <ListItemText
                      primary="Percentage: 89.3%"
                    />
                  </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          {/*=============================================================================================== */}
          {/*=============================================================================================== */}
      </CardContent>
    </Card>
  );
}
export default education;