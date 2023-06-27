const closeButtonElement = document.querySelector('.popup__close-button');
const editButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup_type_edit');
let nameElement = document.querySelector('.profile__name');
let nameFormElement = document.querySelector('#popupFormName');
let occupationElement = document.querySelector('.profile__occupation');
let occupationFormElement = document.querySelector('#popupFormOccupation');
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

// Массив карточек "из коробки"

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

// Отображаем массив с карточками на странице

const elementTemplate = document.querySelector('#element').content;
const elementsContainer = document.querySelector('.elements');

for (let i = 0; i < initialCards.length; i += 1) {
    const templateItem = elementTemplate.querySelector('.element').cloneNode(true);
    templateItem.querySelector('.element__img').src = initialCards[i].link;
    templateItem.querySelector('.element__text').textContent = initialCards[i].name;
    elementsContainer.append(templateItem);
};

// Создаем попап для добавления карточек

const addButtonElement = document.querySelector('.profile__add-button');
const addCardPopupElement = document.querySelector('.popup_type_add');
const addPopupCloseButtonElement = document.querySelector('.popup__close-button_add-card-form');
addButtonElement.addEventListener('click', () => {
    addCardPopupElement.classList.add('popup_opened');
});
addPopupCloseButtonElement.addEventListener('click', () => {
    addCardPopupElement.classList.remove('popup_opened');
});

// Задаем возможность лайкнуть карточку

const likeButtonElements = document.querySelectorAll('.element__like-button');
const handleClickLike = function(evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('element__like-button_active');
};
likeButtonElements.forEach(function(item) {
    item.addEventListener('click', handleClickLike);  
});

// Задаем возможность удалить карточку

const deleteButtonElement = document.querySelectorAll('.element__delete-button');
const handleClickDelete = function(evt) {
    const eventTarget = evt.target;
    eventTarget.closest('.element').remove();
};
deleteButtonElement.forEach(function(item) {
    item.addEventListener('click', handleClickDelete);
});

// Задаем возможность открывать попап с картинкой

const openImagePopupElement = document.querySelector('.popup_type_open-image');
const openImageButtonElement = document.querySelectorAll('.element__open-button');

const handleClickWatchCloser = function (evt) {
  evt.preventDefault();
  const eventTarget = evt.target;
  openImagePopupElement.querySelector('.popup__img').src = eventTarget.src;
  openImagePopupElement.querySelector('.popup__text').textContent = eventTarget.closest('.element').querySelector('.element__text').textContent;
  openImagePopupElement.classList.add('popup_opened');
};

openImageButtonElement.forEach(function(item) {
  item.addEventListener('click', handleClickWatchCloser);
});
const openImageCloseButtonElement = document.querySelector('.popup__close-button_open-image-element');
openImageCloseButtonElement.addEventListener('click', () => {
  openImagePopupElement.classList.remove('popup_opened');
});

// Задаем возможность добавлять карточки

let addCardFormElement = document.querySelector('.popup__form_elements');
let nameAddCardFormElement = document.querySelector('#addCardPopupFormName');
let linkAddCardFormElement = document.querySelector('#addCardPopupFormLink');
addCardFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    initialCards.push({name: nameAddCardFormElement.value, link: linkAddCardFormElement.value});
    const templateItem = elementTemplate.querySelector('.element').cloneNode(true);
    templateItem.querySelector('.element__img').src = initialCards[initialCards.length - 1].link;
    templateItem.querySelector('.element__text').textContent = initialCards[initialCards.length - 1].name;
    templateItem.querySelector('.element__like-button').addEventListener('click', handleClickLike);
    templateItem.querySelector('.element__delete-button').addEventListener('click', handleClickDelete);
    templateItem.querySelector('.element__open-button').addEventListener('click', handleClickWatchCloser);
    elementsContainer.prepend(templateItem);
    nameAddCardFormElement.value = "";
    linkAddCardFormElement.value = "";
    addCardPopupElement.classList.remove('popup_opened');
});