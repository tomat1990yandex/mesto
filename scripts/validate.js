const enableValidation = (e) => {
  const formList = Array.from(document.querySelectorAll(e.formSel));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, e);
  });
};

const setEventListeners = (formElement, e) => {
  const inputList = Array.from(formElement.querySelectorAll(e.inputSel));
  const buttonElement = formElement.querySelector(e.submitButtonSel);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const toggleButtonState = (inputList, buttonElement, e) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(e.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(e.inactiveButtonClass);
  }
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const showInputError = (formElement, inputElement, errorMessage, e) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}Err`);
  inputElement.classList.add(e.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(e.errorClass);
};

const hideInputError = (formElement, inputElement, e) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}Err`);
  inputElement.classList.remove(e.inputErrorClass);
  errorElement.classList.remove(e.errorClass);
  errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

enableValidation({
  formSel: '.popup__form',
  inputSel: '.popup__input',
  submitButtonSel: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__field-error_active'
});


// function enableValidation(element) {
//   const formList = Array.from(document.querySelectorAll(element.formElement));
//   formList.forEach((form) => {
//     form.addEventListener('input', (evt) => handleFormInput(evt));
//   })
// }
//
// function handleFormInput(evt) {
//   const input = evt.target;
//   const form = evt.currentTarget;
//
//   setCustomError(input);
//   setFieldError(input);
//   setSubmitButtonState(form);
// }
//
// function setCustomError(input) {
//   const validity = input.validity;
//   input.setCustomValidity('');
//     if (validity.tooShort || validity.tooLong) {
//       const currentLength = input.value.length;
//       const min = input.getAttribute('minlength');
//       input.setCustomValidity(`Текст должен быть не короче ${min} симв. Длина текста сейчас: ${currentLength} символ.`
//       );
//     }
// }
//
// function setSubmitButtonState(form) {
//   const button = Array.from(document.querySelectorAll('.popup__save'));
//
//   button.forEach((button) => {
//
//     const isValid = form.checkValidity();
//     if (isValid) {
//       button.classList.remove('popup__save_inactive');
//       button.removeAttribute('disabled');
//     } else {
//       button.classList.add('popup__save_inactive');
//       button.setAttribute('disabled', 'disabled');
//     }
//   })
// }
//
// function setFieldError(input) {
//   const span = document.querySelector(`#${input.id}Err`);
//   span.textContent = input.validationMessage;
// }
//
// чтобы проверять его при изменении любого из полей
