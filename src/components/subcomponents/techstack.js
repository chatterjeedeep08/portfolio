import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import {FaReact,FaNodeJs,FaHtml5,FaPython,FaJava,FaBootstrap,FaUnity,FaFigma,FaGithub} from 'react-icons/fa';
import {SiJavascript,SiMongodb,SiCss3,SiCplusplus,SiFirebase,SiCsharp,SiBlender,SiAdobexd,SiAdobephotoshop} from 'react-icons/si';


function techstack() {
  return (
    <Card sx={{ minWidth: 275, margin:10, marginTop:5, marginBottom:5}}>
        <CardContent>
          <Typography variant="h4">
              <span role="img" aria-label="gear">⚙️</span>
              My overall tech stack:
          </Typography>
        <br/>
          <Grid container spacing={2}>
            {/*Tech Stack item */}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaHtml5 size={30} color="#E34F26"/>
                    <Typography variant="h5">
                    &nbsp;HTML 5 </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaHtml5 size={30} color="#E34F26"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiCss3 size={30} color="#264DE4"/>
                    <Typography variant="h5">
                    &nbsp;CSS 3 </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiCss3 size={30} color="#264DE4"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiJavascript size={30} color="#F7DF1E"/>
                    <Typography variant="h5">
                    &nbsp;JavaScript </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiJavascript size={30} color="#F7DF1E"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiCplusplus size={30} color="#00599C"/>
                    <Typography variant="h5">
                    &nbsp;C++ </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiCplusplus size={30} color="#00599C"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
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
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaReact size={30} color="#61dafb"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiMongodb size={30} color="#47A248"/>
                    <Typography variant="h5">
                    &nbsp;MongoDB </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiMongodb size={30} color="#47A248"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiFirebase size={30} color="#FFCA28"/>
                    <Typography variant="h5">
                    &nbsp;Firebase </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiFirebase size={30} color="#FFCA28"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaBootstrap size={30} color="#7952B3"/>
                    <Typography variant="h5">
                    &nbsp;Bootstrap </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaBootstrap size={30} color="#7952B3"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaNodeJs size={30} color="#339933"/>
                    <Typography variant="h5">
                    &nbsp;NodeJS </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaNodeJs size={30} color="#339933"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaPython size={30} color="#3776AB"/>
                    <Typography variant="h5">
                    &nbsp;Python </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaPython size={30} color="#3776AB"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaJava size={30} color="#007396"/>
                    <Typography variant="h5">
                    &nbsp;Java </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaJava size={30} color="#007396"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiCsharp size={30} color="#239120"/>
                    <Typography variant="h5">
                    &nbsp;C Sharp </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiCsharp size={30} color="#239120"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaUnity size={30} color="#000000"/>
                    <Typography variant="h5">
                    &nbsp;Unity </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaUnity size={30} color="#000000"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiBlender size={30} color="#F5792A"/>
                    <Typography variant="h5">
                    &nbsp;Blender </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiBlender size={30} color="#F5792A"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaFigma size={30} color="#F24E1E"/>
                    <Typography variant="h5">
                    &nbsp;Figma </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaFigma size={30} color="#F24E1E"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaGithub size={30} color="#000000"/>
                    <Typography variant="h5">
                    &nbsp;Github </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <FaGithub size={30} color="#000000"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiAdobexd size={30} color="#FF61F6"/>
                    <Typography variant="h5">
                    &nbsp;Adobe XD </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiAdobexd size={30} color="#FF61F6"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
            <Grid item lg={2} sx={{display:{lg:'inline', md:'none', sm:'none', xs:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiAdobephotoshop size={30} color="#31A8FF"/>
                    <Typography variant="h5">
                    &nbsp;Photoshop </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sx={{display:{md:'inline', lg:'none'}}}>
              <Card variant="outlined" sx={{display:"flex", justifyContent:"center", borderRadius:10}}>
                <CardContent>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    <SiAdobephotoshop size={30} color="#31A8FF"/>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/*====================================================================================*/}
          </Grid>
        </CardContent>
    </Card>
  );
}
export default techstack;