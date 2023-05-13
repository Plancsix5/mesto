let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileWorkplace = document.querySelector('.profile__workplace');
let popupName = document.querySelector('.popup__profile-form-input_type_name');
let popupWorkplace = document.querySelector('.popup__profile-form-input_type_workplace');
let formProfile = document.querySelector('.popup__content');

openButton.addEventListener('click', function(){
    popup.classList.add('popup_opened')
    popupName.value = profileName.textContent 
    popupWorkplace.value = profileWorkplace.textContent 
});
closeButton.addEventListener('click', function(){
    popup.classList.remove('popup_opened')
});

formProfile.addEventListener('submit', function(event){
    event.preventDefault();
    profileName.textContent = popupName.value
    profileWorkplace.textContent = popupWorkplace.value
    popup.classList.remove('popup_opened')
})