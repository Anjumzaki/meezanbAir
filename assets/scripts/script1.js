

function openNav() {
  $('.carousel').carousel('pause');
  document.getElementById('overlay').classList.add('fadeMe');
  if (window.matchMedia("(min-width: 1101px)").matches) {
    document.getElementById("mySidenav").style.width = "50%";
  } else {
    document.getElementById("mySidenav").style.width = "100%"
}
}
  $(window).scroll(function() {
  var $height = $(window).scrollTop();
if($height < 100) {
  $('.carousel').carousel('cycle');
  } else {
  $('.carousel').carousel('pause');
  }
});

function openDNav() {
        document.getElementById('d-nav').classList.add('dis-none');
        document.getElementById('s-nav').classList.remove('dis-none');
      }
    function closeDNav(){
        document.getElementById('d-nav').classList.remove('dis-none');
        document.getElementById('s-nav').classList.add('dis-none')
    } 
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  $('.carousel').carousel('cycle');
  document.getElementById('overlay').classList.remove('fadeMe');


  }
  $(document).ready(function () {           
          $('.carousel').carousel();    
          $('.carousel').carousel({
interval: 1500
})   
      });
      // var width1 = $(window).width();
      // var hotelsimgs = document.getElementById('hotels12');
      // var hotelDiv = document.getElementById('with-hotel');
      // $(window).resize(function() {
      //   var width = $(window).width();
      //   var height = $(window).height();
      
      //   if(width<=640 || width1<=640) {
      //     hotelsimgs.remove();
      //   }
      //   else{
      //     document.getElementById('for-append').innerHTML(hotelsimgs)
      //   }
      
      // })