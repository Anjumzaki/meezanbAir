var places;
var imgn;
function showds(img, place) {
  imgn = parseInt(img)
  if (place == 'istanbul') {
    places = [
      'assets/styles/image/tr/ist/grand-bazaar-istanbul-turkey.jpg',
      'assets/styles/image/tr/ist/Hagia.Sophia.jpg',
      'assets/styles/image/tr/ist/istanbul-Dolmabahce-sarayi.jpg',
      'assets/styles/image/tr/ist/istanbul-modern-museum.jpg',
      'assets/styles/image/tr/ist/Kiz-Kulesi-Istanbul-Turkey.jpg',
    ]
  }
  else if (place == 'TRABZON') {
    places=[
      'assets/styles/image/tr/trabzon/trabzon-ataturk-kosku.jpg',
      'assets/styles/image/tr/trabzon/sumela-manastiri-1-trabzon.jpg',
      'assets/styles/image/tr/trabzon/Trabzon_HagiaSophia_museum.jpg',
      'assets/styles/image/tr/trabzon/uzungol_trabzon.jpg',
    ]
  } 
  else if(place == 'konya'){
    places=[
      'assets/styles/image/tr/konya/konya_Aziziye_camii.jpg',
      'assets/styles/image/tr/konya/mevlana-muzesi_konya.jpg',
      'assets/styles/image/tr/konya/Whirling_show_konya.jpg',
      'assets/styles/image/tr/konya/konya-cami.png',
      'assets/styles/image/tr/konya/Konya_Science_Center.jpg'
    ]
  }
  else if(place=='kapadokya'){
    places=[
      'assets/styles/image/tr/kapadokya/cappadocia-intro0.jpg',
      'assets/styles/image/tr/kapadokya/Fairy_Chimeny_otel_in_Goreme_kapadokya.jpg',
      'assets/styles/image/tr/kapadokya/hilton_hotel_in_avanos_kapadokya.jpg',
      'assets/styles/image/tr/kapadokya/Cappadocia.jpg',
      'assets/styles/image/tr/kapadokya/cappadocia-hot-air-balloon-tours-1.jpg',
    ]
  }
  else if(place=='antalya'){
    places=[
      'assets/styles/image/tr/antalya/antalya_kaleici0.jpg',
      'assets/styles/image/tr/antalya/Antalya-Museum-76003.jpg',
      'assets/styles/image/tr/antalya/aspendos_antalya.jpg',
      'assets/styles/image/tr/antalya/turkey-antalya-old-harbor.jpg',
      'assets/styles/image/tr/antalya/antalya-opt.jpg'
    ]
  }
  document.getElementById('new-modes').innerHTML = '<img ' + 'src= ' + '"' + places[imgn] + '"' + '/>'
  return imgn
}
