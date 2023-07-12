const VALIDATION_CONFIG = {
    errorInputSelector: 'popup__form-item_type_error',
    errorSelctor: 'popup__error-message_active',
    inputSelector: 'popup__form-item',
    submitButtonSelector: 'popup__submit-button',
    inactiveSubmitButtonSelector: 'popup__submit-button_inactive',
    formSelector: 'popup__form'
};

function showError(formElem, inputElement, config) {
    const errorElement = formElem.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.add(`${config.errorInputSelector}`);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(`${config.errorSelctor}`);
};

function hideError(formElem, inputElement, config) {
    const errorElement = formElem.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.remove(`${config.errorInputSelector}`);
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
    const inputList = Array.from(formElem.querySelectorAll(`.${config.inputSelector}`));
    const buttonElement = formElem.querySelector(`.${config.submitButtonSelector}`);
    toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElem, inputElement, config);
            toggleButtonState(inputList, buttonElement, config);
        });
    })
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
}; 

function toggleButtonState(inputList, buttonElement, config) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(`${config.inactiveSubmitButtonSelector}`);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(`${config.inactiveSubmitButtonSelector}`);
      buttonElement.removeAttribute('disabled');
    }
};

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(`.${config.formSelector}`));
    formList.forEach((formElem) => {
        setEventListeners(formElem, config);
    });
};

enableValidation(VALIDATION_CONFIG);