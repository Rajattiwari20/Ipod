import React from 'react';
import Wheel from './wheel';
import ScreenDisplay from './screenDisplay'
import ZingTouch from 'zingtouch';


class ipod extends React.Component{

    constructor(props){
        super(props);
        this.state={
            menu:true,
            album:false,
            songs:true,
            setting:false,
            artist:false,
            
        }
    }

    // for rotating wheel
    wheelRotate=(props)=>{
        let angle =0;
        const target =document.getElementById('outerwheel');
        const region =new ZingTouch.Region(target);
        region.bind(target, 'rotate', (e) =>{
           
            angle = angle+ e.detail.distanceFromLast;
            
            if(angle<0 && this.state.menu===true){
                //Songs
                
                let songs =document.getElementById('songs');
                songs.style.backgroundColor="black";
                songs.style.color="white";


                let Album =document.getElementById('Album');
                Album.style.backgroundColor="white";
                Album.style.color="black";


                let Artist =document.getElementById('Artist');
                Artist.style.color="black";
                Artist.style.backgroundColor="white";

                let Settings =document.getElementById('Settings');
                Settings.style.backgroundColor="white";
                Settings.style.color="black";

                this.setState({
                    menu:true,
                    album:false,
                    songs:true,
                    artist:false,
                    setting:false
                })
              
            }

            

            if(angle<15 && angle>0 && this.state.menu===true){
                //Album
                    let Album =document.getElementById('Album');
                    Album.style.backgroundColor="black";
                    Album.style.color="white";

                    let songs =document.getElementById('songs');
                    songs.style.backgroundColor="white";
                    songs.style.color="black";

                    let Settings =document.getElementById('Settings');
                    Settings.style.backgroundColor="white";
                    Settings.style.color="black";

                    let Artist =document.getElementById('Artist');
                    Artist.style.color="black";
                    Artist.style.backgroundColor="white";

                    this.setState({
                        menu:true,
                        album:true,
                        songs:false,
                        artist:false,
                        setting:false
                    })

                  
                }

            if(angle<30 && angle>15 && this.state.menu===true){
                //Artist
                let Artist =document.getElementById('Artist');
                Artist.style.backgroundColor="black";
                Artist.style.color="white";

                    let songs =document.getElementById('songs');
                    songs.style.backgroundColor="white";
                    songs.style.color="black";

                    let Settings =document.getElementById('Settings');
                    Settings.style.backgroundColor="white";
                    Settings.style.color="black";
                    
                    let Album =document.getElementById('Album');
                    Album.style.backgroundColor="white";
                    Album.style.color="black";
                    this.setState({
                        menu:true,
                        album:false,
                        songs:false,
                        artist:true,
                        setting:false
                    })
    
                  

            }

            if(angle<45 && angle>30 && this.state.menu===true){
                //setting

                let Album =document.getElementById('Album');
                Album.style.backgroundColor="white";
                Album.style.color="black";

                let songs =document.getElementById('songs');
                songs.style.backgroundColor="white";
                songs.style.color="black";

                let Settings =document.getElementById('Settings');
                Settings.style.backgroundColor="black";
                Settings.style.color="white";

                let Artist =document.getElementById('Artist');
                Artist.style.backgroundColor="white";
                Artist.style.color="black";
                

                this.setState({
                    menu:true,
                    album:false,
                    songs:false,
                    artist:false,
                    setting:true
                })

               ;
            }
            

        });

    }

    //for selecting and showing slected item from list
    listItem = (props) =>{
            if(this.state.songs===true && this.state.menu===true ){
                this.setState({menu:false},()=>{
                    console.log(this.state.menu);
                })
            let screen =document.getElementById('mainScreen');
            let list=document.getElementById('list');
            list.style.visibility="hidden";
            list.style.display="none";
            let h1 =document.createElement('img');
            h1.id="h1-screen";
            h1.setAttribute('src' , require('./images/song.png'));
            h1.style.height="100%";
            h1.style.width="100%";
            screen.appendChild(h1);
            }

            if(this.state.album===true && this.state.menu===true ){
                this.setState({menu:false},()=>{
                    console.log(this.state.menu);
                })
            let screen =document.getElementById('mainScreen');
            let list=document.getElementById('list');
            list.style.visibility="hidden";
            list.style.display="none";
            let h1 =document.createElement('img');
            h1.id="h1-screen";
            h1.setAttribute("src" , require('./images/album.jpeg'));
            h1.style.height="100%";
            h1.style.width="100%";
 
            screen.appendChild(h1);
            }

            if(this.state.artist===true && this.state.menu===true ){
                this.setState({menu:false},()=>{
                    console.log(this.state.menu);
                })
            let screen =document.getElementById('mainScreen');
            let list=document.getElementById('list');
            list.style.visibility="hidden";
            list.style.display="none";
            let h1 =document.createElement('img');
            h1.id="h1-screen";
            h1.setAttribute("src" , require('./images/artist.jpeg'));
            h1.style.height="100%";
            h1.style.width="100%";
 
            screen.appendChild(h1);
            }

            if(this.state.setting===true && this.state.menu===true ){
                this.setState({menu:false},()=>{
                    console.log(this.state.menu);
                })
            let screen =document.getElementById('mainScreen');
            let list=document.getElementById('list');
            list.style.visibility="hidden";
            list.style.display="none";
            let h1 =document.createElement('img');
            h1.id="h1-screen";
            h1.setAttribute("src" , require('./images/setting.jpeg'));
            h1.style.height="100%";
            h1.style.width="100%";
 
            screen.appendChild(h1);
            }
    }

    //home button also use for going back to menu tab
    homeScreen=(props)=>{
        
        if(this.state.menu === true){
            let menuItems =document.getElementById('list');
            menuItems.style.display="block"
            menuItems.style.visibility="visible";
        }

       if(this.state.menu===false){

                

            let prev =document.getElementById('h1-screen');
            prev.remove();
            let menuItems =document.getElementById('list');
            menuItems.style.display="block"
            menuItems.style.visibility="visible";

            //reset the state to initial state
            this.setState({
            menu:true,
            album:false,
            songs:true,
            artist:false,
            setting:false
           })
       }
    }

    render(){
        return(
            <div>
                <ScreenDisplay/>
                <Wheel
                rotate = {this.wheelRotate}
                display = {this.listItem}
                homeScreen = {this.homeScreen}/>
            </div>
        )
    }
}

export default ipod;