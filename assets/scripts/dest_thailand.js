var places;
var imgn;
function showds(img, place) {
  imgn = parseInt(img)
  if (place == 'thailand') {
    places = [
       'assets/styles/image/asia/thailand/bangkok_thailand.jpg',
       'assets/styles/image/asia/thailand/KhaoSokNationalPark_thailand.jpg',
       'assets/styles/image/asia/thailand/lumphini_park_thailand.jpg',
       'assets/styles/image/asia/thailand/phanom_rung_thailand.jpg'
    ]
  }
 
  document.getElementById('new-modes').innerHTML = '<img ' + 'src= ' + '"' + places[imgn] + '"' + '/>'
  return imgn
}
