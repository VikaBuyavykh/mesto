const editButtonElement = document.querySelector('.profile__edit-button');
const addButtonElement = document.querySelector('.profile__add-button');
const confirmButton = document.querySelector('.popup__confirm-button');
const elementsContainerSelector = '.elements';
const templateElem = document.querySelector('#element');
const formList = Array.from(document.querySelectorAll('.popup__form'));
const avatarElem = document.querySelector('.profile__avatar');

export { editButtonElement, addButtonElement, confirmButton, elementsContainerSelector, 
    templateElem, avatarElem, formList };