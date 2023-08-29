import Popup from "./Popup.js";

class ConfirmPopup extends Popup {
    constructor({popupSelector, handleClick}) {
        super(popupSelector);
        this._handleClick = handleClick;
        this._confirmButton = this._popupElem.querySelector('.popup__submit-button');
        this._buttonTextElem =this._confirmButton.textContent;
    }

    setEventListeners(card, id) {
        super.setEventListeners();
        this._confirmButton.addEventListener('click', () => {
            this._confirmButton.textContent = 'Сохранение...';
            this._handleClick(card, id, this._confirmButton, this._buttonTextElem);
        });
    }
}

export default ConfirmPopup;