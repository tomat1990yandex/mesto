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

// окно popup увеличения карточки
const popupImgBtn = document.querySelector('#popupImg');

// кнопка вызова окна редактирования профиля
const buttonPopupEdit = document.querySelector('.profile__edit');

// кнопка вызова окна добавления карточки
const buttonPopupAdd = document.querySelector('.profile__add');

// изображение карточки
let buttonImg = document.querySelector('.element__image');

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
const popupImage = document.querySelector('#popupImg'); // POPUP
const imagePopupImage = popupImage.querySelector('#popupImgLink'); // IMAGE
const buttonClosePopupImage = popupImage.querySelector('#ButtonCloseImg'); // BUTTON close pop-up
const captionPopupImage = popupImage.querySelector('#popupImgTitle'); //CAPTION

// перенос имени и профессии с popup в основную страницу
// сброс значений в полях ввода окна добавления карточки
// закрытие окна popup для редактирования профиля
// закрытие окна popup для редактирования профиля
// перенос имени и профессии с основной страницы в popup
// открытие окна popup через нажатие на карточку
// открытие окна popup через кнопку добавления карточки
// открытие окна popup через кнопку редактирования профиля
// кнопка лайк
// удаление карточки
// создание новой карточки через кнопку создать
// функция создания карточек по шаблону с использованием значений массива или создания новых карточек
// применение массива для каждого значения функции
// элемент списка
// элемент шаблона
// кнопка отправки формы добавления
// поле ввода ссылки на картинку
// поле ввода названия картинки
// блок формы
// поле ввода профессии

const popupProfession = document.querySelector('#popupProfession');

const formEdit = document.querySelector('#popupFormEdit');

const popupNameAdd = document.querySelector('#popupNameAdd');

const popupLinkAdd = document.querySelector('#popupLinkAdd');

const popupSaveAdd = document.querySelector('#popupSaveAdd');

const itemTemplate = document.querySelector('.element__template').content;

const list = document.querySelector('.elements');
function renderItems() {
  initialCards.forEach(renderItem);

}



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

  setEventListeners(elementTmplt);
  list.prepend(elementTmplt);

}

renderItems();
function handleSubmit(add) {
  add.preventDefault();
  renderItem();
  closeAdd();

}
function handleDelete(evt) {
  evt.target.closest('.element').remove();

}
function setEventListeners(element) {
  element.querySelector('.element__delete').addEventListener('click', handleDelete);
  element.querySelector('.element__like').addEventListener('click', handleLike);
  element.querySelector('.element__image').addEventListener('click', handleImage);

}
function handleLike(like) {
  like.target.classList.toggle('element__like_active');

}
function openPopupEdit() {
  fillinProfile();
  popupEditBtn.classList.add('popup_opened');

}
function openPopupAdd() {
  resetAddForm();
  popupAddBtn.classList.add('popup_opened');

}
function openPopupImg() {
  popupImage.classList.add('popup_opened');

}
function fillinProfile() {
  popupName.value = profileName.textContent;
  popupProfession.value = profileProfession.textContent;

}

function closeEdit() {
  popupEditBtn.classList.remove('popup_opened');

}

function closeAdd() {
  popupAddBtn.classList.remove('popup_opened');

}

function closeImg() {
  popupImage.classList.remove('popup_opened');

}


function resetAddForm() {
  popupNameAdd.value = null;
  popupLinkAdd.value = null;

}
function formSubmitHandler(save) {
  save.preventDefault();
  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProfession.value;
  closeEdit();

}
function handleImage(evt) {
  imagePopupImage.src  = evt.target.closest('.element__image').src;
  console.log(imagePopupImage.src);
  imagePopupImage.alt = evt.target.closest('.element__image').alt;
  captionPopupImage.textContent = evt.target.closest('.element').querySelector('.element__title').textContent;
  openPopupImg(popupImage);

}

buttonClosePopupImage.addEventListener('click', ()=> closeImg(popupImage));


// события при действиях
buttonPopupEdit.addEventListener('click', openPopupEdit);
buttonPopupAdd.addEventListener('click', openPopupAdd);
// buttonClosePopupImage.addEventListener('click', openPopupImg);
buttonCloseEdit.addEventListener('click', closeEdit);
buttonCloseAdd.addEventListener('click', closeAdd);
formEdit.addEventListener('submit', formSubmitHandler);
popupSaveAdd.addEventListener('click', handleSubmit)

