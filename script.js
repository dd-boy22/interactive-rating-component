const ratings = document.querySelectorAll(".btn");
const result = document.querySelector(".rt-pp");
const submit = document.querySelector(".sub-btn");
const thankYou = document.querySelector(".thank-you2");
const ratingContainer = document.querySelector(".container");
const error = document.querySelector(".error");

let selectedRating;

ratings.forEach(function (rating) {
  rating.addEventListener("click", function () {
    selectedRating = rating.textContent;
    console.log(rating.textContent);

    result.textContent = `You selected ${selectedRating}  out of 5`;
  });
});

submit.addEventListener("click", function () {
  if (selectedRating) {
    ratingContainer.style.display = "none";
    thankYou.style.display = "flex";
  } else {
    error.textContent = "Please select a rating!";
  }
});
