// редактирование профиля
const openProfileButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_type_profile");
const popups = document.querySelectorAll(".popup");
const closeButton = document.querySelectorAll(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileWorkplace = document.querySelector(".profile__workplace");
const popupName = document.querySelector(
  ".popup__profile-form-input_type_name"
);
const popupWorkplace = document.querySelector(
  ".popup__profile-form-input_type_workplace"
);
const formProfile = document.querySelector(".popup__form");

function openPopup(element) {
  element.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
}
function closePopup(element) {
  element.closest(".popup").classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
}

closeButton.forEach((item) => {
  item.addEventListener("click", () => {
    closePopup(item);
  });
});

openProfileButton.addEventListener("click", function () {
  openPopup(popupProfile);
  popupName.value = profileName.textContent;
  popupWorkplace.value = profileWorkplace.textContent;
});

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileWorkplace.textContent = popupWorkplace.value;
  closePopup(popupProfile);
});

const popupElement = document.querySelector(".popup_type_element");
const button = popupElement.querySelector(".popup_save")
const closeElementButton = popupElement.querySelector(".popup__close-button");
const openElementButton = document.querySelector(".profile__add-button");
const elementName = document.querySelector("#element-name");
const elementLink = document.querySelector("#link-input");
const clickImage = document.querySelector(".element__type_image");
const popupImage = document.querySelector(".popup_type_image");
const popupFullSizeImage = popupImage.querySelector(".popup__image");
const popupImageName = popupImage.querySelector(".popup__image-title");
const popupAddElement = document.querySelector(".popup__add-element")
const popupSaveButton = popupAddElement.querySelector(".popup__save")

openElementButton.addEventListener("click", function () {
  openPopup(popupElement);
  toggleButtonState(popupAddElement,popupSaveButton,validate);
});

const cardElement = document.querySelector("#element-template").content;
const element = cardElement.querySelector(".element");
const elements = document.querySelector(".elements");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
// вывод карточек при загрузке через js
initialCards.forEach((item) => {
  const cardItem = createCard(item);
  elements.append(cardItem);
});
//функция создания карточки
function createCard(el) {
  const cardItem = element.cloneNode(true);
  const elementImage = cardItem.querySelector(".element__img");
  const elementTitle = cardItem.querySelector(".element__title");

  elementImage.src = el.link;
  elementImage.alt = el.name;
  elementTitle.textContent = el.name;

  const likeButton = cardItem.querySelector(".element__like-button");

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("element__like-button_active");
  });

  const deleteButton = cardItem.querySelector(".element__wastebasket-button");

  deleteButton.addEventListener("click", function (event) {
    const item = event.target.closest(".element");
    item.remove();
  });

  const openPopupImage = cardItem.querySelector(".element__fullscreen-button");

  openPopupImage.addEventListener("click", function (event) {
    openPopup(popupImage);
    popupFullSizeImage.src = elementImage.src;
    popupFullSizeImage.alt = elementTitle.textContent;
    popupImageName.textContent = elementTitle.textContent;
  });

  const closeImageButton = popupImage.querySelector(".popup__close-button");

  return cardItem;
}

popupElement.addEventListener("submit", function (event) {
  event.preventDefault();
  const newElement = createCard({
    name: elementName.value,
    link: elementLink.value,
  });

  closePopup(popupElement);
  event.target.reset();
  elements.prepend(newElement);
});

//закрытие попапа через клик по оверлею
popups.forEach((popup) => {
  popup.addEventListener("mousedown", function (evt) {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__close-button")
    ) {
      closePopup(popup);
    }
  });
});

//функция закрытия попапа через эскейп
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    popups.forEach((popup) => {
      if (popup.classList.contains("popup_opened")) {
        closePopup(popup);
      }
    });
  }
}
