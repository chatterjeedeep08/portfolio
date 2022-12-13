import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper';

function interests() {
  return (
    <Card sx={{ minWidth: 275, margin:5}}>
        <CardContent>
            <Typography variant="h4">
                <span role="img" aria-label="artist-palette">🎨</span>
                Some of my interests:
            </Typography>
            <br/>
            <Grid container spacing={2}>
                <Grid item lg={2} md={3} sm={4} xs={6}>
                    <Paper variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <Typography variant="subtitle1">
                            <span role="img" aria-label="openbook">📖</span>
                            &nbsp;Reading </Typography>
                    </Paper>
                </Grid>
                {/*=========================================================================================*/}
                <Grid item lg={2} md={3} sm={4} xs={6}>
                    <Paper variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <Typography variant="subtitle1">
                            <span role="img" aria-label="musical-note">🎵</span>
                            &nbsp;Music</Typography>
                    </Paper>
                </Grid>
                {/*=========================================================================================*/}
                <Grid item lg={2} md={3} sm={4} xs={6}>
                    <Paper variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <Typography variant="subtitle1">
                            <span role="img" aria-label="football">⚽</span>
                            &nbsp;Football</Typography>
                    </Paper>
                </Grid>
                {/*=========================================================================================*/}
                <Grid item lg={2} md={3} sm={4} xs={6}>
                    <Paper variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <Typography variant="subtitle1">
                            <span role="img" aria-label="boxing-glove">🥊</span>
                            &nbsp;Boxing </Typography>
                    </Paper>
                </Grid>
                {/*=========================================================================================*/}
                <Grid item lg={2} md={3} sm={4} xs={6}>
                    <Paper variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <Typography variant="subtitle1">
                            <span role="img" aria-label="videogames">🎮</span>
                            &nbsp;Gaming</Typography>
                    </Paper>
                </Grid>
                {/*=========================================================================================*/}
                <Grid item lg={2} md={3} sm={4} xs={6}>
                    <Paper variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <Typography variant="subtitle1">
                            <span role="img" aria-label="performing-arts">🎭</span>
                            &nbsp;Anime</Typography>
                    </Paper>
                </Grid>
                {/*=========================================================================================*/}
                
            </Grid>
        </CardContent>
    </Card>
  );
}
export default interests;