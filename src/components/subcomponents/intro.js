import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function intro(){
    return(
        <Card sx={{ minWidth: 275, margin:10, marginBottom:5, padding:2}}>
          <CardContent>
            {/* Name */}
            <img src={process.env.PUBLIC_URL + '/profileArt.jpg'} alt="profile art" style={{width:"100%", height:"5%"}}/>
            <img src={process.env.PUBLIC_URL + '/profile.png'} alt="profile" style={{width:"10%", height:"10%",}}/>
            <Typography variant="h2">
                Hello! I'm Deepargh Chatterjee.
                <span role="img" aria-label="waving-hand">👋</span> 
            </Typography>
            <br/>
            {/* About */}
            <Typography variant="h5">
                I'm a Full-stack developer and a UI/UX designer. And I'm specially good at Frontend Development.
                <span role="img" aria-label="smiling-face">😊</span>
            </Typography>
          </CardContent>
        </Card>
    );
}
export default intro;