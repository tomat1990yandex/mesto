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


// открытие окна popup для редактирования профиля
// перенос имени и профессии с основной страницы в popup
function open() {
  popupName.value = profileName.textContent;
  popupProfession.value = profileProfession.textContent;
  popup.classList.add('popup_opened');
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
buttonPopup.addEventListener('click', open);
buttonClose.addEventListener('click', close);
form.addEventListener('submit', formSubmitHandler);
