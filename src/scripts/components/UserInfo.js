class UserInfo {
    constructor({userNameSelector, userInfoSelector}) {
        this._userName = document.querySelector(userNameSelector);
        this._userInfo = document.querySelector(userInfoSelector);
    }

    getUserInfo() {
        this._userValues = {
            name: this._userName,
            occupation: this._userInfo
        };
        return this._userValues;
    }

    setUserInfo() {
        const userValues = this.getUserInfo();
        document.querySelector('#name').value = userValues.name.textContent;
        document.querySelector('#occupation').value = userValues.occupation.textContent;
    }
}

export default UserInfo;