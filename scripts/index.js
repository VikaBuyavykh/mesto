// Попап редактирования профиля

const closeButtonElement = document.querySelector('.popup__close-button');
const editButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup_type_edit');
const nameElement = document.querySelector('.profile__name');
const nameFormElement = document.querySelector('#popupFormName');
const occupationElement = document.querySelector('.profile__occupation');
const occupationFormElement = document.querySelector('#popupFormOccupation');
const formElement = document.querySelector('.popup__form');

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
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
closeButtonElement.addEventListener('click', () => closePopup(popupElement));
formElement.addEventListener('submit', handleFormSubmit);

// Отображаем исходный массив карточек

const elementTemplate = document.querySelector('#element').content;
const elementsContainer = document.querySelector('.elements');
const openImagePopupElement = document.querySelector('.popup_type_open-image');

function createCard({name, link}) {
  const templateItem = elementTemplate.querySelector('.element').cloneNode(true);
  templateItem.querySelector('.element__img').src = link;
  templateItem.querySelector('.element__text').textContent = name;
  templateItem.querySelector('.element__like-button').addEventListener('click', function(evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('element__like-button_active');
  });
  templateItem.querySelector('.element__delete-button').addEventListener('click', function(evt) {
    const eventTarget = evt.target;
    eventTarget.closest('.element').remove();
  });
  templateItem.querySelector('.element__open-button').addEventListener('click', function(evt) {
    const eventTarget = evt.target;
    openImagePopupElement.querySelector('.popup__img').src = eventTarget.src;
    openImagePopupElement.querySelector('.popup__text').textContent = eventTarget.closest('.element').querySelector('.element__text').textContent;
    openPopup(openImagePopupElement);
    openImagePopupElement.querySelector('.popup__close-button_open-image-element').addEventListener('click', () => closePopup(openImagePopupElement));
    });
  return templateItem;
};

initialCards.forEach((item) => {
  const cardElement = createCard(item);
  elementsContainer.append(cardElement);
});

// Реализуем возможность добавления карточек

const addButtonElement = document.querySelector('.profile__add-button');
const addCardPopupElement = document.querySelector('.popup_type_add');
const addPopupCloseButtonElement = document.querySelector('.popup__close-button_add-card-form');
const addCardFormElement = document.querySelector('.popup__form_elements');
const nameAddCardFormElement = document.querySelector('#addCardPopupFormName');
const linkAddCardFormElement = document.querySelector('#addCardPopupFormLink');

addButtonElement.addEventListener('click', () => openPopup(addCardPopupElement));
addPopupCloseButtonElement.addEventListener('click', () => closePopup(addCardPopupElement));
addCardFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    initialCards.push({name: nameAddCardFormElement.value, link: linkAddCardFormElement.value});
    const cardElement = createCard(initialCards[initialCards.length - 1]);
    elementsContainer.prepend(cardElement);
    nameAddCardFormElement.value = "";
    linkAddCardFormElement.value = "";
    closePopup(addCardPopupElement);
});