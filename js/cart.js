import "bootstrap/dist/css/bootstrap.css";
import "../css/all.min.css";
import "../js/navbar";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/cart.css";
import "jquery";
import "popper.js";
import "bootstrap";

function cart() {
  let amCount = 1;
  let amPrise = 19;
  $("#am-out-cart").text(amCount);
  $("#am-outTotal").text(amPrise * amCount);
  $("#am-minBtn").click(function() {
    if (amCount == 0) {
      amCount = 0;
      $("#am-out-cart").text(amCount);
      $("#am-outTotal").text(amPrise * amCount);
    } else {
      amCount -= 1;
      $("#am-out-cart").text(amCount);
      $("#am-outTotal").text(amPrise * amCount);
    }
  });
  $("#am-plusBtn").click(function() {
    amCount += 1;
    $("#am-out-cart").text(amCount);
    $("#am-outTotal").text(amPrise * amCount);
  });
}
cart();
