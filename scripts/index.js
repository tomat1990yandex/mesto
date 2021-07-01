import Card from './Card.js';
import FormValidator from './FormValidator.js';

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

// окно попапа
export const popupElement = document.querySelector('.popup');

// окно popup редактирования профиля
const popupEditBtn = document.querySelector('#popupEdit');

// окно popup добавления карточки
const popupAddBtn = document.querySelector('#popupAdd');

// кнопка закрытия окна
export const popupCloseButton = document.querySelector('.popup__close');

// кнопка закрытие окна редактирования профиля
const buttonCloseEdit = document.querySelector('#ButtonCloseEdit');

// кнопка закрытие окна добавления карточки
const buttonCloseAdd = document.querySelector('#ButtonCloseAdd');

// блок имени профиля
const profileName = document.querySelector('.profile__name');

// поле ввода профессии
const profileProfession = document.querySelector('.profile__profession');

// поле ввода имени
const popupName = document.querySelector('#popupName');

// окно popup увеличения карточки
export const popupImage = document.querySelector('.popup__image');

// поле ввода названия картинки
export const popupImageTitle = document.querySelector('#popupImgTitle');

// поле ввода профессии
const popupProfession = document.querySelector('#popupProfession');

// блок формы редактирования
const formEdit = document.querySelector('#popupFormEdit');

// блок формы добавления
const formAdd = document.querySelector('.popup__form_add');

// поле ввода названия карточки
const popupNameAdd = document.querySelector('#popupNameAdd');

// поле ввода ссылки на картинку
const popupLinkAdd = document.querySelector('#popupLinkAdd');

// список для вставки шаблона
const list = document.querySelector('.elements');

// перенос имени и профессии с основной страницы в popup
function fillinProfile() {
  popupName.value = profileName.textContent;
  popupProfession.value = profileProfession.textContent;
}

// сброс значений в полях ввода окна добавления карточки
function resetAddForm() {
  formAdd.reset();
  resetValidationErrors(formAdd);
}

// сброс ошибок валидации
function resetValidationErrors(form) {
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
}

// закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeBtnEsc);
}

buttonCloseEdit.addEventListener("click", () => {
  closePopup(popupEditBtn);
})

buttonCloseAdd.addEventListener("click", () => {
  closePopup(popupAddBtn);
})

// открытие попапа
function openPopup(popup) {
  resetValidationErrors(formEdit);
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeBtnEsc);
}

// закрытие попапа по нажатию кнопки Escape
function closeBtnEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// закрытие попапа редактирования при клике на пустую область
popupEditBtn.addEventListener('click', (evt) => {
  if (evt.currentTarget === evt.target)
    closePopup(popupEditBtn);
});

// закрытие попапа добавления при клике на пустую область
popupAddBtn.addEventListener('click', (evt) => {
  if (evt.currentTarget === evt.target)
    closePopup(popupAddBtn);
});

// закрытие попапа изображения при клике на пустую область
popupElement.addEventListener('click', (evt) => {
  if (evt.currentTarget === evt.target)
    closePopup(popupElement);
});

document.querySelector('.profile__edit').addEventListener('click', () => {
  fillinProfile();
  openPopup(popupEditBtn)
});
document.querySelector('.profile__add').addEventListener('click', () => {
  resetAddForm();
  openPopup(popupAddBtn);
});

document.querySelector('#popupFormEdit').addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProfession.value;
  closePopup(popupEditBtn);
});

function addElement(formAdd, element) {
  formAdd.prepend(element);
}

initialCards.forEach((item) => {
  const card = new Card(item, '.element__template');
  const cardElement = card.generateCard();

  document.querySelector('.elements').append(cardElement);
});

formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardElement = new Card({name: popupNameAdd.value, link: popupLinkAdd.value}, '.element__template');
  addElement(list, cardElement.generateCard());
  closePopup(popupAddBtn);
});

const setValidation = (selectorNames) => {
  const formList = Array.from(document.querySelectorAll(selectorNames.formSel));

  formList.forEach((formElement) => {
    const formValidator = new FormValidator(selectorNames, formElement);
    formValidator.enableValidation();
  });
};

setValidation({
  formSel: '.popup__form',
  inputSel: '.popup__input',
  submitButtonSel: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__field-error_active'
});
