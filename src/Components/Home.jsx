import {Box} from '@mui/material'
import {Grid} from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Photo from './Profile-img.png'



const Home =()=>{
  return(
    <Box sx={{height:"auto", width:"100%", backgroundColor: "#FFDEE9",
            backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)"
      }}>
        <Grid container  sx={{height:"auto"}}>
        <Grid item sx={{height:"175px",width:"100%"}}></Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{height:"450px",textAlign:"center"}}>
            <Grid item sx={{height:"25px", width:"100%",textAlign:"center",  paddingLeft:"40px"}}><Typography sx={{color:"dodgerblue"}}>Hi, I am</Typography></Grid>
            <Grid item sx={{height:"50px",width:"100%",paddingLeft:"40px"}}><Typography sx={{fontSize:"35px",fontWeight:"700", color:"darkblue"}}>Merfina</Typography></Grid>
            <Grid item sx={{height:"25px",width:"100%",paddingLeft:"40px"}}><Typography sx={{fontWeight:"600", color:"blueviolet"}}>Front-end Developer!</Typography></Grid>
            <Grid item sx={{height:"auto", width:"100%",paddingLeft:"40px",marginBottom:"20px"}}><Typography sx={{fontFamily:"cursive"}}>My goal is to implement new processes and strategy in a growing organization to drive more growth. Also, to work in an environment which encourages me to succeed and grow professionally where I can utilize my skills and knowledge appropriately.</Typography></Grid>
                <Button variant="contained" href='/Merfina-NK-Resume.pdf' download="Merfina-NK-Resume.pdf" sx={{':hover':{backgroundColor:"white",color:"blue",borderColor:"blue"}, borderRadius:"25px",backgroundColor:"blue"}} startIcon={<FileDownloadIcon />}>
                  Download CV
                </Button>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}  sx={{height:"auto",width:"auto", display:"flex",justifyContent:"center"}}>
            
            <Grid item sx={{height:"300px", width:"400px",paddingLeft:"50px"}}>
            <img src={Photo} alt="Not found" style={{height:"100%",width:"100%"}} />
            </Grid>
          </Grid>
        </Grid>
    </Box>
  )
}
export default Home

            