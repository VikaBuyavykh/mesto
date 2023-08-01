/*

function showError(formElem, inputElement, config) {
    const errorElement = formElem.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.add(`${config.errorInputClass}`);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(`${config.errorSelctor}`);
};

function hideError(formElem, inputElement, config) {
    const errorElement = formElem.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.remove(`${config.errorInputClass}`);
    errorElement.textContent = '';
    errorElement.classList.remove(`${config.errorSelctor}`);
};

function isValid(formElem, inputElement, config) {
    if (!inputElement.validity.valid) {
        showError(formElem, inputElement, config);
    } else {
        hideError(formElem, inputElement, config);
    }
};

function setEventListeners(formElem, config) {
    const inputList = Array.from(formElem.querySelectorAll(`.${config.inputClass}`));
    const buttonElement = formElem.querySelector(`.${config.submitButtonClass}`);
    toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElem, inputElement, config);
            toggleButtonState(inputList, buttonElement, config);
        });
    });
    formElem.addEventListener('reset', () => { disableSubmitButton(buttonElement, config) });
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
}; 

function enableSubmitButton(buttonElement, config) {
    buttonElement.classList.remove(`${config.inactiveSubmitButtonClass}`);
    buttonElement.removeAttribute('disabled');
};

function disableSubmitButton(buttonElement, config) {
    buttonElement.classList.add(`${config.inactiveSubmitButtonClass}`);
    buttonElement.setAttribute('disabled', true);
}

function toggleButtonState(inputList, buttonElement, config) {
    if (hasInvalidInput(inputList)) {
        disableSubmitButton(buttonElement, config);
    } else {
        enableSubmitButton(buttonElement, config);
    };
};

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(`.${config.formClass}`));
    formList.forEach((formElem) => {
        setEventListeners(formElem, config);
    });
};

enableValidation(validationConfig);

*/


/*

class FormValidator {
    constructor(formElem, config) {
        this._formElem = formElem;
        this._config = config;
    }

    _showError(formElem, inputElement, config) {
        const errorElement = formElem.querySelector(`#error-${inputElement.id}`);
        inputElement.classList.add(`${config.errorInputClass}`);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(`${config.errorSelctor}`);
    }

    _hideError(formElem, inputElement, config) {
        const errorElement = formElem.querySelector(`#error-${inputElement.id}`);
        inputElement.classList.remove(`${config.errorInputClass}`);
        errorElement.textContent = '';
        errorElement.classList.remove(`${config.errorSelctor}`);
    }

    _isValid(formElem, inputElement, config) {
        if (!inputElement.validity.valid) {
            this._showError(formElem, inputElement, config);
        } else {
            this._hideError(formElem, inputElement, config);
        }
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _disableSubmitButton(buttonElement, config) {
        buttonElement.classList.add(`${config.inactiveSubmitButtonClass}`);
        buttonElement.setAttribute('disabled', true);
    }

    _enableSubmitButton(buttonElement, config) {
        buttonElement.classList.remove(`${config.inactiveSubmitButtonClass}`);
        buttonElement.removeAttribute('disabled');
    }

    _toggleButtonState(inputList, buttonElement, config) {
        if (this._hasInvalidInput(inputList)) {
            this._disableSubmitButton(buttonElement, config);
        } else {
            this._enableSubmitButton(buttonElement, config);
        };
    }

    _setEventListeners(formElem, config) {
        const inputList = Array.from(formElem.querySelectorAll(`.${config.inputClass}`));
        const buttonElement = formElem.querySelector(`.${config.submitButtonClass}`);
        this._toggleButtonState(inputList, buttonElement, config);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(formElem, inputElement, config);
                this._toggleButtonState(inputList, buttonElement, config);
            });
        });
        formElem.addEventListener('reset', () => { this._disableSubmitButton(buttonElement, config) });
    }

    enableValidation(formElem, config) {
        this._setEventListeners(formElem, config);
    }
}

export default FormValidator;

*/


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

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _disableSubmitButton(buttonElement) {
        buttonElement.classList.add(`${this._config.inactiveSubmitButtonClass}`);
        buttonElement.setAttribute('disabled', true);
    }

    _enableSubmitButton(buttonElement) {
        buttonElement.classList.remove(`${this._config.inactiveSubmitButtonClass}`);
        buttonElement.removeAttribute('disabled');
    }

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            this._disableSubmitButton(buttonElement);
        } else {
            this._enableSubmitButton(buttonElement);
        };
    }

    _setEventListeners() {
        const inputList = Array.from(this._formElem.querySelectorAll(`.${this._config.inputClass}`));
        const buttonElement = this._formElem.querySelector(`.${this._config.submitButtonClass}`);
        this._toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
        this._formElem.addEventListener('reset', () => { this._disableSubmitButton(buttonElement) });
    }

    enableValidation() {
        this._setEventListeners();
    }
}

export default FormValidator;