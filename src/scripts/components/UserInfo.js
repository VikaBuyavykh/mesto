class UserInfo {
    constructor({userNameSelector, userInfoSelector, userAvatarSelector, userId}) {
        this._userName = document.querySelector(userNameSelector);
        this._userInfo = document.querySelector(userInfoSelector);
        this._userAvatar = document.querySelector(userAvatarSelector);
        this._userId = userId;
    }

    getUserInfo() {
        this._userValues = {
            name: this._userName.textContent,
            occupation: this._userInfo.textContent,
        };
        return this._userValues;
    }

    setUserInfo({ name, about, avatar, _id }) {
        this._userName.textContent = name;
        this._userInfo.textContent = about;
        this._userAvatar.style.backgroundImage = `url(${avatar})`;
        this._userId = _id;
    }
}

export default UserInfo;