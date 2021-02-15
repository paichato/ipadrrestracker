import styled from "styled-components";
import loader from '../../Assets/u.gif';



export const LoaderContainer=styled.section`


.loaderbg{
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: transparent;
    z-index:99999;
    width:100%;
    height:100%;
    

}

.loader{
    
    position:absolute;
    left:0%;
    top:0%;

    border:0 solid transparent;
    border-radius: 50%;
    width:150px;
    height:150px;
    top: calc(50vh - 75px);
    left: calc(50vw - 75px);


    /* background-image: url("../../Assets/u.gif");
    background-repeat:no-repeat;
    background-size:40%; */


}

.loader::before, #loader::after{
    content:'';
    border:1em solid #ff5733;
    border-radius:50%;
    width:inherit;
    height:inherit;
    position:absolute;
    top:0;
    left:0;
    animation: loader 2s linear infinite;
    opacity:0;

}

#loader::before{
    animation-delay: .5s;

}

@keyframes loader{
    0%{
        transform:scale(0);
        opacity:0;
    }
    50%{
        opacity:1;

    }
    100%{
        transform:scale(1);
        opacity: 0;

    }
}

`