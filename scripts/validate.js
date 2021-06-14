function enableValidation(element) {
  const formList = Array.from(document.querySelectorAll(element.formSelector));
  formList.forEach((form) => {
    form.addEventListener('input', (evt) => handleFormInput(evt));
  })
}

function handleFormInput(evt) {
  const input = evt.target;
  const form = evt.currentTarget;

  setCustomError(input);
  setFieldError(input);
  setSubmitButtonState(form);
}

function setCustomError(input) {
  const validity = input.validity;
  input.setCustomValidity('');
  if (input.value.length === 0) {
    input.setCustomValidity(`Вы пропустили это поле.`);
  } else {
    if (validity.tooShort || validity.tooLong) {
      const currentLength = input.value.length;
      const min = input.getAttribute('minlength');
      input.setCustomValidity(`Текст должен быть не короче ${min} симв. Длина текста сейчас: ${currentLength} символ.`
      );
    }
    if (validity.typeMismatch) {
      input.setCustomValidity('Введите адрес сайта.');
    }
  }

}

function setSubmitButtonState(form) {
  const button = Array.from(document.querySelectorAll('.popup__save'));

  button.forEach((button) => {

    const isValid = form.checkValidity();
    if (isValid) {
      button.classList.remove('popup__save_inactive');
      button.removeAttribute('disabled');
    } else {
      button.classList.add('popup__save_inactive');
      button.setAttribute('disabled', 'disabled');
    }
  })
}

function setFieldError(input) {
  const span = document.querySelector(`#${input.id}Err`);
  span.textContent = input.validationMessage;
}


enableValidation({
  formSelector: '.popup__form',
  input: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
