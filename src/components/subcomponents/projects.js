import React from "react";
import { Button, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function projects() {
    const [open1, setOpen1] = React.useState(false);

  return (
    <Card sx={{ minWidth: 275, margin:10 , marginTop:5, marginBottom:5}}>
        <CardContent>
            <Typography variant="h4">
                <span role="img" aria-label="robot">🤖</span>
                Some of my projects are:
            </Typography>
            <br/>
            <Grid container spacing={2}>
                {/* Project Item */}
                <Grid item xs={4} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{borderRadius:10,justifyContent:"center"}}>
                        {/*Enter project image here*/}
                        <CardMedia component="img" image={process.env.PUBLIC_URL + '/project1.png'} alt="project1"/>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                {/*Enter project name here*/}
                                <Typography variant="h4">Questly&nbsp;</Typography>
                                <Fab variant="extended" color="primary" aria-label="add" onClick={()=>setOpen1(true)}>
                                    See project &nbsp;
                                    <ArrowForwardIosIcon />
                                </Fab>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*Responsive Project Item */}
                <Grid item md={6} sm={12} sx={{display:{lg:'none', md:'inline'}}}>
                    <Card variant="outlined" sx={{borderRadius:10,justifyContent:"center"}}>
                        {/*Enter project image here*/}
                        <CardMedia component="img" image={process.env.PUBLIC_URL + '/project1.png'} alt="project1"/>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                {/*Enter project name here*/}
                                <Typography variant="h4">Questly&nbsp;</Typography>
                                <Fab variant="extended" color="primary" aria-label="add" onClick={()=>setOpen1(true)}>
                                    <ArrowForwardIosIcon />
                                </Fab>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Project Description */}
                <Dialog
                    open={open1}
                    onClose={()=>setOpen1(false)}
                    scroll='paper'
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    {/*Enter project name here*/}
                    <DialogTitle id="scroll-dialog-title">Questly</DialogTitle>
                    <DialogContent dividers={true}>
                        {/*Enter project image here*/}
                        <img src={process.env.PUBLIC_URL + '/project1.png'} alt="project1" style={{width:"50%", height:"50%", margin:"25%", marginTop:"5%", marginBottom:"0%"}}/>
                        <DialogContentText
                            id="scroll-dialog-description"
                            tabIndex={-1}
                        >
                            {/*Enter project description here*/}
                            Questly is a task management productivity app that aims to gamify the to-do scheduling
                            and completion process where users get rewarded to complete tasks and goals so that they
                            are vastly incentivized for being productive. It is a web app intended to gamify your task
                            management.{<><br/><br/></>}
                            It is a gamified productivity app which is composed of three functionally distinct subunit
                            types, Quests (A customizable To-do list), Notes (a component that records personal
                            notes), and the Stats section (a section that shows how well the user is doing with the help
                            of Experience Points, Levels, and Ranks). All the components communicate with each
                            other through an application-level state system where the data is pulled and stored onto
                            Google Cloud Firestore (a realtime, document-based NoSQL database).{<><br/><br/></>}
                            The app features a level up system, intended to stimulate you for completing tasks. It is
                            dependent on the XP you gain from completing tasks and will help you increase your
                            mental fortitude in relevance to yourself.
                        </DialogContentText>
                        <div style={{display:"flex",justifyContent:"space-evenly", margin:"2%"}}>
                            {/*Enter project links here*/}
                            <Button variant="outlined" color="primary" href="https://github.com/supanthapaul/questly" target="_blank" rel="noopener noreferrer" >Github Repo</Button>
                            <Button variant="outlined" color="primary" href={process.env.PUBLIC_URL + '/files/Questly Report_Final.pdf'} download="Questly Report_Final" rel="noopener noreferrer" >Project Report</Button>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>setOpen1(false)}>Close</Button>
                    </DialogActions>
                </Dialog>
                {/*================================================================================================
                =================================================================================================== */}
            </Grid>
        </CardContent>
    </Card>
  );
}
export default projects;