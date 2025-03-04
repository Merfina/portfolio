import { Box, Grid,Typography, LinearProgress } from '@mui/material'
import React from 'react'

const ProgressBar = ({ label, value,color }) => {
  return (
    <Box sx={{ width: '100%', maxWidth:"400px",padding:1 }}>
      <Typography variant="body1" sx={{marginBottom:"-15px"}} gutterBottom>{label} </Typography>
        <Typography sx={{display:"flex",justifyContent:"end"}} >{value}%</Typography>
      <LinearProgress variant='determinate'  value={value} sx={{ 
          height: 10, // Adjust height
          borderRadius: 5, // Rounded corners
          "& .MuiLinearProgress-bar": { backgroundColor: color } // Custom color
        }}  />
    </Box>
  );
};

const skill=[
  { label: "HTML", value: 90,color:"blue" },
  { label: "CSS", value: 90 ,color:"blue"},
  { label: "JavaScript", value: 80 ,color:"blue" },
  { label: "BootStrap", value: 85 ,color:"blue" },
  { label: "React", value: 85 ,color:"blue" },
  { label: "Material UI", value: 90 ,color:"blue"}
]

export const Skills = () => {
  return (
    <Box id="skills-section">
      <Grid container sx={{minHeight: "500px",width: "100%",backgroundColor: "#e4e4e4",display: "flex",flexDirection: "column",alignItems: "center",}}>
        <Grid item sx={{height: "auto",width: "100%",padding: { xs: 2, md: 3 },textAlign: "center",}}>
          <Typography variant="h6" sx={{ color: "dodgerblue", fontSize: { xs: "16px", md: "20px" } }}>
            Why Choose Me
          </Typography>
          <Typography  variant="h4"  sx={{ fontWeight: 700, color: "darkblue",fontSize: { xs: "24px", sm: "28px", md: "32px" },}}>
            My Expertise Area
          </Typography>
        </Grid>
        <Grid container spacing={2} marginTop={'10px'} sx={{ maxWidth: { xs: "100%", sm: "80%", md: "60%" }, justifyContent: "center" }}>
          {skill.map((skill,index)=>(
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ProgressBar label={skill.label} value={skill.value} color={skill.color}/>
            </Grid>
          ))} 
        </Grid>
      </Grid>
    </Box>
  )
}
