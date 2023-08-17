import { initialCards } from "../cards";
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Card from "../components/Card.js";

const editButtonElement = document.querySelector('.profile__edit-button');
const addButtonElement = document.querySelector('.profile__add-button');
const elementsContainerSelector = '.elements';
const templateElem = document.querySelector('#element');
const popupWithImgEl = new PopupWithImage('.popup_type_open-image');
const formList = Array.from(document.querySelectorAll('.popup__form'));

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

export { editButtonElement, addButtonElement, popupWithImgEl, formList, 
    cardsList, profile, editPopupElem, addPopupElem };