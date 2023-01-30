import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({songs,setCurrentSong,audioRef,isPlaying,libraryStatus,setSongs}) =>{
    return(
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library_song">
                {songs.map((song) =>(
                    <LibrarySong
                     isPlaying={isPlaying}
                     audioRef={audioRef}
                     songs={songs} 
                     setCurrentSong={setCurrentSong} 
                     song={song} 
                     id={song.id} 
                     key={song.id}
                     setSongs={setSongs}
                    />
                ))}
            </div>
        </div>
    )
}
export default Library