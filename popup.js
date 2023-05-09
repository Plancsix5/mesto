let openButton = document.querySelector(".profile-info__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__close-button");
let profileName = document.querySelector(".profile__name");
let profileWorkplace = document.querySelector(".profile__workplace");
let popupName = document.querySelector(".popup__name");
let popupWorkplace = document.querySelector(".popup__workplace");
let popupSave = document.querySelector(".popup__save");

openButton.addEventListener("click", function(){
    popup.classList.add("popup_opened")
});
closeButton.addEventListener("click", function(){
    popup.classList.remove("popup_opened")
});

popupSave.addEventListener("click", function(){
    profileName.textContent = popupName.value
    profileWorkplace.textContent = popupWorkplace.value
    popup.classList.remove("popup_opened")
});
