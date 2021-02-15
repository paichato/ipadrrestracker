import styled from "styled-components";
import {AiOutlineGithub} from 'react-icons/ai'



export const MainLoaderContainer=styled.div`
display:grid;
place-items:center;
width:100vw;
height:100vh;


div{
    display:flex;
flex-direction:column;
align-items:center;
place-items:center;
}


h1{
    position:absolute;
    margin-top:400px;
    margin-left:50px;
    color:#000000e0;
}

span{
    display:grid;
align-items:center;
place-items:center;
/* margin-left:400px;
margin-top:200px; */
}

a{
    text-decoration:none;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:800px;
    color:#000000e0;
    fill:#000000e0;
    cursor: pointer;

    &:hover{
        fill:black;
        color:black;
    }

    
}

img{
    position:absolute;
    margin-top:600px;
    
    margin-left:50px;
    /* margin-top:200px; */
    width:200px;
    height:200px;
    /* box-shadow: 4px 4px 18px rgba(0,0,0,0.2); */
}

p{
 font-size:12px;   
}

`

export const GitIcon=styled(AiOutlineGithub)`

width:40px;
height:40px;

`