export default class Card {
  constructor({name, link, handleCardClick}, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._img = this._element.querySelector('.element__image');
    this._element.querySelector('.element__title').textContent = this._name;
    this._setEventListeners();
    this._img.src = this._link
    this._img.alt = this._name

    return this._element;
  }

  _handleDelete() {
    this._element.remove();
  }

  _handleLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick();
    });

    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLike();
    });

    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleDelete();
    });
  }
}
