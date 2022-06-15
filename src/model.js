import { async } from 'regenerator-runtime';
export const state = {
  slip: {},
};

export const loadAdvice = async function () {
  try {
    const res = await fetch('https://api.adviceslip.com/advice');

    const data = await res.json();
    // console.log(data);
    state.slip = data;

    // if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    // return data;
  } catch (err) {
    console.log(err);
  }
};
