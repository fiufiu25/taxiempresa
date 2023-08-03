import { Box, Button } from '@mui/material'
import React from 'react'
import Drawers from './Drawer'
import { frame, motion } from "framer-motion";


export default function Principal() {
  return (
    <>
    
 <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:{xs:1,lg:10},flexWrap:{xs:"wrap-reverse",md:"wrap"}}}>
    <Box sx={{textAlign:"center",width:600}}>

   
<motion.h1 className='title_principal'
initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
transition={{delay:0.5,duration:1}}
variants={{
    hidden:{opacity:0,y:-60},
    visible:{opacity:1,y:0}
}}
>
Conduce con nosotros O solicita tu servicio
</motion.h1>

<Box>
    <Button variant="contained"  component={motion.button}
    initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{delay:0.2,duration:1}}
    variants={{
        hidden:{opacity:0,x:-60},
        visible:{opacity:1,x:0}
    }}
    
    sx={{borderRadius:5, p:1.3,px:2,fontWeight:700, margin:1}} color='error'>Solicita tu Taxi ahora</Button>
    <Button variant="contained" component={motion.button}
    
    initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{delay:0.5,duration:1}}
    variants={{
        hidden:{opacity:0,x:-60},
        visible:{opacity:1,x:0}
    }}
    sx={{borderRadius:5, p:1.3,px:2,fontWeight:700,m:1}} color='error'>reserva tu taxi</Button>
    
</Box>
</Box>
<Box sx={{width:{xs:"100%",md:"500px",lg:"530px",textAlign:"center"}}}>
    <Box  component={motion.img}
    initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{delay:0.5,duration:1}}
    variants={{
        hidden:{opacity:0,y:-60},
        visible:{opacity:1,y:0}
    }}
    sx={{width:{xs:"70%",md:"100%",lg:"100%"}}}  src='https://www.alotaxis.com/img/imagen2.svg'/>
</Box>
 </Box>
   
    </>
  )
}
