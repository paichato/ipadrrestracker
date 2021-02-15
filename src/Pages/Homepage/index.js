import React, { useEffect, useState } from 'react';

import bg from '../../Assets/pattern-bg.png';
import api from '../../services/api';
import { abz} from '../../myapi';

import { Arrow, BgContainer, Container, AlertS } from './HomepageElements';
import Loader from '../Loader';

require('dotenv').config();


const API_KEY=process.env.REACT_APP_GOOGLE_API_KEY;
export const IPFY_API_KEY=process.env.REACT_APP_IPFY_API_KEY;
console.log(IPFY_API_KEY);

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
const [location, setlocation] = useState([]);
const [isp, setisp] = useState([]);
const [isLoading, setisLoading] = useState(false);

// useEffect(() => {
//     if(ips.status==="fail"){
//         alert("write a valid ip")
//     }
    
// }, [])




    
    

  
    const handleIpData=e=>{
        if(e){
        setisLoading(true);
            setip(e.target.value);
            console.log(ip);
            console.log(isLoading);
            if(ip===""){
                setvis(false);
            }
        }
        
    }
  

  async  function handleSubmit(event){
        if(event){
            event.preventDefault();
           
            // const response=await api.get(`/${ip}?fields=country,countryCode,city,offset,isp,query,lat,lon,regionName,status`);
            
            //fetching data through axios(api) and stoping the loading mothion
            const response=await api.get(`v1?apiKey=${IPFY_API_KEY}&domain=${ip}`).then(setisLoading(false));
            
            // allip will receive all response data
            const allip=response.data;
            
            
            //setting response data to our state->ips
            setips(allip);
            
            //setting our render field of ip with current ip
            setinput(ip);
            
            //reseting input field
            setip("");
            setvis(true);

            //stting location and isp to different states because of type error
            setlocation(allip.location);
            setisp(allip.isp);
            console.log(ip);
            console.log(vis);
            console.log(response.data);
            // console.log(ips.location.city);
            
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
  &q=${location.city}+","+${location.region}+","+${location.country}`} allowFullScreen> {/*&center=${location.lat}+","+${location.lng}*/}
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
           
            
                <span className="corner">
                    <h3>IP ADDRESS</h3>
                    <h2>{isLoading?"Write valid ip":ips.ip}</h2>
                </span>
                <span>
                    <h3>LOCATION</h3>
                    <h2>{isLoading?"-":(location.city+", "+location.country)}</h2>
                    {/* <h2>{ips?(ips.location['city']+","+ips.countryCode):"-"}</h2> */}
                </span>
                <span>
                    <h3>TIMEZONE</h3>
                    <h2>{isLoading?"-":("UTC"+" "+location.timezone)}</h2>
                    {/* <h2>{ips.status==="success"?("UTC"+" "+Math.round((ips.offset)/3600)+":00"):"-"}</h2> */}
                </span>
                <span >
                    <h3>ISP</h3>
                    <h2>{isLoading?"-":isp}</h2>
                    {/* <h2>{ips.status==="success"?ips.isp:"-"}</h2> */}
                </span>
            </div>
            

        </Container>

        </BgContainer>
        

        </>
    )
}

export default Homepage
