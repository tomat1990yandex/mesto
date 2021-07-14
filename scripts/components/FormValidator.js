export default class FormValidator {
  constructor(data, formElement) {
    this._formElement = formElement;
    this._inputSel = Array.from(this._formElement.querySelectorAll(data.inputSel));
    this._submitButtonSel = this._formElement.querySelector(data.submitButtonSel);
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
  }

  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _showInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _hasInvalidInput = () => {
    return this._inputSel.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _setEvtListeners = () => {
    this._inputSel.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this.toggleButtonState();
      });
    });
  };

  toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._submitButtonSel.classList.add(this._inactiveButtonClass);
      this._submitButtonSel.setAttribute('disabled', 'disabled');
    } else {
      this._submitButtonSel.classList.remove(this._inactiveButtonClass);
      this._submitButtonSel.removeAttribute('disabled');
    }
  };

  enableValidation = () => {
    this.toggleButtonState();
    this._setEvtListeners();
  };
}
