//navbar
var searchBtn = $('#searchInput');
var searchContainer = $('.search-container');
var closeSearch = $('.close-search');
searchBtn.on('click', function(){
   searchBtn.addClass('active');
   closeSearch.addClass('active');
})
closeSearch.on('click', function(){
   searchBtn.removeClass('active');
   closeSearch.removeClass('active');
})
//navbar

//index
var indexSlider = $('.promotion-slider');

indexSlider.slick({
infinite: true,
speed: 300,
slidesToShow: 1,
arrows: false,
// fade: true,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrows: true,
    }
  },
]
});
//index
