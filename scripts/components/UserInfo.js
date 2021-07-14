export default class UserInfo {
  constructor(nameSelector, aboutSelector) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
  };

  getUserInfo() {
    const user = {
      name: this._name.textContent,
      about: this._about.textContent
    };

     return user;
  };

  setUserInfo({popupName, popupProfession}) {
    this._name.textContent = popupName;
    this._about.textContent = popupProfession;

  };
};
