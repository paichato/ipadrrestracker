import { useState } from 'react';
import Homepage from './Pages/Homepage';
import GlobalStyle from './Pages/styles/global'

function App() {
  
const [ip, setip] = useState("");



  return (
    <>
      <Homepage ip={ip} setip={setip}/>
      <GlobalStyle></GlobalStyle>
    </>
  );
}

export default App;
