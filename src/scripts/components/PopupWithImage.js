import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imgPopupElem = document.querySelector('.popup__img');
        this._textPopupElem = document.querySelector('.popup__text');
    }

    open(name, link) {
        this._imgPopupElem.src = link;
        this._imgPopupElem.alt = name;
        this._textPopupElem.textContent = name;
        super.open();
    }
}

export default PopupWithImage;