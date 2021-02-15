import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import MainLoader from './Pages/MainLoader';
import GlobalStyle from './Pages/styles/global'

function App() {
  
const [ip, setip] = useState("");
const [vis,setvis]=useState(false);



  return (
    <>
    <BrowserRouter basename="/ipadrrestracker">
      <Route path="/" exact>
        <Homepage ip={ip} setip={setip} setvis={setvis} vis={vis} />
      </Route>
      
    </BrowserRouter>
    <MainLoader/>
      <GlobalStyle></GlobalStyle>
    </>
  );
}

export default App;
