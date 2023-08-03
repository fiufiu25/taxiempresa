import { Box, Button, Fab, Typography } from "@mui/material"
import Principal from "./Components/Principal"
import Navbar from "./Components/navbar"
import QuienesSomos from "./Components/QuienesSomos"
import Servicios from "./Components/Servicios"
import CardServicies from "./Components/CardServicies"
import Elejirnos from "./Components/Elejirnos"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from "framer-motion"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Footer from "./Components/footer"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useEffect, useState } from "react"

const App=()=>{
 const [scroll,setscroll]=useState("")
 
  useEffect(()=>{
    const dato=()=>{
      setscroll(window.scrollY)
    }
    window.addEventListener('scroll', dato);
    
   
    
  },[scroll])
  const hanglescroll=()=>{
    window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}


    return(
      
    <>
      <header>
        <nav>
          <Navbar/>
        </nav>
      </header>
      <Box sx={{padding:1}} >
        <Principal/>
        <Box>
          <QuienesSomos/>
        </Box>
        <Box sx={{bgcolor:"#1B1B1C",p:3,py:5}} className="contenedorservicios">
          <Typography variant="h4"
           component={motion.h4}
           initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
           transition={{delay:0.6,duration:1}}
           variants={{
               hidden:{opacity:0,y:-60},
               visible:{opacity:1,y:0}
           }}
          
          sx={{py:2,fontFamily:"impact",color:"white"}}>Nuestro Servicios <span className="oli">De Taxi Astro</span></Typography>
          <Servicios/>
          <Box sx={{display:"flex",justifyContent:"center",alignContent:"center"
          ,flexWrap:"wrap",gap:5,m:4}}>
            <CardServicies img={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Taxi_Iru%C3%B1erria_Logo.svg/1024px-Taxi_Iru%C3%B1erria_Logo.svg.png"} titulo={"Taxi 24/7"} descripcion={"Contamos Con Una Gran Flota De Taxis Para Garantizar Un Servicio Constante Durante Las 24 Horas Del Dia ."}/>
            <CardServicies img={"https://cdn-icons-png.flaticon.com/512/2784/2784399.png"} titulo={"Taxi Por Hora"} descripcion={"Le Ofrecemos Un Servicio Por Hora Donde Podra Contratar Un Taxi Para Realizar Diferentes Diligencias, Paradas, Compras Etc Y Cancelar Una Tarifa Unica Por Hora."}/>
            <CardServicies img={"https://elcafenoticias.com/wp-content/uploads/2020/04/5ce2d2238dae3500d605e67d_Delivery-Management-system-Nex-Icon.png"} titulo={"Taxi Delivery"} descripcion={"Realizamos Sus Compras, Pagos De Servicios, Envio De Paqueteria."}/>
            <CardServicies img={"https://taxiauki.com/wp-content/uploads/2021/07/APP-AUKI-3.png"} titulo={"Reserva De Taxi"} descripcion={"Reserve Su Taxi Para Una Hora Especifica Y Ahorre Tiempo."} />
            <CardServicies img={"https://taxitourschania.com/wp-content/uploads/2016/07/taxi-tours-logo.png"} titulo={"Taxi Tours"} descripcion={"Lo Llevamos A Conocer Lo Mejores Lugares Y Atracciones Turisticas De Nuestra Bella Ciudad."}/>
            <CardServicies img={"https://www.fuegoyamana.com/wp-content/uploads/2018/07/omnicanal03.png"} titulo={"Pago Virtual"} descripcion={"Puede Cancelar Todos Nuestros Servicios Por Las Plataformas Virtuales De Pago Asi Como Por Transferencias."}/>
          </Box>
        </Box>
        <Box>
          <Typography variant="h4" sx={{textAlign:"center",fontWeight:600,py:4}}>
          Por Que Preferirnos?
          </Typography>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:4,p:2}}>
            <Elejirnos imagen={"https://ueca.es/wp-content/uploads/2020/04/buenconductor.png"} titulo={"Conductores Profecionales"} descripcion={"Todos Nuestros Conductores Están Capacitados Y Cuentan Con Vocación De Servicio Para Brindarle La Mejor Atención"}/>
          <Elejirnos imagen={"https://cdn-icons-png.flaticon.com/512/2784/2784399.png"} titulo={"Puntualidad"} descripcion={"Nos Esmeramos En Atenderle En El Menor Tiempo Posible"}/>
          <Elejirnos imagen={"https://cdn-icons-png.flaticon.com/512/3208/3208690.png"} titulo={"Seguridad"} descripcion={"Nuestros Conductores Cuentan Con Entrevistas Psicologicas, Antecedentes Penales, Policiales Y Judiciales Adicionalmente Nuestra Flota Cuenta Con Un Sistema Integral De Monitoreo Para Su Ubicación En Tiempo Real."}/>
          <Elejirnos imagen={"https://seven7company.com/wp-content/uploads/2017/05/ele_soluciones.png"} titulo={"Facilidad En Soluciones"} descripcion={"Ofrecemos Gran Variedad En Soluciones Para Facilitarle Sus Necesidades Como: Aplicación Movil, Pago Virtual, Reserva De Taxi, Delivery, Pago De Servicios"}/>
            </Box>
         
        </Box>
        <Box>
           <Typography className="atencion" variant="h5" sx={{ textAlign:"center",fontWeight:900,fontSize:30}}>
           ATENCIÓN LAS 24 HORAS LOS 365 DIAS DEL AÑO
           </Typography>
           <Typography className="atencion1" variant="body1" sx={{ textAlign:"center",fontWeight:900,fontSize:20,py:2}}>
           ¡Siempre a tu servicio!
           </Typography>
           <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:1}} >
           <a href="" className="btngran" > <LocalPhoneIcon sx={{mr:1,fontSize:30}}/>972 224 099</a>
           <a href="" className="btngran1" ><LocalPhoneIcon sx={{mr:1,fontSize:24}}/> 957 056 067</a>
           <a href="" className="btngran1" ><LocalPhoneIcon sx={{mr:1,fontSize:24}}/> 056 757 645</a>
            
           </Box>
           
        </Box>

      </Box >
     <footer>
      <Footer/>
     </footer>




      <Fab color="default"  aria-label="add" sx={{position:"fixed",bottom:20,right:20}}>
      <WhatsAppIcon sx={{color:"rgb(30, 164, 41)",fontSize:40}}/>
</Fab>
<Fab color="primary" onClick={hanglescroll}  aria-label="add" sx={{position:"fixed",bottom:90,right:20,visibility:`${scroll>500 ? "none":"hidden"}`}}>
      <ArrowDropUpIcon sx={{fontSize:40}}/>
</Fab>
<Fab variant="extended" color="error" sx={{position:"fixed",bottom:10,left:10}}>
  
  Solicita Tu Taxi Ahora
</Fab>
<Fab variant="extended" color="error"sx={{position:"fixed",bottom:70,left:10}}>
  
  Reserva Tu Taxi
</Fab>

    </>
  )
}
export default App