import Popup from "./Popup.js";

class ConfirmPopup extends Popup {
    constructor({popupSelector, handleClick}) {
        super(popupSelector);
        this._handleClick = handleClick;
        this._confirmButton = this._popupElem.querySelector('.popup__submit-button');
        this._buttonTextElem =this._confirmButton.textContent;
    }

    activateDeletion() {
        this._confirmButton.textContent = 'Сохранение...';
        this._handleClick(this._card, this._id, this._confirmButton, this._buttonTextElem);
    }

    deliverData(card, id) {
        this._card = card;
        this._id = id;
    }
}

export default ConfirmPopup;