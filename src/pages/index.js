import './index.css';
import { editButtonElement, addButtonElement, confirmButton, elementsContainerSelector, 
  templateElem, avatarElem, formList } from "../scripts/utils/constants.js";
import { validationConfig } from "../scripts/config.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Card from "../scripts/components/Card.js";
import Api from '../scripts/components/Api.js';
import ConfirmPopup from '../scripts/components/ConfirmPopup.js';

const profile = new UserInfo({
  userNameSelector: '.profile__name', 
  userInfoSelector: '.profile__occupation',
  userAvatarSelector: '.profile__avatar',
  userId: ''
});

function createCard(item) {
  const cardElement = new Card(item, templateElem, handleCardClick, userData, confirmPopup, setLike);
  return cardElement.getView();
};

function handleCardClick(name, link) {
  popupWithImgEl.open(name, link);
};

function setLike(id, likeElem, numberElem) {
  if (!likeElem.classList.contains('element__like-button_active')) {
    api.likeCard(id)
        .then((data) => {
            likeElem.classList.add('element__like-button_active');
            numberElem.textContent = data.likes.length;
        })
        .catch(console.error)
} else {
    api.dislikeCard(id)
        .then((data) => {
            likeElem.classList.remove('element__like-button_active');
            numberElem.textContent = data.likes.length;
        })
        .catch(console.error)
}}

export const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-74/",
  headers:{
    "authorization": "8ee087a1-574b-4653-9d38-cba130f24935",
    "Content-Type": "application/json"
  }
});

let userData;

const cardsList = new Section({
  renderer: (item) => {
    const cardEl = createCard(item);
    cardsList.addItem(cardEl);
    }
}, elementsContainerSelector);

Promise.all([api.getProfile(), api.getCards()])
  .then(([profileData, cardsData]) => {
    profile.setUserInfo(profileData);
    userData = profileData;
    cardsList.renderItems(cardsData);
  })
  .catch(console.error)

const editPopupElem = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: (data, button, text) => {
    api.editProfileInfo({ name: data.name, about: data.occupation })  
      .then((data) => {
        profile.setUserInfo(data);
        editPopupElem.close();
      })
      .catch(console.error)
      .finally(() => {
        button.textContent = text;
      })      
  }
});

editButtonElement.addEventListener('click', () => {
  editPopupElem.open();
  editPopupElem.setInputValues(profile.getUserInfo());
});

editPopupElem.setEventListeners();

const addPopupElem = new PopupWithForm({
  popupSelector: '.popup_type_add',
  handleFormSubmit: (formData, button, text) => {
    api.addCard({ name: formData.cardName, link: formData.cardLink })
      .then((formData) => {
        const card = createCard({
          name: formData.name, 
          link: formData.link,
          _id: formData._id,
          likes: [],
          owner: formData.owner
        });
        cardsList.addNewItem(card);
        addPopupElem.close();
      })
      .catch(console.error)
      .finally(() => {
        button.textContent = text;
      })   
  }
});

addButtonElement.addEventListener('click', () => {
  addPopupElem.open();
});

addPopupElem.setEventListeners();

export const confirmPopup = new ConfirmPopup({
  popupSelector: '.popup_type_delete',
  handleClick: (card, id, button, text) => {
      api.deleteCard(id)
          .then(() => {
            card.remove();
            card = null;
            confirmPopup.close();              
          })
          .catch(console.error)
          .finally(() => {
            button.textContent = text;
          })      
  }
})

confirmButton.addEventListener('click', () => {
  confirmPopup.activateDeletion();
});

confirmPopup.setEventListeners();

const popupWithImgEl = new PopupWithImage('.popup_type_open-image');

popupWithImgEl.setEventListeners();

const updatePopupElem = new PopupWithForm({
  popupSelector: '.popup_type_renew',
  handleFormSubmit: (data, button, text) => {
    api.updateAvatar({ avatar: data.link })
      .then((data) => {
        profile.setUserInfo(data);
        updatePopupElem.close();
      })
      .catch(console.error)
      .finally(() => {
        button.textContent = text;
      })
  }
});

avatarElem.addEventListener('click', () => {
  updatePopupElem.open();
});

updatePopupElem.setEventListeners();

formList.forEach((formElem) => {
  const validationElem = new FormValidator(formElem, validationConfig);
  validationElem.enableValidation();
})