import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector, name, link) {
        super(popupSelector);
        this._popupElem = document.querySelector(popupSelector);
        this._name = name;
        this._link = link;
    }

    open() {
        const imgPopupElem = document.querySelector('.popup__img');
        imgPopupElem.src = this._link;

        const textPopupElem = document.querySelector('.popup__text');
        textPopupElem.textContent = this._name;
        super.open();
    }
}

export default PopupWithImage;