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
        this._handleClick(this);
    }

    deliverData(card) {
        this._card = card._newCard;
        this._id = card._id;
    }
}

export default ConfirmPopup;