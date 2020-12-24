import React from 'react'
 import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {faPlay,faAngleLeft,faAngleRight,faPause} from "@fortawesome/free-solid-svg-icons"

const Player = ({currentSong,isPlaying ,setIsPlaying,audioRef,songInfo,setSongInfo}) => {
   //Ref
     //event handler 
      const playSongHandler =()=>{
       if(isPlaying) 
        {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);

        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);


        }
    }

  
 
    const dragHandler =(e)=>{
         audioRef.current.currentTime= e.target.value;
         setSongInfo ({...songInfo,currentTime:e.target.value})
    }
    //state 

   

    const getTime = (time )=>{
         return (
              Math.floor(time/60) + ":" + ("0" + Math.floor(time%60 )).slice(-2)
         )
    }

     

  
      
    return (
        <div className ="player">
             <div className ="time-control">
                  <p>{getTime(songInfo.currentTime)}</p>
                  <input type="range"
                   min={0}
                   max={songInfo.duration||0}
                   value={songInfo.currentTime}
                   onChange={dragHandler}
                  />
                  <p> {getTime(songInfo.duration)} </p>
             </div>
         <div className="play-control">
         <FontAwesomeIcon className ="skip-back" icon ={faAngleLeft} size= "2x" />

        <FontAwesomeIcon  onClick ={playSongHandler} className ="play" icon ={isPlaying?faPause:faPlay} size= "2x" />

        <FontAwesomeIcon className ="skip-forward " icon ={faAngleRight} size= "2x" />
         </div>
       
        </div>
    )
}

export default Player
