const editButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup_type_edit');
const nameElement = document.querySelector('.profile__name');
const nameFormElement = document.querySelector('#name');
const occupationElement = document.querySelector('.profile__occupation');
const occupationFormElement = document.querySelector('#occupation');
const formElement = document.querySelector('.popup__form');
const elementTemplate = document.querySelector('#element').content;
const elementsContainer = document.querySelector('.elements');
const openImagePopupElement = document.querySelector('.popup_type_open-image');
const imagePopupElement = document.querySelector('.popup__img');
const textPopupElement = document.querySelector('.popup__text');
const addButtonElement = document.querySelector('.profile__add-button');
const addCardPopupElement = document.querySelector('.popup_type_add');
const addCardFormElement = document.querySelector('.popup__form_elements');
const nameAddCardFormElement = document.querySelector('#cardName');
const linkAddCardFormElement = document.querySelector('#cardLink');
const popupList = document.querySelectorAll('.popup');

function openPopup(popup) {
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

function createCard({name, link}) {
  const templateItem = elementTemplate.querySelector('.element').cloneNode(true);
  templateItem.querySelector('.element__img').src = link;
  templateItem.querySelector('.element__text').textContent = name;
  templateItem.querySelector('.element__like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like-button_active');
  });
  templateItem.querySelector('.element__delete-button').addEventListener('click', function() {
    templateItem.remove();
  });
  templateItem.querySelector('.element__open-button').addEventListener('click', function() {
    imagePopupElement.src = link;
    textPopupElement.textContent = name;
    openPopup(openImagePopupElement);
  });
  return templateItem;
};

editButtonElement.addEventListener('click', () => {
  openPopup(popupElement);
  nameFormElement.value = nameElement.textContent;
  occupationFormElement.value = occupationElement.textContent;
});
formElement.addEventListener('submit', handleFormSubmit);

initialCards.forEach((item) => {
  const cardElement = createCard(item);
  elementsContainer.append(cardElement);
});

addButtonElement.addEventListener('click', () => openPopup(addCardPopupElement));
addCardFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardElement = createCard({name: nameAddCardFormElement.value, link: linkAddCardFormElement.value});
    elementsContainer.prepend(cardElement);
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