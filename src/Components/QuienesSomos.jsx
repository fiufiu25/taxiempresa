import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

export default function QuienesSomos() {
  return (
  <>
  <Box sx={{display:"flex"
  ,justifyContent:"center",flexWrap:"wrap",alignItems:"center",m:3,gap:{xs:2,md:10}}} > 
<Box sx={{maxWidth:{xs:"100%",sm:500,md:700,lg:500}}}>
<Typography variant='h4'  component={motion.h4}
initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
transition={{delay:0.5,duration:1}}
variants={{
    hidden:{opacity:0,y:-60},
    visible:{opacity:1,y:0}
}}
sx={{fontWeight:600 ,textAlign:"center",py:1}}>
    Somos Taxi Astro
    </Typography>
   <Typography variant='body2' component={motion.p}
   initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
   transition={{delay:0.5,duration:1}}
   variants={{
       hidden:{opacity:0,y:-60},
       visible:{opacity:1,y:0}
   }}
   >
   Somos una empresa de Taxi Formal, contamos con las autorizaciones de la Municipalidad Provincial de Ica y el M.T.C. le garantizamos a todos nuestros usuarios un servicio 100% eficiente y seguro a la hora de trasladarte dentro y fuera de la ciudad ya que constantemente capacitamos y evaluamos a nuestro personal para asegurarnos de prestar el mejor servicio de la Ciudad.
   </Typography>
   <Typography variant='body1'
    component={motion.h4}
    initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{delay:0.5,duration:1}}
    variants={{
        hidden:{opacity:0,y:-60},
        visible:{opacity:1,y:0}
    }}
   >
   Nos caracterizamos por nuestra atención personalizada, trato V.I.P. puntualidad y precios justos.
   </Typography>

   <Typography variant='h5' sx={{fontWeight:600, py:1}}
    component={motion.h5}
    initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{delay:0.7,duration:1}}
    variants={{
        hidden:{opacity:0,y:-60},
        visible:{opacity:1,y:0}
    }}
   >
   Mision
   </Typography>
   <Typography  variant='body1'
    component={motion.p}
    initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{delay:0.5,duration:1}}
    variants={{
        hidden:{opacity:0,y:-60},
        visible:{opacity:1,y:0}
    }}
   >
   Ser la empresa más confiable del medio, manteniendo el liderazgo en cada mercado que participemos, a través de la buena calidad de servicios
   </Typography>
   <Typography  variant='h5'sx={{fontWeight:600, py:1}}
    component={motion.h5}
    initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{delay:0.8,duration:1}}
    variants={{
        hidden:{opacity:0,y:-60},
        visible:{opacity:1,y:0}
    }}
   >
    Visión
   </Typography>

   <Typography
   variant='body1'
    component={motion.h4}
    initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{delay:0.9,duration:1}}
    variants={{
        hidden:{opacity:0,y:-60},
        visible:{opacity:1,y:0}
    }}
   >
   Que nuestros clientes y consumidores nos elijan siempre como la primera opción, “ser el líder”.
   </Typography>
</Box>
    <Box >
    <Box sx={{width:{xs:300,md:400,lg:600}}}
    
    component={motion.img}
    initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{delay:1,duration:1}}
    variants={{
        hidden:{opacity:0,y:-60},
        visible:{opacity:1,y:0}
    }}
     src='https://assets.website-files.com/63a425aa14e99c5029d209fd/63dd105317a3565dc7edad87_image-hero-p-800.webp'/>
    </Box>
  </Box>
  </>
  )
}
