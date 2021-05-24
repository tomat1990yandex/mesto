// окно popup
let popup = document.querySelector('.popup')

// кнопка вызова окна редактирования профиля
let ButtonPopup = document.querySelector('.profile__edit')

// открытие окна popup для редактирования профиля
function open() {
  popup.classList.add('popup_opened')
}

ButtonPopup.addEventListener('click', open)
