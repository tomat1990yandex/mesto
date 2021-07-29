export default class Card {
  constructor({
                data,
                handleCardClick,
                handleTrashClick,
                handleLikeClick
              }, templateSelector, userId) {
    this._cardSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._idOwner = data.owner._id;
    this._cardId = data._id;
    this._likes = data.likes;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;
    this._userId = userId;
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
    this._picture = this._element.querySelector('.element__image');
    this._picture.src = this._link;
    this._picture.alt = `Фото ${this._name}`;
    this._element.querySelector('.element__title').textContent = this._name;
    this._delete = this._element.querySelector('.element__delete');
    this._like = this._element.querySelector('.element__like');

    if (this._userId !== this._idOwner) {
      this._delete.remove();
    }

    this.setLikes(this._likes);
    this._setEventListeners();

    return this._element;
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  _checkLike() {
    return this._likes.some(like => {
      return like._id === this._userId;
    });
  }

  setLikes(arr) {
    this._element.querySelector('.element__like-num').textContent = arr.length;
    this._likes = arr;
    if (this._checkLike()) {
      this._like.classList.add('element__like_active');
    } else {
      this._like.classList.remove('element__like_active');
    }
  }

  _setEventListeners() {
    this._picture.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    this._delete.addEventListener('click', () => {
      this._handleTrashClick(this._cardId, this);
    });

    this._like.addEventListener('click', () => {
      this._handleLikeClick(this._cardId, this._checkLike(), this);
    });
  }
}
