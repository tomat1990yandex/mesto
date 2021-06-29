const initialCards = [
  {
    name: 'Челябинск',
    link: 'https://images.unsplash.com/photo-1617386396687-fba8361df419?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    name: 'Екатеринбург',
    link: 'https://images.unsplash.com/photo-1591389662006-e4ffc8c9708e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    name: 'Омск',
    link: 'https://images.unsplash.com/photo-1558708103-b5f79ddcd646?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
  },
  {
    name: 'Владивосток',
    link: 'https://images.unsplash.com/photo-1587637885131-8b08567433d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
  },
  {
    name: 'Казань',
    link: 'https://images.unsplash.com/photo-1561398024-910a2c6cf1a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    name: 'Иркутск',
    link: 'https://images.unsplash.com/photo-1577094337070-c2ad44c1c9b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  }
];

const popupElement = document.querySelector('.popup');
const popupImage = document.querySelector('.popup__image');
const popupCloseButton = document.querySelector('.popup__close');
const elementDelete = document.querySelector('.element__delete');
const element = document.querySelector('.element');

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
    popupElement.classList.add('popup_opened');
  }

  _handleClosePopup() {
    popupImage.src = this._link;
    popupElement.classList.remove('popup_opened');
  }

  _handleDelete() {
    element.remove();
  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._handleOpenPopup();
    });

    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });

    document.addEventListener('keydown', (evt) => {
      (evt.key === 'Escape');
      this._handleClosePopup();
    });

    elementDelete.addEventListener('click', () => {
      this._handleDelete();
    });
  }
}

initialCards.forEach((item) => {
  const card = new Card(item, '.element__template');
  const cardElement = card.generateCard();

  document.querySelector('.elements').append(cardElement);
});
