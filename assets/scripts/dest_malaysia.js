var places;
var imgn;
function showds(img, place) {
  imgn = parseInt(img)
  if (place == 'malaysia') {
    places = [
       'assets/styles/image/asia/malaysia/shorthandmalaysia0.jpg',
       'assets/styles/image/asia/malaysia/georgetown_penang_malaysia.jpg',
       'assets/styles/image/asia/malaysia/wilajah_mosque_kuala_lumpur.jpg',
       'assets/styles/image/asia/malaysia/my-penang-george-kek-lok-si-tempel-pagode.jpg', 
       'assets/styles/image/asia/malaysia/forest-malaysia-1.jpg', 
    ]
  }
 
  document.getElementById('new-modes').innerHTML = '<img ' + 'src= ' + '"' + places[imgn] + '"' + '/>'
  return imgn
}
