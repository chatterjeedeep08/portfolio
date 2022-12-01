import React from "react";
import Rating from '@mui/material/Rating';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import {FaReact,FaNodeJs,FaHtml5} from 'react-icons/fa';
import {SiJavascript,SiMongodb,SiCss3,SiCplusplus} from 'react-icons/si';

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
    <Card sx={{ minWidth: 275, margin:10 , marginTop:5, marginBottom:5}}>
        <CardContent>
            <Typography variant="h4">
                <span role="img" aria-label="man-technologist">👨‍💻</span>
                My top skills are:
            </Typography>
            <br/>
            <Grid container spacing={3}>
                {/*skill*/}
                <Grid item xs={4} sx={{display:{md:'inline', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <FaReact size={30} color="#61dafb"/> 
                            <Typography variant="h5">
                           &nbsp;React </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8} sx={{display:{md:'inline', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly  size="large"/>
                            <Typography variant="h5">&nbsp; &nbsp;{labels[4.5]}</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*skill*/}
                <Grid item xs={4} sx={{display:{md:'none', sm:'inline'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <FaReact size={30} color="#61dafb"/> 
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8} sx={{display:{md:'none', sm:'inline'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly  size="large"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*========================================================================= */}
                {/*skill*/}
                <Grid item xs={4} sx={{display:{md:'inline', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <SiJavascript size={30} color="#f7df1e"/>
                            <Typography variant="h5">
                           &nbsp;JavaScript </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8} sx={{display:{md:'inline', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <Rating name="read-only" value={4} precision={0.5} readOnly  size="large"/>
                            <Typography variant="h5">&nbsp; &nbsp;{labels[4]}</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*skill*/}
                <Grid item xs={4} sx={{display:{md:'none', sm:'inline'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <SiJavascript size={30} color="#f7df1e"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8} sx={{display:{md:'none', sm:'inline'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <Rating name="read-only" value={4} precision={0.5} readOnly  size="large"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*========================================================================= */}
                {/*skill*/}
                <Grid item xs={4} sx={{display:{md:'inline', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <FaNodeJs size={30} color="#3c873a"/>
                            <Typography variant="h5">
                           &nbsp;NodeJS </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8} sx={{display:{md:'inline', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <Rating name="read-only" value={4} precision={0.5} readOnly  size="large"/>
                            <Typography variant="h5">&nbsp; &nbsp;{labels[4]}</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*skill*/}
                <Grid item xs={4} sx={{display:{md:'none', sm:'inline'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <FaNodeJs size={30} color="#3c873a"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8} sx={{display:{md:'none', sm:'inline'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <Rating name="read-only" value={4} precision={0.5} readOnly  size="large"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*========================================================================= */}
                {/*skill*/}
                <Grid item xs={4} sx={{display:{md:'inline', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <SiMongodb size={30} color="#47a248"/>
                            <Typography variant="h5">
                           &nbsp;MongoDB </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8} sx={{display:{md:'inline', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <Rating name="read-only" value={3.5} precision={0.5} readOnly  size="large"/>
                            <Typography variant="h5">&nbsp; &nbsp;{labels[3.5]}</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*skill*/}
                <Grid item xs={4} sx={{display:{md:'none', sm:'inline'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <SiMongodb size={30} color="#47a248"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8} sx={{display:{md:'none', sm:'inline'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <Rating name="read-only" value={3.5} precision={0.5} readOnly  size="large"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*========================================================================= */}
                {/*skill*/}
                <Grid item xs={4} sx={{display:{md:'inline', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <FaHtml5 size={30} color="#e34c26"/>
                            <Typography variant="h5">
                           &nbsp;HTML 5</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8} sx={{display:{md:'inline', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <Rating name="read-only" value={5} precision={0.5} readOnly  size="large"/>
                            <Typography variant="h5">&nbsp; &nbsp;{labels[5]}</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*skill*/}
                <Grid item xs={4} sx={{display:{md:'none', sm:'inline'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <FaHtml5 size={30} color="#e34c26"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8} sx={{display:{md:'none', sm:'inline'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <Rating name="read-only" value={5} precision={0.5} readOnly  size="large"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*========================================================================= */}
                {/*skill*/}
                <Grid item xs={4} sx={{display:{md:'inline', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <SiCss3 size={30} color="#264de4"/>
                            <Typography variant="h5">
                           &nbsp;CSS</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8} sx={{display:{md:'inline', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly  size="large"/>
                            <Typography variant="h5">&nbsp; &nbsp;{labels[4.5]}</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*skill*/}
                <Grid item xs={4} sx={{display:{md:'none', sm:'inline'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <SiCss3 size={30} color="#264de4"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8} sx={{display:{md:'none', sm:'inline'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly  size="large"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*========================================================================= */}
                {/*skill*/}
                <Grid item xs={4} sx={{display:{md:'inline', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <SiCplusplus size={30} color="#00599c"/>
                            <Typography variant="h5">
                           &nbsp;C++</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8} sx={{display:{md:'inline', sm:'none', xs:'none'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly  size="large"/>
                            <Typography variant="h5">&nbsp; &nbsp;{labels[4.5]}</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*skill*/}
                <Grid item xs={4} sx={{display:{md:'none', sm:'inline'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <SiCplusplus size={30} color="#00599c"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/*rating*/}
                {/*Change rating value to adjust fluency of the skill*/}
                <Grid item xs={8} sx={{display:{md:'none', sm:'inline'}}}>
                    <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                        <CardContent>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly  size="large"/>
                            </div>
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