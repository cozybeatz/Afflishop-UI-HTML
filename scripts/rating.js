let ratingStars = document.querySelectorAll(".rating-star");
ratingStars = Array.from(ratingStars);
let rating = localStorage.getItem("rating");

window.onload = () => {
  setProductRating();
};

function setProductRating() {
  let rate;
  if (rating === null) {
    rate = 0;
  } else {
    rate = localStorage.getItem("rating");
  }

  ratingStars.map((ratingStar, i) => {
    if (i + 1 <= rate) {
      ratingStar.classList.add("fill-black");
    } else if (i + 1 > rate) {
      ratingStar.classList.remove("fill-black");
    }
  });
}

function rateProduct(clickedStar) {
  let rate = clickedStar.dataset.rate;
  if (rating === null) {
    localStorage.setItem("rating", rate);
  } else {
    localStorage.setItem("rating", rate);
  }

  ratingStars.map((ratingStar, i) => {
    if (i + 1 < rate) {
      ratingStar.classList.add("fill-black");
      clickedStar.classList.add("fill-black");
    } else if (i + 1 > rate) {
      ratingStar.classList.remove("fill-black");
    }
  });
}
