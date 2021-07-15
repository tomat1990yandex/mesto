export default [
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

export const popupEditBtn = document.querySelector('.profile__edit');
export const popupAddBtn = document.querySelector('.profile__add');
export const formAdd = document.querySelector('.popup__form_add');
export const formEdit = document.querySelector('.popup__form_edit');
export const formEditProfile = document.forms['profileInfoEdit'];
export const nameInput = formEditProfile.elements.popup__name;
export const aboutInput = formEditProfile.elements.popup__profession;
export const formNewCard = document.forms['profileInfoAdd'];
export const setValidation = {
  formSel: '.popup__form',
  inputSel: '.popup__input',
  submitButtonSel: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__field-error_active',
  errorField: '.popup__field-error'
};
