import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import MainLoader from './Pages/MainLoader';
import GlobalStyle from './Pages/styles/global'

const useExpired = (time)=>{
  const [expired, setExpired] = useState(false);
  const timoutRef = useRef();
  useEffect(()=>{
    timoutRef.current = setTimeout(()=>{
      setExpired(true);
    }, time);
    return ()=>{
      clearTimeout(timoutRef.current);
    }
  },[time]);
  return expired;
}


function App() {
  
const [ip, setip] = useState("");
const [vis,setvis]=useState(false);
const expired=useExpired(3000);


  return (
    <>
    {expired?(
      <>
    <BrowserRouter basename="/ipadrrestracker">
      <Route path="/" exact>
        <Homepage ip={ip} setip={setip} setvis={setvis} vis={vis} />
      </Route>
      
    </BrowserRouter>
    
      <GlobalStyle/>
      </>):<MainLoader/>}
      <MainLoader/>
    </>
  );
}

export default App;
