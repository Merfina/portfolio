import { Box, Grid } from "@mui/material"
import Typography from '@mui/material/Typography';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import VillaOutlinedIcon from '@mui/icons-material/VillaOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import CameraEnhanceOutlinedIcon from '@mui/icons-material/CameraEnhanceOutlined';

const About =()=>{
    return(
        <Box sx={{height:"auto",width:"100%",backgroundColor: "#FFDEE9",
            backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)"
            }}>
            <Grid container >
            <Grid container lg={5} md={5} sm={12} xs={12} sx={{height:"600px",width:"100%",}}>
                <Grid item sx={{height:"100px",width:"100%"}}></Grid>
                <Grid item sx={{height:"490px",width:"100%",display:"flex",justifyContent:"center"}}>
                <Grid item sx={{height:"490px",width:"400px"}}>
                    <img src="https://th.bing.com/th/id/OIP.OXQ8qTQ-QKDl1yEpcoMJ1wHaHa?rs=1&pid=ImgDetMain" alt="Not-found" style={{height:"100%",width:"100%"}} />
                </Grid>
                </Grid>
            </Grid>
            <Grid container lg={7} md={7} sm={12} xs={12} sx={{height:"590px",width:"100%"}}>
                <Grid item sx={{height:"175px",width:"100%"}}></Grid>
                <Grid item sx={{height:"25px",width:"100%"}}><Typography sx={{color:"dodgerblue",textAlign:"center"}}>My Intro</Typography></Grid>
                <Grid item sx={{height:"50px",width:"100%"}}><Typography sx={{fontSize:"30px",fontWeight:"700", color:"darkblue",textAlign:"center"}}>About Me</Typography></Grid>
                <Grid item sx={{height:"100px", width:"100%",marginBottom:"40px", display:"flex", alignItems:"center",textAlign:"center"}}><Typography sx={{fontFamily:"cursive",padding:"40px",}}>My goal is to implement new processes and strategy in a growing organization to drive more growth. Also, to work in an environment which encourages me to succeed and grow professionally where I can utilize my skills and knowledge appropriately.</Typography></Grid>
                <Grid container sx={{height:"35px",width:"100%"}}>
                    <Grid item sx={{height:"100%",width:"40%",display:"flex",justifyContent:"end",color:"blue"}}>
                    <PersonOutlineOutlinedIcon/>
                    </Grid>
                    <Grid item sx={{height:"100%",width:"10%",paddingLeft:"15px"}}><Typography sx={{fontWeight:"600"}}>Name</Typography></Grid>
                    <Grid item sx={{height:"100%",width:"5%",display:"flex",justifyContent:"center"}}><Typography>:</Typography></Grid>
                    <Grid item sx={{height:"100%",width:"45%"}}><Typography sx={{paddingLeft:"20px"}}>Merfina</Typography></Grid>
                </Grid>
                <Grid container sx={{height:"35px",width:"100%"}}>
                    <Grid item sx={{height:"100%",width:"40%",display:"flex",justifyContent:"end",color:"blue"}}>
                    <PhoneEnabledIcon/>
                    </Grid>
                    <Grid item sx={{height:"100%",width:"10%",paddingLeft:"15px"}}><Typography sx={{fontWeight:"600"}}>Phone</Typography></Grid>
                    <Grid item sx={{height:"100%",width:"5%",display:"flex",justifyContent:"center"}}><Typography>:</Typography></Grid>
                    <Grid item sx={{height:"100%",width:"45%"}}><Typography sx={{paddingLeft:"20px"}}>9385327847</Typography></Grid>
                </Grid>
                <Grid container sx={{height:"35px",width:"100%"}}>
                    <Grid item sx={{height:"100%",width:"40%",display:"flex",justifyContent:"end",color:"blue"}}>
                    <MailOutlineIcon/>
                    </Grid>
                    <Grid item sx={{height:"100%",width:"10%",paddingLeft:"15px"}}><Typography sx={{fontWeight:"600"}}>Email</Typography></Grid>
                    <Grid item sx={{height:"100%",width:"5%",display:"flex",justifyContent:"center"}}><Typography>:</Typography></Grid>
                    <Grid item sx={{height:"100%",width:"45%"}}><Typography sx={{paddingLeft:"20px"}}>merfinank@gmail.com</Typography></Grid>
                </Grid>
                <Grid item sx={{height:"30px",width:"100%",display:"flex",justifyContent:"center"}}><Typography sx={{fontSize:"20px",fontWeight:"600",color:"darkblue"}}>My Interests</Typography></Grid>
                <Grid container  sx={{height:"75px",width:"100%"}}>
                <Grid container  sx={{height:"75px",width:"50%"}}>
                    <Grid item sx={{height:"75px",width:"45%",display:"flex",alignItems:"center"}}>
                        <Grid item sx={{height:"50px",width:"60%",display:"flex",alignItems:"center",justifyContent:"end",color:"blue"}}>
                            <HeadphonesOutlinedIcon/>
                        </Grid>
                        <Grid item sx={{height:"50px",width:"40%",display:"flex",alignItems:"center",justifyContent:"center"}}><Typography>Music</Typography></Grid>
                    </Grid>
                    <Grid item sx={{height:"75px",width:"50%",display:"flex",alignItems:"center"}}>
                    <Grid item sx={{height:"50px",width:"60%",display:"flex",alignItems:"center",justifyContent:"end",color:"blue"}}>
                        <VillaOutlinedIcon/>
                    </Grid>
                    <Grid item sx={{height:"50px",width:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}><Typography>Travel</Typography></Grid>
                    </Grid>
                </Grid>
                <Grid container sx={{height:"75px",width:"50%"}}>
                    <Grid item sx={{height:"75px",width:"50%",display:"flex",alignItems:"center"}}>
                    <Grid item sx={{height:"50px",width:"40%",display:"flex",alignItems:"center",justifyContent:"end",color:"blue"}}>
                        <GrassOutlinedIcon/>
                    </Grid>
                    <Grid item sx={{height:"50px",width:"60%",display:"flex",alignItems:"center",justifyContent:"center"}}><Typography>Gardening</Typography></Grid>
                    </Grid>
                    <Grid item sx={{height:"75px",width:"50%",display:"flex",alignItems:"center"}}>
                    <Grid item sx={{height:"50px",width:"40%",display:"flex",alignItems:"center",justifyContent:"end",color:"blue"}}>
                        <CameraEnhanceOutlinedIcon/>
                    </Grid>
                    <Grid item sx={{height:"50px",width:"60%",display:"flex",alignItems:"center",justifyContent:"center"}}><Typography>Phography</Typography></Grid>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Box>
    )
}
export default About