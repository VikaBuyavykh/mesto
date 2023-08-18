import './index.css';
import { editButtonElement, addButtonElement, elementsContainerSelector, templateElem, formList } from "../scripts/utils/constants.js";
import { validationConfig } from "../scripts/config.js";
import FormValidator from "../scripts/components/FormValidator.js";
import { initialCards } from "../scripts/cards.js";
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Card from "../scripts/components/Card.js";

function handleCardClick(name, link) {
  popupWithImgEl.open(name, link);
};

function createCard(item) {
  const cardElement = new Card(item, templateElem, handleCardClick);
  return cardElement.getView();
};

const cardsList = new Section ({
  items: initialCards,
  renderer: (item) => {
      const cardEl = createCard(item);
      cardsList.addItem(cardEl);
  }
}, elementsContainerSelector);

cardsList.renderItems();

const profile = new UserInfo({
  userNameSelector: '.profile__name', 
  userInfoSelector: '.profile__occupation'
});

const editPopupElem = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: (data) => {
      profile.setUserInfo(data);
      editPopupElem.close();
  }
});

editButtonElement.addEventListener('click', () => {
  editPopupElem.open();
  editPopupElem.setInputValues(profile.getUserInfo());
})

editPopupElem.setEventListeners();

const addPopupElem = new PopupWithForm({
  popupSelector: '.popup_type_add',
  handleFormSubmit: (formData) => {
    const card = createCard({
      name: formData.cardName, 
      link: formData.cardLink
    });
    cardsList.addItem(card);
    addPopupElem.close();
  }
});

addButtonElement.addEventListener('click', () => {
  addPopupElem.open();
})
addPopupElem.setEventListeners();

const popupWithImgEl = new PopupWithImage('.popup_type_open-image');

popupWithImgEl.setEventListeners();

formList.forEach((formElem) => {
  const validationElem = new FormValidator(formElem, validationConfig);
  validationElem.enableValidation();
})