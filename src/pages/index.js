import './index.css';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import initialCards from '../scripts/utils.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import {
  aboutInput,
  formAdd,
  formEdit,
  formEditProfile,
  formNewCard,
  nameInput,
  popupAddBtn,
  popupEditBtn,
  setValidation
} from '../scripts/utils'

const createCard = (name, link) => {
  const card = new Card({
    name: name, link: link,
    handleCardClick: () => {
      popupWithImage.open(name, link);
    }
  }, '.element__template')
  return card.generateCard();
};

const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    const cardElement = createCard(data.name, data.link)
    cardList.addItem(cardElement)
  }
}, '.elements');

cardList.renderItems();

const popupWithImage = new PopupWithImage('.popup_type_image');

popupWithImage.setEventListeners();

const handlePopupEditProfile = () => {
  const userData = userInfo.getUserInfo()
  resetAddForm(formEdit);
  nameInput.value = userData.name;
  aboutInput.value = userData.about;
  popupUserForm.open();
};

const userInfo = new UserInfo('.profile__name', '.profile__profession');
const popupUserForm = new PopupWithForm('.popup_type_edit', {
  formSubmit: (data) => {
    userInfo.setUserInfo(data);
  }
});
popupUserForm.setEventListeners();

const popupCardForm = new PopupWithForm('.popup_type_add-card', {
  formSubmit: (data) => {
    const cardElement = createCard(data.name, data.link);
    cardList.addItem(cardElement);
  }
});

popupCardForm.setEventListeners();

const handlePopupAddCard = () => {
  resetAddForm(formAdd);
  popupCardForm.open();
};

export function resetAddForm(form) {
  form.reset();
  const resetFormValidator = new FormValidator(setValidation, form)
  resetFormValidator.resetValidationErrors(form);
};

const cardFormValidator = new FormValidator(setValidation, formNewCard)
cardFormValidator.enableValidation();
const profileFormValidator = new FormValidator(setValidation, formEditProfile)
profileFormValidator.enableValidation();

popupAddBtn.addEventListener("click", handlePopupAddCard);
popupEditBtn.addEventListener("click", handlePopupEditProfile);
