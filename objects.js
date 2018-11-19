var playlist = new Object({'Slowdive': 'Alison'});

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist = Object.assign({}, playlist, {songTitle: artistName})
}