import {createGlobalStyle} from "styled-components";


export default createGlobalStyle`

*{
    box-sizing: border-box;
margin:0;
padding:0;

}

html, body, #root{
    max-height:100vh;
    max-width:100vw;

    height:100%;
    width:100%;
}

*, input, button{
    border:0;
    background: none;
    font-family:'Rubik', sans-serif;
}
html{
    background:white;
} 

#root{
    --very-dark-gray: hsl(0,0%,17%);
    --dark-gray: hsl(0,0%,29%);
    --white: white;
}

`