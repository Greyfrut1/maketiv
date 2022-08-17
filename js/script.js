$(function() {
  $('.development-sites__slider').slick({
    slidesToScroll:3,
    slidesToShow:3,
    responsive:[{
        breakpoint: 850,
        settings:{
          slidesToScroll:2,
          slidesToShow:2,
          dots: true,
        }
      },{
      breakpoint: 600,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
      }
    }
    ]
  })
  $('.comments__slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    dots: true
  });
  $('.mentors__slider').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    dots: true
  });
})
function initMap(){
  var pos = {lat: 50.7144753921747, lng: 25.318023769555058};
  var opt = {
   center: pos,
    zoom: 17
  }

  var Mymap = new google.maps.Map(document.getElementById("map"), opt);

  var marker = new google.maps.Marker({
    position: pos,
    map: Mymap
  })
}

const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e){
  e.preventDefault();
  popup.classList.toggle("open");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}