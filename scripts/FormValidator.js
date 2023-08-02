class FormValidator {
    constructor(formElem, config) {
        this._formElem = formElem;
        this._config = config;
    }

    _showError(inputElement) {
        const errorElement = this._formElem.querySelector(`#error-${inputElement.id}`);
        inputElement.classList.add(`${this._config.errorInputClass}`);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(`${this._config.errorSelctor}`);
    }

    _hideError(inputElement) {
        const errorElement = this._formElem.querySelector(`#error-${inputElement.id}`);
        inputElement.classList.remove(`${this._config.errorInputClass}`);
        errorElement.textContent = '';
        errorElement.classList.remove(`${this._config.errorSelctor}`);
    }

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showError(inputElement);
        } else {
            this._hideError(inputElement);
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _disableSubmitButton() {
        this._buttonElement.classList.add(`${this._config.inactiveSubmitButtonClass}`);
        this._buttonElement.setAttribute('disabled', true);
    }

    _enableSubmitButton() {
        this._buttonElement.classList.remove(`${this._config.inactiveSubmitButtonClass}`);
        this._buttonElement.removeAttribute('disabled');
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableSubmitButton();
        } else {
            this._enableSubmitButton();
        };
    }

    _setEventListeners() {
        this._inputList = Array.from(this._formElem.querySelectorAll(`.${this._config.inputClass}`));
        this._buttonElement = this._formElem.querySelector(`.${this._config.submitButtonClass}`);
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonState();
            });
        });
        this._formElem.addEventListener('reset', () => { this._disableSubmitButton() });
    }

    enableValidation() {
        this._setEventListeners();
    }
}

export default FormValidator;