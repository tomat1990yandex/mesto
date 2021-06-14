function enableValidation() {
  const form = document.querySelector('#popupFormAdd');
  form.addEventListener('submit', handleFormSubmit);
  form.addEventListener('input', handleFormInput);
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const isValid = form.checkValidity();

  if (isValid) {
    form.reset();
  }
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
    input.setCustomValidity(`Вы пропустили это поле.`
    );
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

function setFieldError(input) {
  const span = document.querySelector(`#${input.id}Err`);
  span.textContent = input.validationMessage;
}

function setSubmitButtonState(form) {
  const button = form.querySelector('#popupSaveAdd');
  const isValid = form.checkValidity();

  if (isValid) {
    button.classList.remove('popup__save_inactive');
    button.removeAttribute('disabled');
  } else {
    button.classList.add('popup__save_inactive');
    button.setAttribute('disabled', 'disabled');
  }
}

enableValidation({
  form: '.popup__form',
  input: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
