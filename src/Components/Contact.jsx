import { Box, Grid } from "@mui/material"
import {Typography} from '@mui/material'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact =()=>{
    return(
        <Box sx={{height:"auto", width:"100%"
             }}>
            <Grid container id="contact-section" sx={{height:"auto",marginTop:"30px",marginBottom:"125px"}} >
                <Grid item lg={12} md={12} sm={12} xs={12}  sx={{height:"25px",width:"100%"}}><Typography sx={{color:"dodgerblue",textAlign:"center"}}>Contact Me</Typography></Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}  sx={{height:"50px",width:"100%"}}><Typography sx={{fontSize:"30px",fontWeight:"700", color:"darkblue",textAlign:"center"}}>Get in Touch</Typography></Grid>
                <Grid container sx={{height:"auto",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Grid container sx={{height:"auto",width:"80%",display:"flex",justifyContent:"space-between"}}>
                        <Grid item lg={8} md={8} sm={12} xs={12} sx={{height:"300px",width:"69%",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
                            <Grid container sx={{height:"45px",width:"100%",display:"flex",justifyContent:"space-between"}}>
                                <Grid item sx={{height:"100%",width:"47%"}}>
                                    <Box>
                                        <TextField id="outlined-basic" label="Name" variant="outlined" sx={{width:"100%"}} />
                                    </Box>
                                </Grid>
                                <Grid item sx={{height:"100%",width:"47%"}}>
                                    <Box>
                                        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width:"100%"}} />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item sx={{height:"45px",width:"100%"}}>
                            <Box>
                                <TextField id="outlined-basic" label="Subject" variant="outlined" sx={{width:"100%"}} />
                                </Box>
                            </Grid>
                            <Grid item sx={{height:"145px",width:"100%"}}>
                                <Grid item sx={{height:"75px",width:"100%"}}>
                                    <Box>
                                        <TextField id="outlined-basic" label="Message" variant="outlined" sx={{width:"100%"}} />
                                    </Box>
                                </Grid>
                                <Grid item sx={{height:"70px",width:"100%"}}>
                                    <Stack direction="row" spacing={2}>
                                        <Button variant="contained" sx={{ ':hover':{backgroundColor:"white",color:"blue"}, color:"white",backgroundColor:"blue"}} endIcon={<SendIcon />}>
                                            Send Message
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12} sx={{height:"300px",width:"29%",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                            <Grid container sx={{height:"27%",width:"100%"}}>
                                <Grid item sx={{height:"100%",width:"30%",position:"relative"}}>
                                    <Grid item sx={{height:"43px",width:"43px",borderRadius:"25px",backgroundColor:"blue",position:"absolute",left:"15px",top:"15px"}}>
                                        <Grid item sx={{position:"absolute",left:"10px",top:"10px",color:"white"}}><LocalPhoneIcon/></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sx={{height:"100%",width:"70%"}}>
                                    <Grid item sx={{height:"40%",width:"100%"}}><Typography sx={{fontWeight:"600"}}>Call Me</Typography></Grid>
                                    <Grid item sx={{height:"30%",width:"100%"}}>
                                        <Typography>123-345-567</Typography>
                                    </Grid>
                                    <Grid item sx={{height:"30%",width:"100%"}}>
                                    <Typography>987-765-543</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container sx={{height:"27%",width:"100%"}}>
                            <Grid item sx={{height:"100%",width:"30%",position:"relative"}}>
                            <Grid item sx={{height:"43px",width:"43px",borderRadius:"25px",backgroundColor:"blue",position:"absolute",left:"15px",top:"15px"}}>
                                        <Grid item sx={{position:"absolute",left:"10px",top:"10px",color:"white"}}><MailOutlineIcon/></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sx={{height:"100%",width:"70%"}}>
                                <Grid item sx={{height:"40%",width:"100%"}}><Typography sx={{fontWeight:"600"}}>E-mail</Typography></Grid>
                                    <Grid item sx={{height:"30%",width:"100%"}}>
                                        <Typography>merfinank@gmail.com</Typography>
                                    </Grid>
                                    <Grid item sx={{height:"30%",width:"100%"}}>
                                    <Typography>merfinaraj@gmail.com</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container sx={{height:"27%",width:"100%"}}>
                            <Grid item sx={{height:"100%",width:"30%",position:"relative"}}>
                            <Grid item sx={{height:"43px",width:"43px",borderRadius:"25px",backgroundColor:"blue",position:"absolute",left:"15px",top:"15px"}}>
                                        <Grid item sx={{position:"absolute",left:"10px",top:"10px",color:"white"}}><LocationOnIcon/></Grid>
                                    </Grid>
                                    
                                </Grid>
                                <Grid item sx={{height:"100%",width:"70%"}}>
                                <Grid item sx={{height:"40%",width:"100%"}}><Typography sx={{fontWeight:"600"}}>Location</Typography></Grid>
                                <Grid item sx={{height:"30%",width:"100%"}}>
                                        <Typography>467 Central Road New York </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    )
}
export default Contact