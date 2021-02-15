import React from 'react'
import loaderm from '../../Assets/loader-bussola2.gif'
import { GitIcon, MainLoaderContainer } from './MainLoaderElements'
import reactDOM from 'react-dom';


function MainLoader() {
    return reactDOM.createPortal(
        <>
        <MainLoaderContainer>
        <div id="table">
        
               
            <img src={loaderm}/>
            <h1>Loading...</h1>
            <a href="https://github.com/paichato/ipadrrestracker" target="#blank">
                <GitIcon/>
                <p>Made by paichato</p>
            </a>
        </div>
        </MainLoaderContainer>
            
        </>, document.getElementById('loader')
    )
}

export default MainLoader
