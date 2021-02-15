import React from 'react'
import loaderm from '../../Assets/loader-bussola2.gif'
import { GitIcon, MainLoaderContainer } from './MainLoaderElements'
import reactDOM from 'react-dom';


function MainLoader() {
    return reactDOM.createPortal(
        <>
        <MainLoaderContainer>
        <div id="table">
        <h1>Loading...</h1>
                <span>
                    <img src={loaderm}/>
                    
                </span>
                
                    <a>
                        <GitIcon/>
                        <p>Made by paichato</p>
                    </a>
                </div>
        </MainLoaderContainer>
            
        </>, document.getElementById('loader')
    )
}

export default MainLoader
