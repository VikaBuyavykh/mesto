const validationConfig = {
    errorInputClass: 'popup__form-item_type_error',
    errorSelctor: 'popup__error-message_active',
    inputClass: 'popup__form-item',
    submitButtonClass: 'popup__submit-button',
    inactiveSubmitButtonClass: 'popup__submit-button_inactive',
    formClass: 'popup__form'
};

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