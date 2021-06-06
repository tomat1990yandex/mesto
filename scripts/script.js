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
  const htmlElement = itemTemplate.cloneNode(true);
  htmlElement.querySelector('.element__title').textContent = element.name;
  htmlElement.querySelector('.element__image').src = element.link;
  setEventListeners(htmlElement);

  list.appendChild(htmlElement);
}
renderItems();

// удаление карточки
function handleDelete(evt) {
  evt.target.closest('.element').remove();
}

function setEventListeners(element1) {
  element1.querySelector('.element__delete').addEventListener('click', handleDelete);

}

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
