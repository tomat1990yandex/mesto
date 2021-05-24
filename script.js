// окно popup
let popup = document.querySelector('.popup')

// кнопка вызова окна редактирования профиля
let ButtonPopup = document.querySelector('.button__edit')

// кнопка закрытие окна редактирования профиля
let ButtonClose = document.querySelector('.button__close')

// поле ввода имени
let profileName = document.querySelector('.profile__name')

// поле ввода профессии
let profileProfession = document.querySelector('.profile__profession')

// поле ввода имени
let popupName = document.querySelector('#popupName')

// поле ввода профессии
let popupProfession = document.querySelector('#popupProfession')



// открытие окна popup для редактирования профиля
// перенос имени и профессии с основной страницы в popup
function open() {
  popup.classList.add('popup_opened')
  popupName.value = profileName.textContent
  popupProfession.value = profileProfession.textContent
}

// закрытие окна popup для редактирования профиля
function close() {
  popup.classList.remove('popup_opened')
}

//
ButtonPopup.addEventListener('click', open)
ButtonClose.addEventListener('click', close)
