import styled from "styled-components";
import {IoIosArrowForward} from 'react-icons/io';


export const BgContainer=styled.div`
z-index:1;

img{
    min-width:100%;
    /* height:100%; */
    display:flex;
    justify-content:center;
    align-items:center;
    
    /* background:white url(bg) no-repeat fixed center; */
}

iframe{
    position:absolute;
    //now it fits right
    object-fit:cover;
    max-width:100vw;
    height:72vh;
    }

`

export const Container=styled.div`
z-index: 2;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;



h1{
    position:absolute;
    z-index:2;
    color:var(--white);
    font-size:30px;
    font-weight:500;
    margin-bottom: 400px;

}
form{
    
    display:flex;
   
    justify-content:center;
    align-items:center;
   

    @media (max-width:600px){
         
    }
}



.divButton{
    position:absolute;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width:35vw;
    height: 40px;
    margin-bottom: 280px;
    padding:10px;

    @media (max-width:600px){
         
    }

    input{
        min-width:35vw;
        text-indent:10px;
    display:flex;
    flex:1;    
    background:var(--white);
    border-radius:9px 0 0 9px;
    color:var(--dark-gray);
    font-size:18px;
    outline:none;

    min-height:50px;
    border:${(vis)=>vis?'none':'2px solid red'};
    }
    button{
        min-height:50px;
        min-width:40px;
        background:var(--dark-gray);
        border-radius:0px 9px 9px 0;
        outline:none;
        border:1px solid var(--dark-gray);
        cursor: pointer;
        padding:2px;
        transition:all 0.2s ease-in-out;
        &:hover{
                background:var(--very-dark-gray);
        }

        
             


    }
}
.divData{
    position:absolute;
    flex-direction:row;
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:70vw;
    min-height:15vh;
    background:var(--white);
    border-radius:10px;
    padding-left:10px;
    box-shadow: 0px 4px 18px rgba(0,0,0,0.2);

    transition:all 0.2s ease-in-out;

    @media (max-width:1000px){
        flex-direction:column;
        margin-top:30vh;
        width:35vw;
        padding:0;
        text-align:center;
        
        
        
    }
    @media (max-width:600px){
         width:50vw;
         height:40vh; 
         padding:0;
         margin-top:30vh;
         justify-content:center;
         align-items:center;
         text-align:center;
         padding:0;

         
         
    }
    @media (max-width:555px){
        width:70vw;

    }

    h1{
        margin-left:260px;
        margin-top:150px;
        visibility:${(vis)=>vis?'hidden':'visible'};
    }

    span{
        width:13vw; //20vw works fine
        
        /* height:20vh; */
        padding:10px;
        padding-left:20px;
        align-items:center;
        /* flex:0 auto; */
        border-left:0.2px solid rgba(0,0,0,0.2);
        border-spacing:0px;
        
        /* ::after{
            content:"";
            position:absolute; 
            bottom:90px;
            border-right:2px solid gray;
        } */

        &+span{
            padding-right:30px;
        }
        h3{
            
            color:var(--dark-gray);
            font-size:14px;
            font-weight:400;
            padding-bottom:10px;

            @media (max-width:600px){
            width:70vw;
            /* height:10vh; */
            margin:0; 
            text-align:center;

    }
        }
        h2{
            min-height:56px;
            color:var(--very-dark-gray);
            font-size:22px;
            transition:all 0.2s ease-in-out; 
         
            @media (max-width:600px){
            width:70vw;
            height:10vh;
            margin:0; 
            text-align:center;
        
         
        
            }
        }
        @media (max-width:1000px){
            border:none;
            width:35vw;
           
        }
        @media (max-width:600px){
            width:70vw;
            height:10vh;
            margin:0; 
            text-align:center;
            padding:0px;
            padding-top:10px;
         
        
    }
        
        
    }.corner{
            border-left:none;
            /* border-right:none; */
            /* background:red; */
        }
}


`
export const Arrow=styled(IoIosArrowForward)`
width:16px;
height:16px;
fill:var(--white);



`
export const AlertS=styled.h1`
position:absolute;
z-index:5;
color:red;
font-size:40px;
padding:0;
margin:0;
margin-left:150px;
`
//comit to commit