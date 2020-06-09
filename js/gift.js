import "bootstrap/dist/css/bootstrap.css";
import "../css/all.min.css";
import "../js/navbar";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/gift_style.css";
import "jquery";
import "popper.js";
import "bootstrap";

function giftFunction() {
  if (document.getElementById("giftBody") != null) {
    let totalRatingsCount = $("#RatingCount").html();
    totalRatingsCount = totalRatingsCount.replace("(", "");
    totalRatingsCount = totalRatingsCount.replace(")", "");
    totalRatingsCount = parseInt(totalRatingsCount);
    $(".o-rating-count").each(function(index) {
      let ratingCount = parseInt($(this).text());
      console.log(
        $(".o-progress-bar")
          .eq(index)
          .width(`${(100 * ratingCount) / totalRatingsCount}%`)
      );
    });

    //.o-reviews.container.o-reviews-ratings-description.o-review-rating.o-progress
  }
}
giftFunction();
