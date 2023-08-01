import { initialCards } from "./cards.js";
import Card from "./card.js";
import { validationConfig } from "./config.js";
import FormValidator from "./validate.js";

const editButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup_type_edit');
const nameElement = document.querySelector('.profile__name');
const nameFormElement = document.querySelector('#name');
const occupationElement = document.querySelector('.profile__occupation');
const occupationFormElement = document.querySelector('#occupation');
const formElement = document.querySelector('.popup__form');
const elementsContainer = document.querySelector('.elements');
const addButtonElement = document.querySelector('.profile__add-button');
const addCardPopupElement = document.querySelector('.popup_type_add');
const addCardFormElement = document.querySelector('.popup__form_elements');
const nameAddCardFormElement = document.querySelector('#cardName');
const linkAddCardFormElement = document.querySelector('#cardLink');
const popupList = document.querySelectorAll('.popup');

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscape);
};

function closePopupByEscape(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  };
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  const nameInput = nameFormElement.value;
  const occupationInput = occupationFormElement.value;
  nameElement.textContent = nameInput;
  occupationElement.textContent = occupationInput;
  closePopup(popupElement);
};

editButtonElement.addEventListener('click', () => {
  openPopup(popupElement);
  nameFormElement.value = nameElement.textContent;
  occupationFormElement.value = occupationElement.textContent;
});
formElement.addEventListener('submit', handleFormSubmit);

initialCards.forEach((item) => {
  const cardElement = new Card(item);
  elementsContainer.append(cardElement.getView());
});

addButtonElement.addEventListener('click', () => openPopup(addCardPopupElement));
addCardFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardElement = new Card({name: nameAddCardFormElement.value, link: linkAddCardFormElement.value});
    elementsContainer.prepend(cardElement.getView());
    addCardFormElement.reset();
    closePopup(addCardPopupElement);
});

popupList.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    const targetClassList = evt.target.classList;
    if (targetClassList.contains('popup') || targetClassList.contains('popup__close-button')) {
      closePopup(popup);
    };
  });
});

/*const formList = Array.from(document.querySelectorAll('.popup__form'));
formList.forEach((formElem) => {
  const validationElem = new FormValidator;
  validationElem.enableValidation(formElem, validationConfig);
})*/

const formList = Array.from(document.querySelectorAll('.popup__form'));
formList.forEach((formElem) => {
  const validationElem = new FormValidator(formElem, validationConfig);
  validationElem.enableValidation();
})