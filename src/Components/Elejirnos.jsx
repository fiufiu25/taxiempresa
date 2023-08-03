import { Box, Card, CardMedia, Paper, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

export default function Elejirnos({imagen,titulo,descripcion}) {
  return (
   <>
   <Box>
    <Paper
    component={motion.div}
    initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{delay:0.5,duration:1.2}}
    variants={{
        hidden:{opacity:0,y:-60},
        visible:{opacity:1,y:0}
    }}
    elevation={6} sx={{width:{xs:350,sm:500},height:{xs:"auto",sm:210} , display:"flex",justifyContent:"center",alignItems:"center",flexDirection:{xs:"column",sm:"row"},p:1,gap:1,borderRadius:2}}>
        
          <Box component={"img"} src={imagen} width={120} height={130}/>
       
        <Box sx={{py:3}}>
            <Typography variant='h5' className='titlepreferirnos' sx={{
          fontFamily:"impact",textAlign:{ xs:"center",sm:"left"},px:1
            
            }}>
           {titulo}
            </Typography>
            <Typography variant='body1' className='descripcion' sx={{color:"rgb(83, 81, 81)",my:0.5,p:1}}>
           {descripcion}
            </Typography>
        </Box>
    </Paper>
   </Box>
   </>
  )
}
