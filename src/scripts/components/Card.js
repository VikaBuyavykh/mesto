import { api, confirmPopup } from "../../pages/index.js";

class Card {
    constructor({name, link, _id, likes, owner}, templateElem, handleCardClick, userData) {
        this._name = name;
        this._link = link;
        this._id = _id;
        this._likes = likes;
        this._owner = owner;
        this._template = templateElem;
        this._handleCardClick = handleCardClick;
        this._userData = userData;
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
        link.alt = this._name;

        this._likeElem = this._newCard.querySelector('.element__like-button');
        this._number = this._newCard.querySelector('.element__number-of-likes');
        this._deleteElem = this._newCard.querySelector('.element__delete-button');

        this._number.textContent = this._likes.length;
        if (this._likes.some(item => item.name === this._userData.name)) {
            this._likeElem.classList.add('element__like-button_active');
        };
        if (this._owner.name !== this._userData.name) {
            this._deleteElem.remove();
        }
            
    }

    _handleClickDelete() {
        confirmPopup.open();
        confirmPopup.setEventListeners(this._newCard, this._id);
    }

    _handleClickLike() {
        if (!this._likeElem.classList.contains('element__like-button_active')) {
            api.likeCard(this._id)
                .then((data) => {
                    this._likeElem.classList.add('element__like-button_active');
                    this._number.textContent = data.likes.length;
                })
        } else {
            api.dislikeCard(this._id)
                .then((data) => {
                    this._likeElem.classList.remove('element__like-button_active');
                    this._number.textContent = data.likes.length;
                })
        }
    }

    _handleClickOpen() {
        this._handleCardClick(this._name, this._link);
    }

    _setListeners() {
        this._deleteElem.addEventListener('click', () => {
            this._handleClickDelete();
        });

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