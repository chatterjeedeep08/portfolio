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
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

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
                            <div style={{display:"inline"}}>
                                {/*Enter project name here*/}
                                <Typography variant="h4">Questly&nbsp;</Typography><br/>
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
                {/* Project Item */}
                <Grid item xs={4} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{borderRadius:10,justifyContent:"center"}}>
                        {/*Enter project image here*/}
                        <CardMedia component="img" image={process.env.PUBLIC_URL + '/project2.png'} alt="project1"/>
                        <CardContent>
                            <div style={{display:"inline"}}>
                                {/*Enter project name here*/}
                                <Typography variant="h4">Sonic Revolution&nbsp;</Typography><br/>
                                <Fab variant="extended" color="primary" aria-label="add" onClick={()=>setOpen2(true)}>
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
                        <CardMedia component="img" image={process.env.PUBLIC_URL + '/project2.png'} alt="project1"/>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                {/*Enter project name here*/}
                                <Typography variant="h4">Sonic Revolution&nbsp;</Typography>
                                <Fab variant="extended" color="primary" aria-label="add" onClick={()=>setOpen2(true)}>
                                    <ArrowForwardIosIcon />
                                </Fab>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Project Description */}
                <Dialog
                    open={open2}
                    onClose={()=>setOpen2(false)}
                    scroll='paper'
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    {/*Enter project name here*/}
                    <DialogTitle id="scroll-dialog-title">Questly</DialogTitle>
                    <DialogContent dividers={true}>
                        {/*Enter project image here*/}
                        <img src={process.env.PUBLIC_URL + '/project2.png'} alt="project1" style={{width:"50%", height:"50%", margin:"25%", marginTop:"5%", marginBottom:"0%"}}/>
                        <DialogContentText
                            id="scroll-dialog-description"
                            tabIndex={-1}
                        >
                            {/*Enter project description here*/}
                            Sonic Revolution is an audio/sound generating app that aims to help beginner game
                            developers create their own copyright-free original in-game music and sound effects. It
                            also has a web forum where users can upload their own sound effects.{<><br/><br/></>}
                            The audio generation is done in a procedural manner where we have a concept of
                            “tracks” and “tones”. A “tone” can be created by choosing a musical note, octave, and
                            duration which is then added to a track. We can add multiple tones on a track and overlay
                            multiple tracks to generate any kind of audio effect.{<><br/><br/></>}
                            The companion website, Sonic Revolution Forum, allows users to share their own
                            sound effects with other game developers where anyone can listen and download audio
                            files uploaded by others.
                        </DialogContentText>
                        <div style={{display:"flex",justifyContent:"space-evenly", margin:"2%"}}>
                            {/*Enter project links here*/}
                            <Button variant="outlined" color="primary" href="https://github.com/supanthapaul/sonic-revolution" target="_blank" rel="noopener noreferrer" >Github Repo</Button>
                            <Button variant="outlined" color="primary" href={process.env.PUBLIC_URL + '/files/Sonic_Revolution_Report_Final.pdf'} download="Sonic_Revolution_Report_Final.pdf" rel="noopener noreferrer" >Project Report</Button>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>setOpen2(false)}>Close</Button>
                    </DialogActions>
                </Dialog>
                {/*================================================================================================
                =================================================================================================== */}
                {/* Project Item */}
                <Grid item xs={4} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{borderRadius:10,justifyContent:"center"}}>
                        {/*Enter project image here*/}
                        <CardMedia component="img" image={process.env.PUBLIC_URL + '/project3.png'} alt="project3"/>
                        <CardContent>
                            <div style={{display:"inline"}}>
                                {/*Enter project name here*/}
                                <Typography variant="h4">MindPeace&nbsp;</Typography><br/>
                                <Fab variant="extended" color="primary" aria-label="add" onClick={()=>setOpen3(true)}>
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
                        <CardMedia component="img" image={process.env.PUBLIC_URL + '/project3.png'} alt="project3"/>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                {/*Enter project name here*/}
                                <Typography variant="h4">MindPeace&nbsp;</Typography>
                                <Fab variant="extended" color="primary" aria-label="add" onClick={()=>setOpen3(true)}>
                                    <ArrowForwardIosIcon />
                                </Fab>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Project Description */}
                <Dialog
                    open={open3}
                    onClose={()=>setOpen3(false)}
                    scroll='paper'
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    {/*Enter project name here*/}
                    <DialogTitle id="scroll-dialog-title">Questly</DialogTitle>
                    <DialogContent dividers={true}>
                        {/*Enter project image here*/}
                        <img src={process.env.PUBLIC_URL + '/project3.png'} alt="project3" style={{width:"50%", height:"50%", margin:"25%", marginTop:"5%", marginBottom:"0%"}}/>
                        <DialogContentText
                            id="scroll-dialog-description"
                            tabIndex={-1}
                        >
                            {/*Enter project description here*/}
                            MindPeace is an online platform that is focused on mental health, its awareness, and building 
                            a community that supports one another in times of need. MindPeace not only has dedicated spaces 
                            for each age group but also has branched out to address many mental health issues other than
                            depression-like burnout, anxiety, PTSD, and eating disorders. One of the objectives of the 
                            project is to create a safe space and easy access to genuine resources.
                            {<><br/><br/></>}
                            The objectives of this project are multi-faceted. One of the major objectives of MindPeace
                            is to provide good and effective mental health care, accessible for all regardless of age and status,
                            and to eliminate any social stigma by normalizing it. Also, a big motivation was to integrate some
                            of the most useful features from different applications into one space.
                            {<><br/><br/></>}
                            We aim to connect some of the best professionals working in the field to every person in need and
                            get them timely help. Also, an assessment plan through which an individual can evaluate their
                            condition and get help accordingly.
                            {<><br/><br/></>}
                            Here, with the consideration of every concerned person, we have provided reliable and tested
                            resources and ways through which one can treat themselves or someone close to them.
                        </DialogContentText>
                        <div style={{display:"flex",justifyContent:"space-evenly", margin:"2%"}}>
                            {/*Enter project links here*/}
                            <Button variant="outlined" color="primary" href="https://github.com/supanthapaul/mindpeace" target="_blank" rel="noopener noreferrer" >Github Repo</Button>
                            <Button variant="outlined" color="primary" href={process.env.PUBLIC_URL + '/files/MindPeace Report_Final.pdf'} download="MindPeace Report_Final.pdf" rel="noopener noreferrer" >Project Report</Button>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>setOpen3(false)}>Close</Button>
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