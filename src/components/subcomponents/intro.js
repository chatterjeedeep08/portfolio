import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function intro(){
    return(
        <Card sx={{ minWidth: 275, margin:10, marginBottom:5}}>
          <CardContent>
            {/* Name */}
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