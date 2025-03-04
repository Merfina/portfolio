import { Box, Grid, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import VillaOutlinedIcon from '@mui/icons-material/VillaOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import CameraEnhanceOutlinedIcon from '@mui/icons-material/CameraEnhanceOutlined';

const About = () => {
  return (
    <Box
      id="about-section" sx={{  width: "100%",padding: { xs: "20px", md: "50px" }}}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
          <Box component="img"
            src="https://th.bing.com/th/id/OIP.OXQ8qTQ-QKDl1yEpcoMJ1wHaHa?rs=1&pid=ImgDetMain"
            alt="Profile"
            sx={{width: { xs: "80%", sm: "60%", md: "100%" },maxWidth: "400px",borderRadius: "10px",}}/>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="h6" sx={{ color: "dodgerblue", textAlign: "center" }}>
            My Intro
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "700", color: "darkblue", textAlign: "center", fontSize: { xs: "24px", md: "30px" } }}>
            About Me
          </Typography>
          <Typography sx={{fontFamily: "cursive", textAlign: "center", fontSize: { xs: "14px", md: "16px" }, padding: "20px"}}>
            My goal is to implement new processes and strategy in a growing organization to drive more growth. Also, to work in an environment which encourages me to succeed and grow professionally where I can utilize my skills and knowledge appropriately.
          </Typography>
          {[
            { icon: <PersonOutlineOutlinedIcon />, label: "Name", value: "Merfina" },
            { icon: <PhoneEnabledIcon />, label: "Phone", value: "9385327847" },
            { icon: <MailOutlineIcon />, label: "Email", value: "merfinank@gmail.com" },
          ].map((item, index) => (
            <Grid container key={index} alignItems="center" sx={{ marginY: "5px" }}>
              <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end", color: "blue" }}>
                {item.icon}
              </Grid>
              <Grid item xs={3}>
                <Typography sx={{ fontWeight: "600" }}>{item.label}</Typography>
              </Grid>
              <Grid item xs={1} sx={{ textAlign: "center" }}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography>{item.value}</Typography>
              </Grid>
            </Grid>
          ))}
          <Typography variant="h6" sx={{ textAlign: "center", color: "darkblue", marginTop: "20px" }}>
            My Interests
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {[
              { icon: <HeadphonesOutlinedIcon />, label: "Music" },
              { icon: <VillaOutlinedIcon />, label: "Travel" },
              { icon: <GrassOutlinedIcon />, label: "Gardening" },
              { icon: <CameraEnhanceOutlinedIcon />, label: "Photography" },
            ].map((item, index) => (
              <Grid item xs={6} sm={3} key={index} sx={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                <Box sx={{ color: "blue" }}>{item.icon}</Box>
                <Typography>{item.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
