import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPhoto = this._popupElement.querySelector('.popup__image');
    this._popupTitle = this._popupElement.querySelector('.popup__image-title');
  }

  open(title, link) {
    super.open();
    this._popupPhoto.src = link;
    this._popupTitle.textContent = title;
    this._popupPhoto.alt = `Фото ${title}`;
  }
}
