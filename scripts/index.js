const closeButtonElement = document.querySelector('.popup__close-button');
const editButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
let nameElement = document.querySelector('.profile__name');
let nameFormElement = document.querySelector('#name');
let occupationElement = document.querySelector('.profile__occupation');
let occupationFormElement = document.querySelector('#occupation');
let formElement = document.querySelector('.popup__form');

function handleClickOpen() {
    popupElement.classList.add('popup_opened');
    nameFormElement.value = nameElement.textContent;
    occupationFormElement.value = occupationElement.textContent;
};

function handleClickClose() {
    popupElement.classList.remove('popup_opened');
};

editButtonElement.addEventListener('click', handleClickOpen);
closeButtonElement.addEventListener('click', handleClickClose);

function handleFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = nameFormElement.value;
    let occupationInput = occupationFormElement.value;
    nameElement.textContent = nameInput;
    occupationElement.textContent = occupationInput;
    popupElement.classList.remove('popup_opened');
};

formElement.addEventListener('submit', handleFormSubmit);
