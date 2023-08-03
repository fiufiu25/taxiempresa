import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';
export default function Servicios() {
const servicios=[
    {
        title:"Regular"
    },
    {title:"Taxi Por Hora "},
    {title:"Taxi Delivery"},
    {title:"Taxi Tours"},
    {title:"Reserva Taxi"},
    {title:"Pago Con Tarjeta"},
    {title:"Pago Con Plin"},
    {title:"Pago Con Yape"},
    {title:" Servicio Corporativo Para Traslado De Personal"}

]
const telefono=[
    {tel:"056 757645"},
    {tel:"056 634121"},
    {tel:"972 224 099"},
    {tel:"957 056 067"}
]
return (
<>
<Box sx={{display:"flex", justifyContent:"center",alignItems:"center",gap:{xs:2,lg:10},flexWrap:"wrap"}}>

<Card 

component={motion.div}
initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
transition={{delay:0.5,duration:1}}
variants={{
    hidden:{opacity:0,y:-60},
    visible:{opacity:1,y:0}
}}
sx={{maxWidth:330,height:530,borderRadius:2,p:1,bgcolor:"#242425",color:"white" }}>
    

    
    <CardContent>
        <Typography variant='h5' sx={{textAlign:"center",fontFamily:"impact"}}>
        Servicios
        </Typography>
        <ul className='services'>
            {
                servicios.map(item=>(
                    <li key={item.title}>
                        <Box sx={{display:"flex",alignItems:"center"}}>
                        <IconButton>
                        <ArrowRightIcon sx={{color:"red"}}/>
                       </IconButton>
                        <a href='#'>
                        {item.title}</a>
                        </Box>
                       
                       

                        </li>
                ))
            }
        </ul>
    </CardContent>
  
</Card>



<Card 
 component={motion.div}
 initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
 transition={{delay:0.5,duration:1}}
 variants={{
     hidden:{opacity:0,y:-60},
     visible:{opacity:1,y:0}
 }}

sx={{maxWidth:350,borderRadius:3,p:1,bgcolor:"#242425",color:"white"}}>
    

    
    <CardContent>
        <Typography variant='h5' sx={{textAlign:"center",fontFamily:"impact"}}>
        Atención Las 24 Horas 365 Dias        </Typography>
        <ul className='servicesnum'>
            {
                telefono.map(item=>(
                    <li key={item.tel} >
                        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:2}}>
                        <Box>
                            <Typography variant='body1'>
                                {item.tel}
                            </Typography>
                        </Box>
                        <Box sx={{m:0.5}}>
                            <Button variant="contained" color='secondary' size="small"  startIcon={<LocalPhoneIcon/>}>LLAMA AHORA</Button>
                        </Box>
                        </Box>
                        
                    </li>
                ))
            }
        </ul>

    </CardContent>
    <CardActions sx={{width:"100%",textAlign:"center"}}>
        <Button variant='contained' size="large" sx={{borderRadius:3,fontWeight:700,width:"100%",mt:3}} startIcon={<WhatsAppIcon sx={{color:"rgb(4, 197, 49)"}}/>} color='error'  >Reserva tu taxi</Button>
    </CardActions>
  
</Card>

</Box>

</>
  )
}
