import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import GlobalStyle from './Pages/styles/global'

function App() {
  
const [ip, setip] = useState("");
const [vis,setvis]=useState(false);



  return (
    <>
    <BrowserRouter basename="/ipaddresstracker">
      <Route path="/" exact>
        <Homepage ip={ip} setip={setip} setvis={setvis} vis={vis} />
      </Route>
    </BrowserRouter>
      <GlobalStyle></GlobalStyle>
    </>
  );
}

export default App;
