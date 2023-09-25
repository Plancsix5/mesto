export default class FormValidator {
  constructor(formElement, validate) {
    this._validate = validate;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._validate.inputSelector)
    );
    this._inputElement = this._validate.inputSelector;
    this._submitButton = this._formElement.querySelector(
      this._validate.submitButtonSelector
    );
    this._inactiveSubmitButton = this._validate.inactiveButtonClass;
    this._inputError = this._validate.inputErrorClass;
    this._errorClass = this._validate.errorClass;
  }


  _showInputError(inputElement, errorText) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputError);
    errorElement.textContent = errorText;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputError);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }
  
  _validateInput(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
    
  }

  removeValidationErrors() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }
  
//Функция кнопки сохранения
_toggleButtonState() {
  if (this._hasInvalidInput()) {
    this._submitButton.setAttribute("disabled", true);
    this._submitButton.classList.add(this._inactiveSubmitButton);
  } else {
    this._submitButton.removeAttribute("disabled");
    this._submitButton.classList.remove(this._inactiveSubmitButton);
  }
}

_setEventListeners() {
  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      console.log("111");
      this._validateInput(inputElement);
      this._toggleButtonState();
    });
  });
}
  enableValidation() {
    this._setEventListeners();
  }
  }
// //Функция кнопки сохранения
// const toggleButtonState = (form,saveButton,validate) => {
//   if (!form.checkValidity()) {
//     saveButton.setAttribute("disabled", true);
//     saveButton.classList.add(validate.inactiveButtonClass);
//     saveButton.classList.remove(validate.submitButtonSelector);
//   } else {
//     saveButton.removeAttribute("disabled");
//     saveButton.classList.add(validate.submitButtonSelector);
//     saveButton.classList.remove(validate.inactiveButtonClass);
//   }
// };
// const setEventListeners = (formElement,validate) => {
//   const inputList = formElement.querySelectorAll(validate.inputSelector);
//   const saveButton = formElement.querySelector(validate.submitButtonSelector);
//   inputList.forEach((inputItem) => {+
//     inputItem.addEventListener('input', () => {
//       validateInput(inputItem);
//       toggleButtonState(formElement,saveButton, validate);
//     })
//   })
// };

// function getErrorElement(input) {
//   return document.querySelector(`#${input.id}-error`);
// }

// function hideInputError(input) {
//   const errorElement = getErrorElement(input);
//   errorElement.textContent = '';
// }

// function showInputError(input) {
//   const errorElement = getErrorElement(input);
//   errorElement.textContent = input.validationMessage;
// }

// function validateInput(input) {
//   if (!input.validity.valid) {
//     showInputError(input);
//   } else {
//     hideInputError(input);
//   }
// }
// //функция валидации всех форм
// function enableValidation(validate) {
//   document
//     .querySelectorAll(validate.formSelector)
//     .forEach((popupForm) => {

//       setEventListeners(popupForm, validate);

//     });
// }

// enableValidation(validate);
