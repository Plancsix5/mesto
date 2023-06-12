const validate = {
  formSelector: ".popup__form",
  inputSelector: ".popup__profile-form-input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__profile-form-input_type_invalid",
  errorClass: "popup__error_visible",
};
const buttons = document.querySelectorAll(".popup__save");
//Функция кнопки сохранения
const toggleButtonState = (form, validationConfig) => {
  buttons.forEach((button) => {
    if (!form.checkValidity()) {
      button.setAttribute("disabled", true);
      button.classList.add(validationConfig.inactiveButtonClass);
      button.classList.remove(validationConfig.submitButtonSelector);
    } else {
      button.removeAttribute("disabled");
      button.classList.add(validationConfig.submitButtonSelector);
      button.classList.remove(validationConfig.inactiveButtonClass);
    }
  })
};

const getErrorElement = (input) => {
  return document.querySelector(`#${input.name}-error`);
};

const hideInputError = (input, inputErrorClass) => {
  const errorElement = getErrorElement(input);
  errorElement.textContent = "";
  input.classList.remove(inputErrorClass);
};

const showInputError = (input, inputErrorClass) => {
  const errorElement = getErrorElement(input);
  errorElement.textContent = input.validationMessage;
  input.classList.add(inputErrorClass);
};

const validateInput = (input, inputErrorClass) => {
  if (!input.validity.valid) {
    showInputError(input, inputErrorClass);
  } else {
    hideInputError(input, inputErrorClass);
  }
};
//функция валидации всех форм
function enableValidation(validationConfig) {
  document
    .querySelectorAll(validationConfig.formSelector)
    .forEach((popupForm) => {
      popupForm.addEventListener(
        "input",
        (evt) => {
          const input = evt.target;
          const form = evt.currentTarget;
          validateInput(input, validationConfig.inputErrorClass);
          toggleButtonState(form, validationConfig, form.checkValidity());
        },
        true
      );
    });
}


enableValidation(validate);