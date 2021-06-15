const isValid = (formElement, inputElement, e) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, e);
  } else {
    hideInputError(formElement, inputElement, e);
  }
};

const showInputError = (formElement, inputElement, errorMessage, e) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(e.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(e.errorClass);
};

const hideInputError = (formElement, inputElement, e) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(e.inputErrorClass);
  errorElement.classList.remove(e.errorClass);
  errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const setEvtListeners = (formElement, e) => {
  const inputList = Array.from(formElement.querySelectorAll(e.inputSel));
  const buttonElement = formElement.querySelector(e.submitButtonSel);

  toggleButtonState(inputList, buttonElement, e);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement, e);
      toggleButtonState(inputList, buttonElement, e);
    });
  });
};

const toggleButtonState = (inputList, buttonElement, e) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(e.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove(e.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

const enableValidation = (e) => {
  const formList = Array.from(document.querySelectorAll(e.formSel));
  formList.forEach((formElement) => {
    // formElement.addEventListener('submit', function (evt) {
    //   evt.preventDefault();
    // });

    setEvtListeners(formElement, e);
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
