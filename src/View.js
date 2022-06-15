class View {
  _adviceText = document.querySelector('.advice-text');
  _adviceCount = document.querySelector('.advice--count');
  _btn = document.querySelector('.btn__get--advice');

  _data;

  render(data) {
    this._data = data;
    console.log(this._data);

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
    this._adviceCount.innerHTML = '';
    this._adviceCount.innerHTML = id;
    this._adviceText.innerHTML = '';
    this._adviceText.innerHTML = html;
  }
  addHandlerRender(handler) {
    this._btn.addEventListener('click', handler);
  }
}

export default new View();
