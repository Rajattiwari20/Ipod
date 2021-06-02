import React from 'react';
import './screenDisplay.css';


const screenDisplay= (props)=>{

     return (  
         <div id = "screen-container">
            <div id="mainScreen" >
               <ul id="list">
                   <li id="songs" className="selected" >Songs</li>
                   <li id="Album" >Album</li>
                   <li id="Artist">Artist</li>
                   <li id="Settings">Setting</li>
               </ul>
               </div>   
            </div>  
        );
    }

export  default screenDisplay;