import React from 'react'
import LibrarySong from "./LibrarySong"

const Library  = ({songs,libraryStatus,setCurrentSong,setSongs,isPlaying,audioRef,song}) => {

     
    return (
        <div className={`library ${libraryStatus ? 'active-library' :''}`}>
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
              
                {songs.map((song)=>(<LibrarySong 
                songs={songs}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs}
                key={song.id}
                id={song.id}
                song={song}
                audioRef={audioRef}
                isPlaying={isPlaying}
                             
                
                
                
                />))}

            </div>
            
        </div>
        </div>
    )
}

export default  Library
