const playlist = ['SOAD', 'SUM41', 'BREAKING']

function addSongs(song) {
    const addSong = playlist.unshift(song)
    console.log(`estas fueron la cantidad de las nuevas canciones agregadas `, addSong);
    console.log('asi quedo la actualizada playlist: ' , playlist);
}

function deleteSongs(songs) {

    const deleteSong = playlist.shift()
    console.log('this was the song deleted: ', deleteSong);
    console.log('this is the new playlist: ', playlist);
    
}


addSongs('DEVIL');
deleteSongs();

