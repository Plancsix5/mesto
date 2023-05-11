let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileWorkplace = document.querySelector('.profile__workplace');
let popupName = document.querySelector('.popup__input_name');
let popupWorkplace = document.querySelector('.popup__input_workplace');
let form = document.querySelector('.popup__content')

openButton.addEventListener('click', function(){
    popup.classList.add('popup_opened')
});
closeButton.addEventListener('click', function(){
    popup.classList.remove('popup_opened')
});

form.addEventListener('submit', function(event){
    event.preventDefault();
    profileName.textContent = popupName.value
    profileWorkplace.textContent = popupWorkplace.value
    popup.classList.remove('popup_opened')
})