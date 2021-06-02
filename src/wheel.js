import './wheel.css';
import React from 'react';

const Wheel = (props) =>{

    return (
        <div id= "wheel-container">
            <div id = "outerwheel" onClick={props.rotate}>
                <p id="menu"><button id="menu-btn" onClick= {props.homeScreen} >MENU</button></p>
                <p id="prev"><img src="https://www.flaticon.com/svg/static/icons/svg/2404/2404657.svg" alt="<<"></img></p>
                <p id="play"><img src="https://www.flaticon.com/svg/static/icons/svg/2404/2404569.svg" alt="▷||"></img></p>
                <p id="next"><img src="https://www.flaticon.com/svg/static/icons/svg/2404/2404651.svg" alt=">>"></img></p>
                <div id="innercontroller" onClick= {props.display}></div>
            </div>
        </div>
    )
}

export default Wheel;

