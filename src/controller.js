import * as model from './model.js';
import view from './View.js';

import 'core-js/stable'; // for polyfilling everything
import 'regenerator-runtime/runtime'; //for polyfilling async/await - converting to an ES5 feature
import { async } from 'regenerator-runtime';

// const btn = document.querySelector('.btn__get--advice');
// const adviceText = document.querySelector('.advice-text');
// const adviceCount = document.querySelector('.advice--count');

const controlAdvice = async function () {
  await model.loadAdvice();

  view.render(model.state.slip);
  // console.log(data);
};

// controlAdvice();

const init = function () {
  view.addHandlerRender(controlAdvice);
};
init();

// BEFORE MVC
// const data = async function () {
//   const res = await fetch('https://api.adviceslip.com/advice');

//   const data = await res.json();
// //   console.log(data);

//   const id = `
//     <h5 class="advice">
//           <span class="advice--count">Advice &nbsp; #${data.slip.id}</span>
//         </h5>
//     `;

//   const html = `
//      <div>
//         <p class="advice-text">"
//         ${data.slip.advice}"
//         </p>
//      </div>
//     `;
//   adviceCount.innerHTML = '';
//   adviceCount.innerHTML = id;
//   adviceText.innerHTML = '';
//   adviceText.innerHTML = html;
//   //   adviceText.insertAdjacentElement('afterbegin', html);

//   //   return data;
// };

// btn.addEventListener('click', data);
