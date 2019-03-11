var places;
var imgn;
function showds(img, place) {
  imgn = parseInt(img)
  if (place == 'cu') {
    places = [
        'assets/styles/image/europe/central_europe/oldtown_tower bridge.jpg',
        'assets/styles/image/europe/central_europe/Chain-Bridge-HDR.jpg',
        'assets/styles/image/europe/central_europe/prague-castle-czech-republic.jpg',
        'assets/styles/image/europe/central_europe/prague_walpaper.jpg',
        'assets/styles/image/europe/central_europe/kunstoriches_museum.jpg',
    ]
  }
 else if(place == 'ce') {
      places=[
        'assets/styles/image/europe/southern_europe/coloseum_rome.jpg', 
        'assets/styles/image/europe/southern_europe/leaning_tower_pisa.jpg', 
        'assets/styles/image/europe/southern_europe/parthenon_greece.jpg', 
        'assets/styles/image/europe/southern_europe/sagrada_familia_barcelona.jpg',
        'assets/styles/image/europe/southern_europe/santorini.jpg',
      ]
  }

 
  document.getElementById('new-modes').innerHTML = '<img ' + 'src= ' + '"' + places[imgn] + '"' + '/>'
  return imgn
}
