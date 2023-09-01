class Card {
    constructor({name, link, _id, likes, owner}, templateElem, handleCardClick, userData, confirmPopup, handleLike, handleDislike ) {
        this.name = name;
        this.link = link;
        this.id = _id;
        this._likes = likes;
        this._owner = owner;
        this._template = templateElem;
        this._handleCardClick = handleCardClick;
        this._userData = userData;
        this._confirmPopup = confirmPopup;
        this._handleLike = handleLike;
        this._handleDislike = handleDislike;
    }

    _getTemplate() {
        const newTemplate = this._template.content
        .querySelector('.element').cloneNode(true);

        return newTemplate;
    }

    _setData() {
        const name = this.newCard.querySelector('.element__text');
        name.textContent = this.name;

        const link = this.newCard.querySelector('.element__img');
        link.src = this.link;
        link.alt = this.name;

        this.likeElem = this.newCard.querySelector('.element__like-button');
        this.number = this.newCard.querySelector('.element__number-of-likes');
        this._deleteElem = this.newCard.querySelector('.element__delete-button');

        this.number.textContent = this._likes.length;
        if (this._likes.some(item => item.name === this._userData.name)) {
            this.likeElem.classList.add('element__like-button_active');
        };
        if (this._owner.name !== this._userData.name) {
            this._deleteElem.remove();
        }
            
    }

    _handleClickDelete() {
        this._confirmPopup.open();
        this._confirmPopup.deliverData(this);
    }

    _handleClickLike() {
        if (!this.likeElem.classList.contains('element__like-button_active')) {
            this._handleLike(this);
        } else {
            this._handleDislike(this);
    }}

    _handleClickOpen() {
        this._handleCardClick(this);
    }

    _setListeners() {
        this._deleteElem.addEventListener('click', () => {
            this._handleClickDelete();
        });

        this.likeElem.addEventListener('click', () => {
            this._handleClickLike();
        });

        const openElem = this.newCard.querySelector('.element__open-button');
        openElem.addEventListener('click', () => {
            this._handleClickOpen();
        });
    }

    getView() {
        this.newCard = this._getTemplate();
        this._setData();
        this._setListeners();

        return this.newCard;
    }
}

export default Card;