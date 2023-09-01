import Popup from "./Popup.js";

class ConfirmPopup extends Popup {
    constructor({popupSelector, handleClick}) {
        super(popupSelector);
        this._handleClick = handleClick;
        this.confirmButton = this._popupElem.querySelector('.popup__submit-button');
        this.buttonTextElem =this.confirmButton.textContent;
    }

    activateDeletion() {
        this.confirmButton.textContent = 'Сохранение...';
        this._handleClick(this);
    }

    deliverData(card) {
        this.card = card.newCard;
        this.id = card.id;
    }
}

export default ConfirmPopup;