import '../pages/index.css';

import { initialCards } from "./cards.js";
import Card from "./components/Card.js";
import { validationConfig } from "./config.js";
import FormValidator from "./components/FormValidator.js";
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm';
import UserInfo from './components/UserInfo.js';

const editButtonElement = document.querySelector('.profile__edit-button');
const elementsContainerSelector = '.elements';
const addButtonElement = document.querySelector('.profile__add-button');
const templateElem = document.querySelector('#element');

function handleCardClick() {
  const popupWithImgEl = new PopupWithImage('.popup_type_open-image', this._name, this._link);
  popupWithImgEl.open();
  popupWithImgEl.setEventListeners();
}

const initialCardsList = new Section ({
  items: initialCards,
  renderer: (item) => {
      const cardElement = new Card(item, templateElem, handleCardClick);
      const cardEl = cardElement.getView();
      initialCardsList.addItem(cardEl);
  }
}, elementsContainerSelector);
initialCardsList.renderItems();

const profile = new UserInfo({
  userNameSelector: '.profile__name', 
  userInfoSelector: '.profile__occupation'
})
const editPopupElem = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: (formData) => {
    const profileObj = profile.getUserInfo();
    profileObj.name.textContent = formData.name;
    profileObj.occupation.textContent = formData.occupation;
    editPopupElem.close();
  }
})
editButtonElement.addEventListener('click', () => {
  editPopupElem.open();
  profile.setUserInfo();
})
editPopupElem.setEventListeners();

const addPopupElem = new PopupWithForm({
  popupSelector: '.popup_type_add',
  handleFormSubmit: (formData) => {
    const addCardEl = new Section({
      items: [{
        name: formData.cardName, 
        link: formData.cardLink
      }],
      renderer: (item) => {
        const card = new Card(item, templateElem, handleCardClick);
        const cardEl = card.getView();
        addCardEl.addItem(cardEl);
      }
    }, elementsContainerSelector);
    addCardEl.renderItems();
    addPopupElem.close();
  }
})
addButtonElement.addEventListener('click', () => {
  addPopupElem.open();
})
addPopupElem.setEventListeners();

const formList = Array.from(document.querySelectorAll('.popup__form'));
formList.forEach((formElem) => {
  const validationElem = new FormValidator(formElem, validationConfig);
  validationElem.enableValidation();
})