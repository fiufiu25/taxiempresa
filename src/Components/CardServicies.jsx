import { Box, Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

export default function CardServicies({img,titulo,descripcion}) {
  return (
    <div>
      <Box>
    <Card 
    
    sx={{maxWidth:380,p:1}} className="cardservice"
    component={motion.div}
    initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
    transition={{delay:0.7,duration:1}}
    variants={{
        hidden:{opacity:0,y:-60},
        visible:{opacity:1,y:0}
    }}
   >
    <CardActionArea>
        <Paper  className='paper' elevation={20} sx={{bgcolor:"#242425",p:0.3,borderRadius:4,height:{xs:"auto",sm:370},display:"flex",flexDirection:"column",justifyContent:"center"}}>

     
<CardMedia sx={{textAlign:"center"}}>
    <img width={160} height={160} src={img} alt="taxi" />
</CardMedia>
<CardContent>
    <Typography className='cardtitle' variant='h5' sx={{textAlign:"center",fontFamily:"impact",color:"white",paddingBottom:1}}>
      {titulo}
    </Typography>
    <Typography  variant="body1" className='descripcion' sx={{color:"white"}}>
    {descripcion}
    </Typography>
</CardContent>

</Paper>
</CardActionArea>
    </Card>

</Box>
    </div>
  )
}
