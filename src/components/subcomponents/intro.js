import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {FaLinkedin, FaInstagram, FaTwitter} from "react-icons/fa";
import { Paper } from "@mui/material";

function intro(){
    return(
        <Card sx={{ minWidth: 275, margin:5}}>
          <CardContent>
            {/* Profile Picture */}
            <Paper elevation={0} style={{width:"100%", height:"5%"}} sx={{display:{md:'inline', sm:'none', xs:'none'}}}>
              <img src={process.env.PUBLIC_URL + '/profileArt.jpg'} alt="profile art" style={{width:"100%", height:"5%"}}/>
              <Paper elevation={3} style={{width:"20%", height:"20%", borderWidth:"50%", borderStyle:"solid"}} sx={{marginTop:"-15%"}}>
                <img src={process.env.PUBLIC_URL + '/profile.png'} alt="profile" style={{width:"100%", height:"100%"}}/>
              </Paper>
            </Paper>
            <Paper elevation={0} style={{width:"100%", height:"5%"}} sx={{display:{md:'none', sm:'inline'}}}>
              <img src={process.env.PUBLIC_URL + '/profile.png'} alt="profile" style={{width:"70%", height:"70%",marginLeft:"15%"}}/>
            </Paper>
            <br/><br/>
            {/* Name */}
            <Typography variant="h2" sx={{display:{md:'inline', sm:'none', xs:'none'}}}>
                Hello! I'm Deepargh Chatterjee.
            </Typography>
            <Typography variant="h3" sx={{display:{md:'none',sm:'inline'}}}>
                Hello! I'm Deepargh Chatterjee.
            </Typography>
            <br/><br/>
            {/* About */}
            <Typography variant="h5">
                I'm a Full-stack developer and a UI/UX designer. And I'm specially good at Frontend Development.
                I'm currently pursuing my B.Tech in Computer Science and Engineering from &nbsp; 
                <a href="https://vitbhopal.ac.in/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#ffcb74"}}>VIT Bhopal University</a>
                <br/><br/>
                I'm a self-taught developer and designer. I'm always eager to learn new things and I'm always ready to take up new challenges.
                I love to code and design. I'm a very passionate person and I love to work on new projects.
                <br/><br/>
                I'm always ready to connect with new people. Here are my social media handles:
                <br/><br/>
                {/* Social Media Handles */}
                <a href="https://www.linkedin.com/in/deepargh-chatterjee-086662198/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#ffcb74"}}>
                  <FaLinkedin style={{fontSize:"1.5rem"}} size={30}/> &nbsp;&nbsp;
                </a>
                <a href="https://www.instagram.com/chatterjeedeep08/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#ffcb74"}}>
                  <FaInstagram style={{fontSize:"1.5rem"}} size={30}/> &nbsp;&nbsp;
                </a>
                <a href="https://twitter.com/DeeparghC" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#ffcb74"}}>
                  <FaTwitter style={{fontSize:"1.5rem"}} size={30}/> &nbsp;&nbsp;
                </a>
            </Typography>
          </CardContent>
        </Card>
    );
}
export default intro;