import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formConfirm = this._popupElement.querySelector('.popup__form');
  }

  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formConfirm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback()
    });
  }
}
