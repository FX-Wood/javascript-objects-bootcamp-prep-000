var playlist = new Object({'Slowdive': 'Alison'});

function updatePlaylist(playlist, songTitle, artistName) {
  playlist[songTitle] = artistName
  return playlist
}

function removeFromPlaylist(playlist, songTitle) {
  delete playlist.songTitle
}