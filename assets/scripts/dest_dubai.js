var places;
var imgn;
function showds(img, place) {
  imgn = parseInt(img)
  if (place == 'dubai') {
    places = [
      ' assets/styles/image/asia/dubai/burj al_arab.jpg',
      ' assets/styles/image/asia/dubai/dubai_daytime.jpg',
      'assets/styles/image/asia/dubai/dubai001.jpg',
      ' assets/styles/image/asia/dubai/jumeirah district_dubai.jpg',
      ' assets/styles/image/asia/dubai/the-bastakiya-dubai.png',
    ]
  }
 
  document.getElementById('new-modes').innerHTML = '<img ' + 'src= ' + '"' + places[imgn] + '"' + '/>'
  return imgn
}
