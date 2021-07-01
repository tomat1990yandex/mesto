import {popupImage, popupImageTitle, popupElement, popupCloseButton} from './index.js';

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').src = `${this._link}`;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }


  _handleOpenPopup() {
    popupImage.src = this._link;
    popupImageTitle.textContent = this._name;
    popupElement.classList.add('popup_opened');
  }

  _handleClosePopup() {
    popupElement.classList.remove('popup_opened');
  }

  _handleDelete() {
    this._element.remove();
  }

  _handleLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleOpenPopup();
    });

    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });

    document.addEventListener('keydown', (evt) => {
      (evt.key === 'Escape');
      this._handleClosePopup();
    });

    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLike();
    });

    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleDelete();
    });
  }
}

export default Card;
