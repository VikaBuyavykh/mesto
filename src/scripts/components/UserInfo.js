class UserInfo {
    constructor({userNameSelector, userInfoSelector}) {
        this._userName = document.querySelector(userNameSelector);
        this._userInfo = document.querySelector(userInfoSelector);
    }

    getUserInfo() {
        this._userValues = {
            name: this._userName.textContent,
            occupation: this._userInfo.textContent
        };
        return this._userValues;
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userInfo.textContent = data.occupation;
    }
}

export default UserInfo;