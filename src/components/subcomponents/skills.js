import React from "react";
import Rating from '@mui/material/Rating';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  

function skills() {
  return (
    <Card sx={{ minWidth: 275, margin:10 , marginTop:5}}>
        <CardContent>
            <Typography variant="h4">
                My top skills are:
                <span role="img" aria-label="man-technologist">👨‍💻</span>
            </Typography>
            <br/>
            <Grid container spacing={2}>
                {/*skill*/}
                <Grid item xs={4}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center"}}>
                        <CardContent>
                            <Typography variant="h5"> React </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center"}}>
                        <CardContent>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly  size="large"/>
                        </CardContent>
                    </Card>
                </Grid>
                {/*========================================================================= */}
                {/*skill*/}
                <Grid item xs={4}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center"}}>
                        <CardContent>
                            <Typography variant="h5"> React </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center"}}>
                        <CardContent>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly  size="large"/>
                        </CardContent>
                    </Card>
                </Grid>
                {/*========================================================================= */}
                {/*skill*/}
                <Grid item xs={4}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center"}}>
                        <CardContent>
                            <Typography variant="h5"> React </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center"}}>
                        <CardContent>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly  size="large"/>
                        </CardContent>
                    </Card>
                </Grid>
                {/*========================================================================= */}
                {/*skill*/}
                <Grid item xs={4}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center"}}>
                        <CardContent>
                            <Typography variant="h5"> React </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center"}}>
                        <CardContent>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly  size="large"/>
                        </CardContent>
                    </Card>
                </Grid>
                {/*========================================================================= */}
                {/*skill*/}
                <Grid item xs={4}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center"}}>
                        <CardContent>
                            <Typography variant="h5"> React </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center"}}>
                        <CardContent>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly  size="large"/>
                        </CardContent>
                    </Card>
                </Grid>
                {/*========================================================================= */}
                {/*skill*/}
                <Grid item xs={4}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center"}}>
                        <CardContent>
                            <Typography variant="h5"> React </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center"}}>
                        <CardContent>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly  size="large"/>
                        </CardContent>
                    </Card>
                </Grid>
                {/*========================================================================= */}
                
            </Grid>
        </CardContent>
    </Card>
  );
}
export default skills;