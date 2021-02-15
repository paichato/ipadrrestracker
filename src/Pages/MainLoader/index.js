import React from 'react'
import loaderm from '../../Assets/loader-bussola.gif'
import { GitIcon } from './MainLoaderElements'

function MainLoader() {
    return ReactDOM.createPortal(
        <>
        <MainLoaderContainer>
          
                <img src={loaderm}/>
                <div id="table">
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
