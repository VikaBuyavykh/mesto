import Popup from "./Popup.js";

class ConfirmPopup extends Popup {
    constructor({popupSelector, handleClick}) {
        super(popupSelector);
        this._handleClick = handleClick;
        this._confirmButton = this._popupElem.querySelector('.popup__submit-button');
    }

    setEventListeners(card, id) {
        super.setEventListeners();
        this._confirmButton.addEventListener('click', () => {
            this._handleClick(card, id);
        });
    }
}

export default ConfirmPopup;