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
};

function handleClickClose() {
    popupElement.classList.remove('popup_opened');
    };

function changeText() {
    nameFormElement.value = nameElement.textContent;
    occupationFormElement.value = occupationElement.textContent;
};

editButtonElement.addEventListener('click', handleClickOpen);
editButtonElement.addEventListener('click', changeText);
closeButtonElement.addEventListener('click', handleClickClose);

function handleFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = nameFormElement.value;
    let occupationInput = occupationFormElement.value;
    nameElement.textContent = nameInput;
    occupationElement.textContent = occupationInput;
};

formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', handleClickClose);
