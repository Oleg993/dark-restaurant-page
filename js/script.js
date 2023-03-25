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

window.onload = function () {
  const rankingItemsList = document.querySelectorAll('.ranking-item');
  const rankingItemsArray = Array.prototype.slice.call(rankingItemsList);

  rankingItemsArray.forEach((item) =>
    item.addEventListener('click', () => {
      const { itemValue } = item.dataset;
      item.parentNode.dataset.totalValue = itemValue;
    })
  );
};

/*Section 3*/

let listSection3 = document.querySelector('.third-page-items');
let key;

async function fillList() {
  let response = await fetch('./section3.json');
  let content = await response.json();

  let template = '';

  const contentArray = Array.prototype.slice.call(content);
  contentArray.forEach((element) => {
    template += `
<div class="item-third-page">
    <div class="item-third-page-img">
      <img src="${element.img}" alt="" />
    </div>
    <div class="item-third-page-text">
      <h3>${element.title}</h3>
      <p class="third-page-p-1">${element.description1}</p>
      <p class="third-page-p-2">${element.description2}</p>
      <div class="item-third-footer">
        <div class="item-third-ranking" data-total-value="0">
          <div class="ranking-item" data-item-value="5">${element.star}</div>
          <div class="ranking-item" data-item-value="4">${element.star}</div>
          <div class="ranking-item" data-item-value="3">${element.star}</div>
          <div class="ranking-item" data-item-value="2">${element.star}</div>
          <div class="ranking-item" data-item-value="1">${element.star}</div>
        </div>
        <a class="item-third-btn" href="#!">${element.btn}</a>
      </div>
    </div>
  </div>
`;
  });

  return listSection3.insertAdjacentHTML('afterbegin', template);
}
fillList();
