import "bootstrap/dist/css/bootstrap.css";
import "../css/all.min.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/feedback.css";
import "../js/navbar";
import "jquery";
import "popper.js";
import "bootstrap";

function rateExp() {
  $(".AHrateExpBtn").click(function() {
    $(".AHrateExpBtn").css({
      backgroundColor: "#fff",
      borderColor: "#cdcdcd",
      color: "#593f3b"
    });
    $(".AHitem i").css("color", "#cdcdcd");
    $(this).css({
      backgroundColor: "#cdcdcd",
      borderColor: "black",
      color: "black"
    });
    $(this)
      .siblings()
      .css("color", "black");
  });
}

function rateServe() {
  $(".AHrateServBtn").click(function() {
    $(".AHrateServBtn").css({
      backgroundColor: "#fff",
      color: "#593f3b",
      borderColor: "#cdcdcd"
    });
    $(this).css({
      backgroundColor: "#cdcdcd",
      color: "black",
      borderColor: "black"
    });
  });
}

function rateShare() {
  $(".AHrateShareBtn").click(function() {
    $(".AHrateShareBtn").css({
      backgroundColor: "#fff",
      color: "#593f3b",
      borderColor: "#cdcdcd"
    });
    $(this).css({
      backgroundColor: "#cdcdcd",
      color: "black",
      borderColor: "black"
    });
  });
}

function textIsEmpty() {
  var emptyMessage = $("#AHmessage");
  emptyMessage.html("");
  console.log(emptyMessage.val().length);
}

textIsEmpty();
rateExp();
rateServe();
rateShare();
