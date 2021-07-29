const validationObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__field-error_active',
};

const selectorObj = {
  popupImageSelector: '.popup_type_image',
  popupProfileSelector: '.popup_type_edit',
  popupAddCardSelector: '.popup_type_add-card',
  popupChangeAvatarSelector: '.popup_type_avatar-edit',
  elementsSelector: '.elements',
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__profession',
  avatarSelector:'.profile__avatar',
  cardId: '#card',
  trashCard: '.element__delete',
  popupConfirmSelector: '.popup_type_confirm',
};

const container = document.querySelector(".content");
const editBtn = container.querySelector(".profile__edit");
const addImgBtn = container.querySelector(".profile__add");
const editAvaBtn = container.querySelector(".profile__change-btn");
const popupProfile = document.querySelector('.popup_type_edit');
const popupProfileInputs = popupProfile.querySelectorAll('.popup__input');

export {
  validationObj,
  editBtn,
  addImgBtn,
  selectorObj,
  popupProfileInputs,
  editAvaBtn
};
