import React from 'react'
import logo from "../assets/remover.png"
import { Box, Typography } from '@mui/material'
export default function Footer() {
  return (
    <>
<Box  sx={{color:"white", backgroundColor:"black",p:2,py:4,display:"flex",justifyContent:"center",alignItems:"center",gap:{xs:2,md:10},flexWrap:"wrap"}}>

    <Box component={"img"} sx={{borderRadius:2}} src={logo} width={210} height={210}  className='foto'/>

    
    <Box>
       <Typography variant='h5'  sx={{p:1,fontWeight:900,textAlign:{xs:"center",sm:"left"}}}>
       Contactenos
       </Typography >
       <Typography  sx={{p:1}}>
       Email:info@taxiastro.com
       </Typography>
       <Typography sx={{p:1}}>
       Atención las 24 horas
       </Typography>
       <Typography sx={{p:1}}>
       056757645 / 056634121 / 972224099
       </Typography>

    </Box>
    <Box>
    <Typography variant='h5' sx={{p:1,fontWeight:900,textAlign:{xs:"center",sm:"left"}}}>
    Nuestro Servicio
       </Typography>
       <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:{xs:2,md:5}}}>
        <Box>
        <Typography sx={{p:1}}>
        Taxi
       </Typography>
       <Typography sx={{p:1}}>
       Taxi por hora
       </Typography>
       <Typography sx={{p:1}}>
       Taxi delivery
       </Typography> 
        </Box>
        <Box>
        <Typography sx={{p:1}}>
        Taxi tours
       </Typography>
       <Typography sx={{p:1}}>
       Reserva de taxi
       </Typography>
       <Typography sx={{p:1}}>
       Pago virtual
       </Typography> 
        </Box>
        <Box>

        </Box>
       </Box>

    </Box>
    <Box component={"img"} src='https://play.google.com/intl/es-419/badges/static/images/badges/es-419_badge_web_generic.png' width={140} height={120}/>
</Box>
    </>
  )
}
