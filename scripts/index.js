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
// редактирование профиля
const openProfileButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileWorkplace = document.querySelector(".profile__workplace");
const popupName = document.querySelector(
  ".popup__profile-form-input_type_name"
);
const popupWorkplace = document.querySelector(
  ".popup__profile-form-input_type_workplace"
);
const formProfile = document.querySelector(".popup__content");

openProfileButton.addEventListener("click", function () {
  openPopup(popup);
  popupName.value = profileName.textContent;
  popupWorkplace.value = profileWorkplace.textContent;
});
closeButton.addEventListener("click", function () {
  closePopup(popup);
});

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileWorkplace.textContent = popupWorkplace.value;
  closePopup(popup);
});
//функция добавления лайка

let likeActive = function (element) {
  element.addEventListener("click", () => {
    element.classList.toggle("element__like-button_active");
  });
};
//функция удаления карточки
const deleteElement = (event) => {
  const item = event.target.closest(".element");
  item.remove();
};
// функция открытие попапа картинки
function openPopupImage(link, text) {
  openPopup(popupImage);
  popupFullSizeImage.src = link;
  popupFullSizeImage.alt = text;
  popupImageName.textContent = text;
}
const popupElement = document.querySelector(".popup__type_element");
const closeElementButton = popupElement.querySelector(".popup__close-button");
const openElementButton = document.querySelector(".profile__add-button");
const elementName = document.querySelector("#element-input");
const elementLink = document.querySelector("#link-input");
const clickImage = document.querySelector(".element__type_image");
const popupImage = document.querySelector(".popup__type_image");
const closeImageButton = popupImage.querySelector(".popup__close-button");
const popupImageName = document.querySelector(".popup__image-title");
const popupFullSizeImage = popupImage.querySelector("#popup__image");
closeImageButton.addEventListener("click", function () {
  closePopup(popupImage);
});

openElementButton.addEventListener("click", function () {
  openPopup(popupElement);
});
closeElementButton.addEventListener("click", function () {
  closePopup(popupElement);
});
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
popupElement.addEventListener("submit", function (event) {
  event.preventDefault();
  const cardItem = cardElement.cloneNode(true);
  const likeButton = cardItem.querySelector(".element__like-button");
  cardItem
    .querySelector(".element__fullscreen-button")
    .addEventListener("click", () =>
      openPopupImage(elementLink.value, elementName.value)
    );
  cardItem
    .querySelector(".element__wastebasket-button")
    .addEventListener("click", deleteElement);
  likeActive(likeButton);
  cardItem.querySelector(".element__img").src = elementLink.value;
  cardItem.querySelector(".element__img").alt = elementName.value;
  cardItem.querySelector(".element__title").textContent = elementLink.value;
  closePopup(popupElement);
  elements.prepend(cardItem);
});

const cardElement = document.querySelector("#element-template").content;
const elements = document.querySelector(".elements");
const element = document.querySelector(".element");
const deleteButton = document.querySelector(".element__wastebasket-button");
const elementImage = document.querySelector(".element__img");
// вывод карточек при загрузке через js
initialCards.forEach((item) => {
  const cardItem = cardElement.cloneNode(true);
  cardItem
    .querySelector(".element__fullscreen-button")
    .addEventListener("click", () => openPopupImage(item.link, item.name));
  cardItem
    .querySelector(".element__wastebasket-button")
    .addEventListener("click", deleteElement);
  const likeButton = cardItem.querySelector(".element__like-button");
  likeActive(likeButton);
  cardItem.querySelector(".element__img").src = item.link;
  cardItem.querySelector(".element__img").alt = item.link;
  cardItem.querySelector(".element__title").textContent = item.name;
  elements.append(cardItem);
});
