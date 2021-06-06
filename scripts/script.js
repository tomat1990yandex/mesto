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

// окно popup
let popup = document.querySelector('.popup');

// кнопка вызова окна редактирования профиля
let buttonPopup = document.querySelector('.profile__edit');

// кнопка закрытие окна редактирования профиля
let buttonClose = document.querySelector('.popup__close');

// поле ввода имени
let profileName = document.querySelector('.profile__name');

// поле ввода профессии
let profileProfession = document.querySelector('.profile__profession');

// поле ввода имени
let popupName = document.querySelector('#popupName');

// поле ввода профессии
let popupProfession = document.querySelector('#popupProfession');

// блок формы
let form = document.querySelector('.popup__form');

//
let popupTitle = document.querySelector('.popup__title');

// элемент шаблона
const itemTemplate = document.querySelector('.element__template').content;

// элемент списка
const list = document.querySelector('.elements');

// применение массива для каждого значения функции
function renderItems() {
  initialCards.forEach(renderItem);
}

// функция создания карточек по шаблону с использованием значений массива
function renderItem(element) {
  const elementAdd = itemTemplate.cloneNode(true);
  elementAdd.querySelector('.element__title').textContent = element.name;
  elementAdd.querySelector('.element__image').src = element.link;
  elementAdd.querySelector('.element__like').addEventListener('click', elementLike);
  // elementAdd.querySelector('.element__image').addEventListener('click', () => {
  //   imageFull(element)
  // });
  setEventListeners(elementAdd);

  list.appendChild(elementAdd);
}

renderItems();

// удаление карточки
function handleDelete(evt) {
  evt.target.closest('.element').remove();
}

function setEventListeners(elementDel) {
  elementDel.querySelector('.element__delete').addEventListener('click', handleDelete);
}

// добавление новой карточки
function handleDuplicate(evt) {
  const element = evt.target.closest('.profile__add').querySelector('.element__title').textContent;
  renderItem(element);
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

const popupTemplate = document.querySelector('.popup__template').content;
const rootList = document.querySelector('.root');

function renderPopup(popup) {
  const htmlElement = popupTemplate.cloneNode(true);
  htmlElement.querySelector('.popup__title').textContent = 'Редактирование профиля';
  rootList.append(hlmlElement);

}

renderPopup();

// открытие окна popup
function openPopup() {
  popup.classList.add('popup_opened');
}

// перенос имени и профессии с основной страницы в popup
function fillinProfile() {
  popupName.value = profileName.textContent;
  popupProfession.value = profileProfession.textContent;
}

// Открытие popup через кнопку редактирования профиля

function editProfileBtn() {
  openPopup();
  popupTitle.querySelector('.popup__title').textContent = 'Редактировать профиль';

}

// закрытие окна popup для редактирования профиля
function close() {
  popup.classList.remove('popup_opened');
}

// перенос имени и профессии с popup в основную страницу
function formSubmitHandler(save) {
  save.preventDefault();
  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProfession.value;
  close();
}

// события при действиях
buttonPopup.addEventListener('click', editProfileBtn);
buttonClose.addEventListener('click', close);
form.addEventListener('submit', formSubmitHandler);
