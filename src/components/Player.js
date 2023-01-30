import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";




const Player = ({ isPlaying, setIsPlaying, audioRef, setSonginfo, songInfo, songs, setSongs, currentSong, setCurrentSong }) => {

    const activeLIbraryHandler = (nextPrev) => {
        const newSongs = songs.map((song) => {
            if (song.id === currentSong.id) {
                return {
                    ...song,
                    active: true,
                }
            }
            else {
                return {
                    ...song,
                    active: false,
                }
            }
        })
        setSongs(newSongs)
    }
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        }
        else {
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSonginfo({ ...songInfo, currentTime: e.target.value })
    }

    const skipTrackHandler = async (direction) => {
        let changeCurrentSong = songs.findIndex((song) => song.id === currentSong.id)
        if (direction === 'skip-forward') {
            await setCurrentSong(songs[(changeCurrentSong + 1) % songs.length])
            activeLIbraryHandler(songs[(changeCurrentSong + 1) % songs.length])
        }
        if (direction === 'skip-back') {
            if ((changeCurrentSong - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1])
                activeLIbraryHandler(songs[songs.length - 1])
                if (isPlaying) audioRef.current.play()
                return;
            }
            await setCurrentSong(songs[(changeCurrentSong - 1) % songs.length])
            activeLIbraryHandler(songs[(changeCurrentSong - 1) % songs.length])
        }
        if (isPlaying) audioRef.current.play()
    };
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input
                    onChange={dragHandler}
                    min={0}
                    max={songInfo.duration || 0}
                    value={songInfo.currentTime}
                    type="range" />
                <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
        </div>
    )
}

export default Player