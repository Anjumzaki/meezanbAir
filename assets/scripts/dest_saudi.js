var places;
var imgn;
function showds(img, place) {
  imgn = parseInt(img)
  if (place == 'saudi') {
    places = [
        'assets/styles/image/asia/saudi-arabia/king-ab-city.jpg',
        'assets/styles/image/asia/saudi-arabia/photos-of-madina-a-dreamy-night-view-of-masjid-an-nabawi-madina-with-full-moon-overhead-pictures-of-madina1.jpg',
        'assets/styles/image/asia/saudi-arabia/Saudi-Arabia.jpg',
        'assets/styles/image/asia/saudi-arabia/Madina-Saudia-Arabia.jpg'
    ]
  }
 
  document.getElementById('new-modes').innerHTML = '<img ' + 'src= ' + '"' + places[imgn] + '"' + '/>'
  return imgn
}
