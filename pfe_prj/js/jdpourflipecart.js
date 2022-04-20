const card1 = document.querySelector(".card__inner1");

card1.addEventListener("click", function (e) {
  card1.classList.toggle('is-flipped1');
});
const card2 = document.querySelector(".card__inner2");
card2.addEventListener("click", function (e) {
    card2.classList.toggle('is-flipped2');
  });
  
  const card3 = document.querySelector(".card__inner3");
  
  card3.addEventListener("click", function (e) {
    card3.classList.toggle('is-flipped3');
  });