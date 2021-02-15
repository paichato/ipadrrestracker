import React, { useEffect, useState } from 'react';

import bg from '../../Assets/pattern-bg.png';
import api from '../../services/api';
import { abz} from '../../myapi';

import { Arrow, BgContainer, Container, AlertS } from './HomepageElements';

require('dotenv').config();


const API_KEY=process.env.REACT_APP_GOOGLE_API_KEY;
export const IPFY_API_KEY=process.env.REACT_APP_IPFY_API_KEY;

const ipData={
    ip: String,
    city: String,
    countrycode:String,
    timezone:String,
    isp:String
}

function Homepage({ip, setip, vis, setvis}) {
const [ips,setips]=useState([]);
const [input,setinput]=useState();

// useEffect(() => {
//     if(ips.status==="fail"){
//         alert("write a valid ip")
//     }
    
// }, [])




    
    

  
    const handleIpData=e=>{
       
            setip(e.target.value);
            console.log(ip);
            if(ip===""){
                setvis(false);
            }
        
    }
  

  async  function handleSubmit(event){
        if(event){
            event.preventDefault();
           
            const response=await api.get(`/${ip}?fields=country,countryCode,city,offset,isp,query,lat,lon,regionName,status`);
            const allip=response.data;
            setips(allip);
            setinput(ip);
            setip("");
            setvis(true);
            console.log(ip);
            console.log(vis);
            console.log(response.data);
            console.log(ips.lat);
            
        } 
    
    } 
   
    return (
        <>
        <BgContainer>
            <img src={bg} alt="abstract"/>
           
            
            
            {/* Google map without icon */}
            <iframe
  width="1940"
  height="650"
  frameBorder="0" style={{border:0}}
  src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}
  &q=${ips.city}+","+${ips.regionName}+","+${ips.country}`} allowFullScreen>
</iframe>

            
            
            <Container>
            <h1>IP Address Tracker</h1>
            <div className="divButton">
                    <form onSubmit={handleSubmit}>
                    <input onChange={handleIpData} value={ip} vis={vis}  placeholder="press enter to use your ip"/>
                    <button type="submit"   ><Arrow/></button>
                    
                    
                    </form>
                    
                 
            </div>
            <div className="divData">
            <h1 style={{color:"red",fontSize:"11px" }}>Write IP. Ex: 8.8.8.8</h1> {/* continua */}
            
                <span className="corner">
                    <h3>IP ADDRESS</h3>
                    <h2>{ips.status==="success"?ips.query:"Write valid ip"}</h2>
                </span>
                <span>
                    <h3>LOCATION</h3>
                    <h2>{ips.status==="success"?(ips.city+","+ips.countryCode):"-"}</h2>
                </span>
                <span>
                    <h3>TIMEZONE</h3>
                    <h2>{ips.status==="success"?("UTC"+" "+Math.round((ips.offset)/3600)+":00"):"-"}</h2>
                </span>
                <span >
                    <h3>ISP</h3>
                    <h2>{ips.status==="success"?ips.isp:"-"}</h2>
                </span>
            </div>

        </Container>

        </BgContainer>
        

        </>
    )
}

export default Homepage
