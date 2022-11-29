import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function techstack() {
  return (
    <Card sx={{ minWidth: 275, margin:10, marginTop:5, marginBottom:5}}>
        <CardContent>
            <Typography variant="h4">
                <span role="img" aria-label="gear">⚙️</span>
                My overall tech stack:
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
export default techstack;