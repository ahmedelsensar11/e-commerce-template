import "bootstrap/dist/css/bootstrap.css";
import "../css/all.min.css";
import "../css/navbar.css";
import "../js/navbar";
import "../css/footer.css";
import "../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "../css/home_style.css";
import "jquery";
import "popper.js";
import "bootstrap";

import "owl.carousel";

/* Caroseul Plugin */

$(document).ready(function() {
  //Home Plugin
  $(".owlBestSeller").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,

    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });

  //BestSale Plugin
  $(".homeServices").owlCarousel({
    loop: true,
    margin: 10,
    items: 3,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});

//Count Down Sale

function countDown() {
  var date = new Date();
  var saleDate = new Date(2019, 11, 25);

  var currentTime = date.getTime();
  var eventTime = saleDate.getTime();
  var counterTime = eventTime - currentTime;

  var s = Math.floor(counterTime / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);
  var d = Math.floor(h / 24);

  //percent
  s %= 60;
  m %= 60;
  h %= 24;

  //01 to 09
  d = d < 10 ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("homeDay").innerHTML = d - 30; //The getMonth() method returns the month plus one
  document.getElementById("homeHour").innerHTML = h;
  document.getElementById("homeMin").innerHTML = m;
  document.getElementById("homeSec").innerHTML = s;

  setTimeout(countDown, 1000);
}

countDown();
