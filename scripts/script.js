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

// блок формы
const formEdit = document.querySelector('#popupFormEdit');

// поле ввода названия карточки
const popupNameAdd = document.querySelector('#popupNameAdd');

// поле ввода ссылки на картинку
const popupLinkAdd = document.querySelector('#popupLinkAdd');

// кнопка создания карточки
const popupSaveAdd = document.querySelector('#popupSaveAdd');

// блок шаблона
const itemTemplate = document.querySelector('.element__template').content;

// список для вставки шаблона
const list = document.querySelector('.elements');


// применение массива для каждого значения функции
function renderItems() {
  initialCards.forEach(renderItem);

}

// функция создания карточек по шаблону с использованием значений массива или создания новых карточек
function renderItem(element) {
  let elementTextContent;
  let imageSrc;
  if (element) {
    elementTextContent = element.name;
    imageSrc = element.link;
  } else {
    elementTextContent = popupNameAdd.value;
    imageSrc = popupLinkAdd.value;
  }
  const elementTmplt = itemTemplate.cloneNode(true);
  elementTmplt.querySelector('.element__title').textContent = elementTextContent;
  elementTmplt.querySelector('.element__image').alt = elementTextContent;

  elementTmplt.querySelector('.element__image').src = imageSrc;

  setEventListeners(elementTmplt);
  list.prepend(elementTmplt);

}

renderItems();

// создание новой карточки через кнопку создать
function handleSubmit(add) {
  add.preventDefault();
  renderItem();
  closeAdd();

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

// открытие окна popup через кнопку редактирования профиля
function openPopupEdit() {
  fillinProfile();
  popupEditBtn.classList.add('popup_opened');

}

// открытие окна popup через кнопку добавления карточки
function openPopupAdd() {
  resetAddForm();
  popupAddBtn.classList.add('popup_opened');

}

// открытие окна popup через нажатие на карточку
function openPopupImg() {
  popupImage.classList.add('popup_opened');

}

// перенос имени и профессии с основной страницы в popup
function fillinProfile() {
  popupName.value = profileName.textContent;
  popupProfession.value = profileProfession.textContent;

}

// закрытие окна popup для редактирования профиля
function closeEdit() {
  popupEditBtn.classList.remove('popup_opened');

}

// закрытие окна popup для добавления карточки
function closeAdd() {
  popupAddBtn.classList.remove('popup_opened');

}

// закрытие окна popup увеличения картинки
function closeImg() {
  popupImage.classList.remove('popup_opened');

}

// сброс значений в полях ввода окна добавления карточки
function resetAddForm() {
  popupNameAdd.value = null;
  popupLinkAdd.value = null;

}

// перенос имени и профессии с popup в основную страницу
function formSubmitHandler(save) {
  save.preventDefault();
  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProfession.value;
  closeEdit();

}

// функция увеличения картинки
function handleImage(evt) {
  popupImgLink.src = evt.target.closest('.element__image').src;
  // console.log(imagePopupImage.src);
  popupImgLink.alt = evt.target.closest('.element__image').alt;
  popupImageTitle.textContent = evt.target.closest('.element').querySelector('.element__title').textContent;
  openPopupImg(popupImage);

}

// закрытие увеличенного изображения с кнопки
buttonClosePopupImage.addEventListener('click', () => closeImg(popupImage));


// события при действиях
buttonPopupEdit.addEventListener('click', openPopupEdit);
buttonPopupAdd.addEventListener('click', openPopupAdd);
buttonCloseEdit.addEventListener('click', closeEdit);
buttonCloseAdd.addEventListener('click', closeAdd);
formEdit.addEventListener('submit', formSubmitHandler);
popupSaveAdd.addEventListener('click', handleSubmit)

