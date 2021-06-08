const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
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

// поле ввода имени
const profileName = document.querySelector('.profile__name');

// поле ввода профессии
const profileProfession = document.querySelector('.profile__profession');

// поле ввода имени
const popupName = document.querySelector('#popupName');

// поле ввода профессии
const popupProfession = document.querySelector('#popupProfession');

// блок формы
const form = document.querySelector('#popupFormEdit');

// блок формы
const formAdd = document.querySelector('#popupFormAdd');

// поле ввода названия картинки
const popupNameAdd = document.querySelector('#popupNameAdd');

// поле ввода ссылки на картинку
const popupLinkAdd = document.querySelector('#popupLinkAdd');

// кнопка отправки формы добавления
const popupSaveAdd = document.querySelector('#popupSaveAdd');

// элемент шаблона
const itemTemplate = document.querySelector('.element__template').content;

// элемент списка
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
  elementTmplt.querySelector('.element__image').src = imageSrc;
  elementTmplt.querySelector('.element__like').addEventListener('click', elementLike);
  // elementAdd.querySelector('.element__image').addEventListener('click', () => {
  //   imageFull(element)
  // });
  setEventListeners(elementTmplt);

  list.appendChild(elementTmplt);
}

renderItems();

function handleSubmit() {
  renderItem();
}

// // клонируем содержимое тега template
// const userElement = userTemplate.querySelector('.user').cloneNode(true);
//
// // наполняем содержимым
// userElement.querySelector('.user__avatar').src = 'tinyurl.com/v4pfzwy';
// userElement.querySelector('.user__name').textContent = 'Дюк Корморант';
//
// // отображаем на странице
// usersOnline.append(userElement);

// удаление карточки
function handleDelete(evt) {
  evt.target.closest('.element').remove();
}

function setEventListeners(element) {
  element.querySelector('.element__delete').addEventListener('click', handleDelete);
}

// кнопка лайк
function elementLike(like) {
  like.target.classList.toggle('element__like_active');
}

// // картинка в попап
// function imageFull(element) {
//   openPopup(popupImageFull)
//   popupImageFull.querySelector('.popup__image').setAttribute('alt', element.name);
//   popupImageFull.querySelector('.popup__image').setAttribute('src', element.link);
//   popupImageFull.querySelector('.popup__image-name').textContent = element.name;
//
// }

// const popupTemplate = document.querySelector('.popup__template').content;
// const rootList = document.querySelector('.root');

// function renderPopup(popup) {
//   const htmlElement = popupTemplate.cloneNode(true);
//   htmlElement.querySelector('.popup__title').textContent = 'Редактирование профиля';
//   rootList.append(hlmlElement);
//
// }

// renderPopup();

// открытие окна popup через кнопку редактирования профиля
function openPopupEdit() {
  fillinProfile();
  popupEditBtn.classList.add('popup_opened');
}

// открытие окна popup через кнопку добавления карточки
function openPopupAdd() {
  popupAddBtn.classList.add('popup_opened');
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

// закрытие окна popup для редактирования профиля
function closeAdd() {
  popupAddBtn.classList.remove('popup_opened');
}

// перенос имени и профессии с popup в основную страницу
function formSubmitHandler(save) {
  save.preventDefault();
  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProfession.value;
  closeEdit();
}

// события при действиях
buttonPopupEdit.addEventListener('click', openPopupEdit);
buttonPopupAdd.addEventListener('click', openPopupAdd);
buttonCloseEdit.addEventListener('click', closeEdit);
buttonCloseAdd.addEventListener('click', closeAdd);
form.addEventListener('submit', formSubmitHandler);
popupSaveAdd.addEventListener('click', handleSubmit)

