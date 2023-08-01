import { openPopup } from "./index.js";

class Card {
    constructor({name, link}) {
        this._name = name;
        this._link = link;
    }

    _getTemplate() {
        const newTemplate = document
        .querySelector('#element').content
        .querySelector('.element').cloneNode(true);

        return newTemplate;
    }

    _setData() {
        const name = this._newCard.querySelector('.element__text');
        name.textContent = this._name;

        const link = this._newCard.querySelector('.element__img');
        link.src = this._link;
    }

    _handleClickDelete() {
        this._newCard.remove();
    }

    _handleClickLike(evt) {
        evt.target.classList.toggle('element__like-button_active');
    }

    _handleClickOpen() {
        const imgPopupElem = document.querySelector('.popup__img');
        imgPopupElem.src = this._link;

        const textPopupElem = document.querySelector('.popup__text');
        textPopupElem.textContent = this._name;

        const theWholePopupElem = document.querySelector('.popup_type_open-image');
        openPopup(theWholePopupElem);
    }

    _setListeners() {
        const deleteElem = this._newCard.querySelector('.element__delete-button');
        deleteElem.addEventListener('click', () => {
            this._handleClickDelete();
        });

        const likeElem = this._newCard.querySelector('.element__like-button');
        likeElem.addEventListener('click', (evt) => {
            this._handleClickLike(evt);
        });

        const openElem = this._newCard.querySelector('.element__open-button');
        openElem.addEventListener('click', () => {
            this._handleClickOpen();
        });
    }

    getView() {
        this._newCard = this._getTemplate();
        this._setData();
        this._setListeners();

        return this._newCard;
    }
}

export default Card;