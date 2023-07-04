// portfolio filter start
let list = document.querySelectorAll('.list');
let itembox = document.querySelectorAll('.itembox');

for (let i = 0; i < list.length; i++){
   list[i].addEventListener('click', function(){
      for(let j = 0; j < list.length; j++){
         list[j].classList.remove('active');
      }
      this.classList.add('active');

      let dataFilter = this.getAttribute('data-filter');

      for(let k = 0; k < itembox.length; k++){
         itembox[k].classList.remove('active');
         itembox[k].classList.add('hide');

         if(itembox[k].getAttribute('data-item') == dataFilter || 
         dataFilter == "all"){
            itembox[k].classList.remove('hide');
            itembox[k].classList.add('active');
         }
      }

   })

   $('.project-area .product .test-popup-link').magnificPopup({
      type: 'image',
      gallery:{enabled:true}
    });
}
// portfolio filter close

//Navigation menu start




// sticky navigation menu

let nav_offset_top = $('.header_area').height()+50;

function navbarFixed(){
   if($('.header_area').length){
      $(window).scroll(function(){
         let scroll = $(window).scrollTop();
         if(scroll >= nav_offset_top){
            $('.header_area .main-menu').addClass('navbar_fixed');
         }else{
            $('.header_area .main-menu').removeClass('navbar_fixed');
         }
      })
   }
}

navbarFixed();
//Navigation menu end

//owl-carousel
$('.owl-carousel').owlCarousel({
   loop: true,
   autoplay: true,
   dots: true,
   responsive:{
      0:{
         items: 1
      },
      544:{
         items: 2
      }
   }
})