import { useState } from 'react';
import Homepage from './Pages/Homepage';
import GlobalStyle from './Pages/styles/global'

function App() {
  
const [ip, setip] = useState("");
const [vis,setvis]=useState(false);



  return (
    <>
      <Homepage ip={ip} setip={setip} setvis={setvis} vis={vis} />
      <GlobalStyle></GlobalStyle>
    </>
  );
}

export default App;
