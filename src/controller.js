// const { async } = require('regenerator-runtime');

const btn = document.querySelector('.btn__get--advice');
const adviceText = document.querySelector('.advice-text');
const adviceCount = document.querySelector('.advice--count');

// const renderCountry = function (data, classname = '') {
//   //classname is added to add another classname just for the neighbour country
//   const html = `
//   <article class="country ${classname}">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].symbol} ${
//     data.currencies[0].name
//   }</p>
//   </div>
//   </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

const data = async function () {
  const res = await fetch('https://api.adviceslip.com/advice');

  const data = await res.json();
  console.log(data);

    const id = `
    <h5 class="advice">
          <span class="advice--count">Advice &nbsp; #${data.slip.id}</span>
        </h5>
    `;

  const html = `
     <div>
        <p class="advice-text">"
        ${data.slip.advice}"
        </p>
     </div>
    `;
  adviceCount.innerHTML = '';
  adviceCount.innerHTML = id;
  adviceText.innerHTML = '';
  adviceText.innerHTML = html;
  //   adviceText.insertAdjacentElement('afterbegin', html);

  //   return data;
};

// data();
// console.log('het');

btn.addEventListener('click', data);
