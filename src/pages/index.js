import './index.css';
import Api from '../scripts/components/Api.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithConfirm from '../scripts/components/PopupWithConfirm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import {
  validationObj,
  selectorObj,
  editBtn,
  addImgBtn,
  popupProfileInputs,
  editAvaBtn
} from '../scripts/utils';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26',
  headers: {
    authorization: 'fd18a1a7-a94a-4eca-b229-2e654460c24a',
    'Content-Type': 'application/json'
  }
});

function handleCardClick(title, link) {
  popupWithImage.open(title, link);
}

function handleTrashClick(id, card) {
  popupWithConfirm.setSubmitAction(() => handlePopupConfirm(id, card))
  popupWithConfirm.open();
}

function handlePopupConfirm(id, card) {
  api.deleteCard(id)
    .then(() => {
      card.removeCard();
      popupWithConfirm.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleLikeClick(id, isLiked, card) {
  if (isLiked) {
    api.dislikedCard(id)
      .then((data) => {
        card.setLikes(data.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api.likedCard(id)
      .then((data) => {
        card.setLikes(data.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function handlePopupProfile(inputsData) {
  popupFormProfile.renderSaving(true);
  api.saveUserChanges(inputsData)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupFormProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupFormProfile.renderSaving(false);
    })
}

function handleTextInput() {
  const userData = userInfo.getUserInfo();
  popupProfileInputs.forEach(input => {
    input.value = userData[input.name];
  });
}

function createCard(dataCard, id) {
  const card = new Card({
      data: dataCard,
      handleCardClick,
      handleTrashClick,
      handleLikeClick,
    },
    selectorObj.cardId,
    id);

  const newCard = card.generateCard();

  return newCard;
}

function handlePopupAddCard(inputsData) {
  popupFormAddCard.renderSaving(true);
  api.postNewCard(inputsData)
    .then((data) => {
      cardList.addItemPrepend(createCard(data, data.owner._id));
      popupFormAddCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupFormAddCard.renderSaving(false);
    })
}

function handlePopupChangeAvatar(inputsData) {
  popupFormChangeAvatar.renderSaving(true);
  api.changedAvatar(inputsData)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupFormChangeAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupFormChangeAvatar.renderSaving(false);
    })
}

// слушатели событий
editBtn.addEventListener('click', () => {
  popupFormProfile.open();
  handleTextInput();
  validFormPopupProfile.resetValidationState();
});

addImgBtn.addEventListener('click', () => {
  popupFormAddCard.open();
  validFormPopupAddCard.resetValidationState();
});

editAvaBtn.addEventListener('click', () => {
  popupFormChangeAvatar.open();
  validFormPopupAddCard.resetValidationState();
});

const cardList = new Section({
    renderer: (cardItem, id) => {
      cardList.addItem(createCard(cardItem, id));
    },
  },
  selectorObj.elementsSelector
);

const popupWithImage = new PopupWithImage(selectorObj.popupImageSelector);
popupWithImage.setEventListeners();

const popupWithConfirm = new PopupWithConfirm(selectorObj.popupConfirmSelector);
popupWithConfirm.setEventListeners();

const popupFormProfile = new PopupWithForm(selectorObj.popupProfileSelector, handlePopupProfile);
popupFormProfile.setEventListeners();

const popupFormAddCard = new PopupWithForm(selectorObj.popupAddCardSelector, handlePopupAddCard);
popupFormAddCard.setEventListeners();

const popupFormChangeAvatar = new PopupWithForm(selectorObj.popupChangeAvatarSelector, handlePopupChangeAvatar);
popupFormChangeAvatar.setEventListeners();

const validFormPopupAddCard = new FormValidator(validationObj, selectorObj.popupAddCardSelector);
validFormPopupAddCard.enableValidation();

const validFormPopupProfile = new FormValidator(validationObj, selectorObj.popupProfileSelector);
validFormPopupProfile.enableValidation();

const validFormPopupChangeAvatar = new FormValidator(validationObj, selectorObj.popupChangeAvatarSelector);
validFormPopupChangeAvatar.enableValidation();

const userInfo = new UserInfo({
  selectorName: selectorObj.profileNameSelector,
  selectorJob: selectorObj.profileJobSelector,
  selectorAvatar: selectorObj.avatarSelector,
});

Promise.all([
  api.getUserData(),
  api.getInitialCards()
])
  .then((values) => {
    userInfo.setUserInfo(values[0])
    cardList.renderItems(values[1], values[0]._id);
  })
  .catch((err) => {
    console.log(err);
  });
