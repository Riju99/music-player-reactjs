import React,{useState,useRef} from 'react'
import Player from "./component/Player";
import Song from "./component/Song";
import "./styles/app.scss";
import data from "./util"
import Library from "./component/Library"
import Nav from "./component/Nav";

const App = () => {
 //REf
 const audioRef=useRef(null);


  //state
   const [songs,setSongs] = useState(data());
   const [currentSong ,setCurrentSong ] = useState(songs[0]);
   const [isPlaying ,setIsPlaying] = useState (false);
   const [songInfo, setSongInfo] = useState({
    currentTime :0,
    duration:0,
});
 
const [libraryStatus,setLibraryStatus] = useState(null)
 

const timeUpdateHandler=(e)=>{
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo({...songInfo,currentTime:current,duration:duration})
}
   
  return (
    <div>
       <Nav 
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        />      


     <Song currentSong ={currentSong}/>
     <Player 
      audioRef={audioRef} 
        isPlaying ={isPlaying} 
        setIsPlaying={setIsPlaying}
         currentSong ={currentSong }
         songInfo={songInfo}
         setSongInfo={setSongInfo}/>

         <Library songs={songs}
           setCurrentSong={setCurrentSong}
           setSongs={setSongs}
           songs={songs}
           isPlaying={isPlaying}
           audioRef={audioRef}
          libraryStatus={libraryStatus}

         /> 
    <audio 
        onTimeUpdate ={timeUpdateHandler}
         ref={audioRef} 
          src = {currentSong.audio}
          onLoadedMetadata={timeUpdateHandler}
         > 
         </audio>
    </div>
  )
}

export default App
