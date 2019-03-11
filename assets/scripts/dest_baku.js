var places;
var imgn;
function showds(img, place) {
  imgn = parseInt(img)
  if (place == 'baku') {
    places = [
       'assets/styles/image/asia/baku/azerbaijan_state_carpet_museum_baku.jpg',
       'assets/styles/image/asia/baku/Baku_Funicular.jpg',
       'assets/styles/image/asia/baku/mini_venice_Baku.jpg',
       'assets/styles/image/asia/baku/nizami_street_Baku.jpg',
    ]
  }
 
  document.getElementById('new-modes').innerHTML = '<img ' + 'src= ' + '"' + places[imgn] + '"' + '/>'
  return imgn
}
