import '../pages/index.css';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import initialCards from './data.js';
import UserInfo from './components/UserInfo.js';
import PopupWithForm from './components/PopupWithForm.js';

export const popupEditBtn = document.querySelector('.profile__edit');
export const popupAddBtn = document.querySelector('.profile__add');
const formAdd = document.querySelector('.popup__form_add');
const formEdit = document.querySelector('.popup__form_edit');
export const formEditProfile = document.forms['profileInfoEdit'];
export const nameInput = formEditProfile.elements.popup__name;
export const aboutInput = formEditProfile.elements.popup__profession;
export const formNewCard = document.forms['profileInfoAdd'];

// сброс значений в полях ввода окна добавления карточки
function resetAddForm(form) {
  form.reset();
  resetValidationErrors(form);
};

// сброс ошибок валидации
export function resetValidationErrors(form) {
  const inputsList = Array.from(form.querySelectorAll('.popup__input'));
  const errorsList = Array.from(form.querySelectorAll('.popup__field-error'));
  const btnSubmit = form.querySelector('.popup__save');

  inputsList.forEach((input) => {
    input.classList.remove('popup__input_type_error');
  });

  errorsList.forEach((errMsg) => {
    errMsg.textContent = '';
    errMsg.classList.remove('popup__field-error_active');
  });

  btnSubmit.classList.add('popup__save_inactive');
  btnSubmit.setAttribute('disabled', 'disabled');
};

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

const setValidation = {
  formSel: '.popup__form',
  inputSel: '.popup__input',
  submitButtonSel: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__field-error_active'
};

const cardFormValidator = new FormValidator(setValidation, formNewCard)
cardFormValidator.enableValidation();
const profileFormValidator = new FormValidator(setValidation, formEditProfile)
profileFormValidator.enableValidation();

popupAddBtn.addEventListener("click", handlePopupAddCard);
popupEditBtn.addEventListener("click", handlePopupEditProfile);
