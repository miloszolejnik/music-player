import React from 'react';

const LibrarySong = ({song, songs, setCurrentSong, audioRef, isPlaying, setSongs, id}) =>{
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        //Add Active State
        const newSong = songs.map((song) =>{
            if(song.id === id ){
                return{
                    ...song,
                    active: true
                }
            }else{
                return{
                    ...song,
                    active: false
                }
            }
        });
        setSongs(newSong);
        //chcek if the song is playig
        if(isPlaying) audioRef.current.play();
    }
    return (
        <div 
            onClick={songSelectHandler} 
            className={`library-song ${song.active ? 'selected' : ""}`}   >
            <img alt={song.name} src={song.cover} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;