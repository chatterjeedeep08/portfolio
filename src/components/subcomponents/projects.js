import React from "react";
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Fab from '@mui/material/Fab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function projects() {
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
                <Grid item xs={4}>
                    <Card variant="outlined" sx={{borderRadius:10,justifyContent:"center"}}>
                        <CardMedia component="img" image={process.env.PUBLIC_URL + '/project1.png'} alt="project1"/>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <Typography variant="h4">Questly&nbsp;</Typography>
                                <Fab variant="extended" color="primary" aria-label="add" onClick={()=>console.log('button clicked')}>
                                    See project &nbsp;
                                    <ArrowForwardIosIcon />
                                </Fab>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*================================================================================================ */}
            </Grid>
        </CardContent>
    </Card>
  );
}
export default projects;