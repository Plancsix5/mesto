const validate = {
  formSelector: ".popup__form",
  inputSelector: ".popup__profile-form-input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__profile-form-input_type_invalid",
  errorClass: "popup__error_visible",
};
//Функция кнопки сохранения
const toggleButtonState = (form,saveButton,validate) => {
  if (!form.checkValidity()) {
    saveButton.setAttribute("disabled", true);
    saveButton.classList.add(validate.inactiveButtonClass);
    saveButton.classList.remove(validate.submitButtonSelector);
  } else {
    saveButton.removeAttribute("disabled");
    saveButton.classList.add(validate.submitButtonSelector);
    saveButton.classList.remove(validate.inactiveButtonClass);
  }
};
const setEventListeners = (formElement,validate) => {
  const inputList = formElement.querySelectorAll(validate.inputSelector);
  const saveButton = formElement.querySelector(validate.submitButtonSelector);
  inputList.forEach((inputItem) => {
    inputItem.addEventListener('input', () => {
      validateInput(inputItem);
      toggleButtonState(formElement,saveButton, validate);
    })
  })
};
// const getErrorElement = (input) => {
//   return document.querySelector(`#${input.name}-error`);
// };
function getErrorElement(input) {
  return document.querySelector(`#${input.id}-error`);
}
// const hideInputError = (input, inputElement,validate) => {
//   const errorElement = getErrorElement(input);
//   errorElement.textContent = "";
//   inputElement.classList.remove(validate.inputErrorClass);
//   errorElement.classList.remove(validate.errorClass);
// };

function hideInputError(input) {
  const errorElement = getErrorElement(input);
  errorElement.textContent = '';
}

// const showInputError = (input, inputElement,validate) => {
//   const errorElement = getErrorElement(input);
//   errorElement.textContent = input.validationMessage;
//   inputElement.classList.add(validate.inputErrorClass);
//   errorElement.classList.add(settings.errorClass);
// };
function showInputError(input) {
  const errorElement = getErrorElement(input);
  errorElement.textContent = input.validationMessage;
}
// const validateInput = (input, inputElement,validate) => {
//   if (!inputElement.validity.valid) {
//     showInputError(input, inputElement,validate);
//   } else {
//     hideInputError(input, inputElement,validate);
//   }
// };
function validateInput(input) {
  if (!input.validity.valid) {
    showInputError(input);
  } else {
    hideInputError(input);
  }
}
//функция валидации всех форм
function enableValidation(validate) {
  document
    .querySelectorAll(validate.formSelector)
    .forEach((popupForm) => {
      // popupForm.addEventListener(
      //   "input",
      //   (evt) => {
      //     const input = evt.target;
      //     validateInput(input, validate.inputErrorClass);
          setEventListeners(popupForm, validate);
    //     },
    //     true
    //   );
    });
}

enableValidation(validate);
