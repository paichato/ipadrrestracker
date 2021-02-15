import React, { useState } from 'react';

import bg from '../../Assets/pattern-bg.png';
import api from '../../services/api';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Arrow, BgContainer, Container} from './HomepageElements';
import Loader from '../Loader';

require('dotenv').config();


const API_KEY=process.env.REACT_APP_GOOGLE_API_KEY;
export const IPFY_API_KEY=process.env.REACT_APP_IPFY_API_KEY;
console.log(IPFY_API_KEY);


function Homepage({ip, setip, vis, setvis}) {
const [ips,setips]=useState([]);
const [input,setinput]=useState();
const [location, setlocation] = useState([]);
const [isp, setisp] = useState([]);
const [isLoading, setisLoading] = useState(false);






    
    

  
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
  
let allip;
  async  function handleSubmit(event){
        if(event){
            event.preventDefault();
           
            // const response=await api.get(`/${ip}?fields=country,countryCode,city,offset,isp,query,lat,lon,regionName,status`);
            
            //fetching data through axios(api) and stoping the loading mothion
            // const response=await api.get(`v1?apiKey=${IPFY_API_KEY}&domain=${ip}`).then(setisLoading(false));
            // const response=await api.get(`v1?apiKey=${IPFY_API_KEY}&domain=${ip}`);
            const response=await api.get(`v1?apiKey=${IPFY_API_KEY}&domain=${ip}`).then(function(response){
                // allip will receive all response data 
                allip=response.data;
                 //setting response data to our state->ips
                setips(allip);
                //stting location and isp to different states because of type error
                setlocation(allip.location);
                setisp(allip.isp);

                toast.success('✅Sucessfuly Loaded', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

            })
            .catch(function (error){
                if (error.response){
                    toast.warn('⚠ Invalid address!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                } else if(error.request){
                    toast.error('❌ Something went wrong! Try again later!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
            });
            
            
            
            //Set false because fecthing was finished
            setisLoading(false)
            
            
            
            
            
            
            //setting our render field of ip with current ip
            setinput(ip);
            
            //reseting input field
            setip("");
            setvis(true);

            
            
            console.log(ip);
            // console.log(vis);
            // console.log(response.data);
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
                    <h2>{isLoading?"Loading...":(location.city+", "+location.country)}</h2>
                    {/* <h2>{ips?(ips.location['city']+","+ips.countryCode):"-"}</h2> */}
                </span>
                <span>
                    <h3>TIMEZONE</h3>
                    <h2>{isLoading?"Loading..":("UTC"+" "+location.timezone)}</h2>
                    {/* <h2>{ips.status==="success"?("UTC"+" "+Math.round((ips.offset)/3600)+":00"):"-"}</h2> */}
                </span>
                <span >
                    <h3>ISP</h3>
                    <h2>{isLoading?"Loading..":isp}</h2>
                    {/* <h2>{ips.status==="success"?ips.isp:"-"}</h2> */}
                </span>
            </div>
            {isLoading?<Loader/>:null}
            
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                /> {/*Toast Container*/}
        </Container>

        </BgContainer>
        

        </>
    )
}

export default Homepage
