import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupFormElem = this._popupElem.querySelector('.popup__form');
        this._inputList = this._popupElem.querySelectorAll('.popup__form-item');
        this._buttonEl = this._popupElem.querySelector('.popup__submit-button');
        this._buttonTextEl = this._buttonEl.textContent;
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setInputValues(data) {
        this._inputList.forEach(input => {
          input.value = data[input.name];
        });
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupFormElem.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._buttonEl.textContent = "Сохранение...";
            this._handleFormSubmit(this._getInputValues(), this._buttonEl, this._buttonTextEl);
        });
    }

    close() {
        super.close();
        this._popupFormElem.reset();
    }
}

export default PopupWithForm;