let offset = 0; // смещение от левого края

const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
  offset = offset + 100;
  if (offset > 200) {
    offset = 0;
  }
  sliderLine.style.left = -offset + '%';
});

document.querySelector('.slider-back').addEventListener('click', function () {
  offset = offset - 100;
  if (offset < 0) {
    offset = 200;
  }
  sliderLine.style.left = -offset + '%';
});

/*Ranking*/

const rankingItemsList = document.querySelectorAll('.ranking-item');
const rankingItemsArray = Array.prototype.slice.call(rankingItemsList);

rankingItemsArray.forEach((item) =>
  item.addEventListener('click', () => {
    const { itemValue } = item.dataset;
    item.parentNode.dataset.totalValue = itemValue;
  })
);
