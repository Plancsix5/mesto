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

function getErrorElement(input) {
  return document.querySelector(`#${input.id}-error`);
}

function hideInputError(input) {
  const errorElement = getErrorElement(input);
  errorElement.textContent = '';
}

function showInputError(input) {
  const errorElement = getErrorElement(input);
  errorElement.textContent = input.validationMessage;
}

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

      setEventListeners(popupForm, validate);

    });
}

enableValidation(validate);
