class Popup {
    constructor(popupSelector) {
        this._popupElem = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
  
    open() {
        this._popupElem.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
  
    close() {
        this._popupElem.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
  
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        };
    }
  
    setEventListeners() {
        this._popupElem.addEventListener('click', (evt) => {
            const targetClassList = evt.target.classList;
            if (targetClassList.contains('popup') || targetClassList.contains('popup__close-button')) {
              this.close();
            };
        });
    }
}

export default Popup;