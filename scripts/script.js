// Переменные
// стартовый массив из 6 карточек
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

// окно popup редактирования профиля
const popupEditBtn = document.querySelector('#popupEdit');

// окно popup добавления карточки
const popupAddBtn = document.querySelector('#popupAdd');

// кнопка вызова окна редактирования профиля
const buttonPopupEdit = document.querySelector('.profile__edit');

// кнопка вызова окна добавления карточки
const buttonPopupAdd = document.querySelector('.profile__add');

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
const popupImage = document.querySelector('#popupImg');

// поле ввода ссылки на картинку
const popupImgLink = popupImage.querySelector('#popupImgLink');

// кнопка закрытие окна увеличенной картинки
const buttonClosePopupImage = popupImage.querySelector('#ButtonCloseImg');

// поле ввода названия картинки
const popupImageTitle = popupImage.querySelector('#popupImgTitle');

// поле ввода профессии
const popupProfession = document.querySelector('#popupProfession');

// блок формы редактирования
const formEdit = document.querySelector('#popupFormEdit');

// блок формы добавления
const formAdd = document.querySelector('#popupFormAdd');

// поле ввода названия карточки
const popupNameAdd = document.querySelector('#popupNameAdd');

// поле ввода ссылки на картинку
const popupLinkAdd = document.querySelector('#popupLinkAdd');

// блок шаблона
const itemTemplate = document.querySelector('.element__template').content;

// список для вставки шаблона
const list = document.querySelector('.elements');

// Функции
// применение массива для каждого значения функции
function renderItems() {
  initialCards.forEach((renderItem) => list.appendChild(createElement(renderItem.link, renderItem.name)));
}

renderItems();

// функция создания карточек
function createElement(imageSrc, elementTextContent) {
  const elementTmplt = itemTemplate.cloneNode(true);
  const elementImg = elementTmplt.querySelector('.element__image')
  const elementTitle = elementTmplt.querySelector('.element__title');
  elementTitle.textContent = elementTextContent;
  elementImg.alt = elementTextContent;
  elementImg.src = imageSrc;
  setEventListeners(elementTmplt);
  return elementTmplt;
}

// функция добавления карточек в начало списка
function addElement(formAdd, element) {
  formAdd.prepend(element);
}

// удаление карточки
function handleDelete(evt) {
  evt.target.closest('.element').remove();
}

// слушатели событий карточек
function setEventListeners(element) {
  element.querySelector('.element__delete').addEventListener('click', handleDelete);
  element.querySelector('.element__like').addEventListener('click', handleLike);
  element.querySelector('.element__image').addEventListener('click', handleImage);
}

// кнопка лайк
function handleLike(like) {
  like.target.classList.toggle('element__like_active');
}

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

// перенос имени и профессии с основной страницы в popup
function fillinProfile() {
  popupName.value = profileName.textContent;
  popupProfession.value = profileProfession.textContent;
}

// закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeBtnEsc);
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

// функция увеличения картинки
function handleImage(evt) {
  popupImgLink.src = evt.target.closest('.element__image').src;
  popupImgLink.alt = evt.target.closest('.element__image').alt;
  popupImageTitle.textContent = evt.target.closest('.element').querySelector('.element__title').textContent;
  openPopup(popupImage);
}

// закрытие увеличенного изображения с кнопки
buttonClosePopupImage.addEventListener('click', () => closePopup(popupImage));
buttonCloseEdit.addEventListener('click', () => closePopup(popupEditBtn));
buttonCloseAdd.addEventListener('click', () => closePopup(popupAddBtn));


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
popupImage.addEventListener('click', (evt) => {
  if (evt.currentTarget === evt.target)
    closePopup(popupImage);
});

buttonPopupEdit.addEventListener('click', () => {
  fillinProfile();
  openPopup(popupEditBtn)
});
buttonPopupAdd.addEventListener('click', () => {
  resetAddForm();
  openPopup(popupAddBtn);
});

formEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProfession.value;
  closePopup(popupEditBtn);
});

formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addElement(list, createElement(popupLinkAdd.value, popupNameAdd.value));
  closePopup(popupAddBtn);
});
