import './index.css';
import { editButtonElement, addButtonElement, popupWithImgEl, formList, 
  cardsList, profile, editPopupElem, addPopupElem } from "../scripts/utils/constants.js";
import { validationConfig } from "../scripts/config.js";
import FormValidator from "../scripts/components/FormValidator.js";

cardsList.renderItems();

popupWithImgEl.setEventListeners();

editButtonElement.addEventListener('click', () => {
  editPopupElem.open();
  editPopupElem.setInputValues(profile.getUserInfo());
})
editPopupElem.setEventListeners();

addButtonElement.addEventListener('click', () => {
  addPopupElem.open();
})
addPopupElem.setEventListeners();

formList.forEach((formElem) => {
  const validationElem = new FormValidator(formElem, validationConfig);
  validationElem.enableValidation();
})