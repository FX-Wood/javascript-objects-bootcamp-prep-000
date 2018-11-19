var playlist = new Object({'Slowdive': 'Alison'});

function updatePlaylist(playlist, songTitle, artistName) {
  return playlist = Object.assign({}, playlist, {songTitle: artistName})
}
