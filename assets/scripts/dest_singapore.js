var places;
var imgn;
function showds(img, place) {
  imgn = parseInt(img)
  if (place == 'singapore') {
    places = [
       'assets/styles/image/asia/singapore/chinatown_singapore.jpg',
       'assets/styles/image/asia/singapore/gardens_by_the_bay_singapore.jpg',
       'assets/styles/image/asia/singapore/marina_bay_Singapore.jpg',
       'assets/styles/image/asia/singapore/merlion_park_Singapore.jpg',
       'assets/styles/image/asia/singapore/Singapore-Flyer.jpg'
    ]
  }
 
  document.getElementById('new-modes').innerHTML = '<img ' + 'src= ' + '"' + places[imgn] + '"' + '/>'
  return imgn
}
