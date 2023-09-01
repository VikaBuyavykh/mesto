import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imgPopupElem = this._popupElem.querySelector('.popup__img');
        this._textPopupElem = this._popupElem.querySelector('.popup__text');
    }

    open(card) {
        this._imgPopupElem.src = card.link;
        this._imgPopupElem.alt = card.name;
        this._textPopupElem.textContent = card.name;
        super.open();
    }
}

export default PopupWithImage;