import { openPopup, openPopupElem } from "./index.js";

class Card {
    constructor({name, link}, templateElem) {
        this._name = name;
        this._link = link;
        this._template = templateElem;
    }

    _getTemplate() {
        const newTemplate = this._template.content
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
        this._newCard = null;
    }

    _handleClickLike() {
        this._likeElem.classList.toggle('element__like-button_active');
    }

    _handleClickOpen() {
        const imgPopupElem = document.querySelector('.popup__img');
        imgPopupElem.src = this._link;

        const textPopupElem = document.querySelector('.popup__text');
        textPopupElem.textContent = this._name;

        openPopup(openPopupElem);
    }

    _setListeners() {
        const deleteElem = this._newCard.querySelector('.element__delete-button');
        deleteElem.addEventListener('click', () => {
            this._handleClickDelete();
        });

        this._likeElem = this._newCard.querySelector('.element__like-button');
        this._likeElem.addEventListener('click', (evt) => {
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
