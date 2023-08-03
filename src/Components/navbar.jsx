import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { Drawer } from '@mui/material';
import Drawers from './Drawer';
import AppsIcon from '@mui/icons-material/Apps';
export default function Navbar() {
const Enlaces=[
    {title:"Inicio",icon:<HomeIcon/>},
    {title:"¿Quienes Somos?",icon:<InfoIcon/>},
    {title:"Servicios",icon:<MiscellaneousServicesIcon/>},
    {title:"Reclamos",icon:<CoPresentIcon/>}
]
const [abrir,setabrir]=React.useState(false)

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"rgba(255, 255, 255, 0.403)"}}>
        <Toolbar  sx={{ display:"flex",justifyContent:{xs:"space-between",sm:"space-around"},alignItems:"center",p:1  }}>
         
        <Box sx={{display:{xs :"block",md:"none"},bgcolor:"#C62828",p:1}}>
                    <IconButton sx={{color:"black"}} onClick={()=>(setabrir(!abrir))} >
                    <MenuIcon sx={{color:"white"}}/>
                    </IconButton>
                </Box>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Box sx={{
                width:25,
                height:50,
         
               
            }} className="caja1"/>
          <Typography variant="h4" component="div" sx={{color:"black" ,fontFamily:"impact",fontWeight:{xs:"900",sm:"1"}}}>
         TAXI ASTRO
          </Typography>
          <Box sx={{width:25,height:50}} className="caja2"/>

          </Box>
          <Box sx={{display:{xs:"none",md:"block"}}}>

         
         {
            Enlaces.map((item,index)=>(
              
                   <Button variant='text' key={index} sx={{color:"black",fontWeight:700}}>{item.title}</Button>
                
            ))
         }
          </Box>
          <Box sx={{bgcolor:"#C62828",p:1}}>
                    <IconButton component={"a"} title='Aplicacion' sx={{color:"black"}}  >
                    <AppsIcon  sx={{color:"white"}}/>
                    </IconButton>
                </Box>
        </Toolbar>
      </AppBar>
    </Box>
    <Drawer   anchor="left"  open={abrir} onClose={()=>setabrir(!abrir)} >
        <Drawers Enlaces={Enlaces}/>
    </Drawer>
    </>
  );
}
