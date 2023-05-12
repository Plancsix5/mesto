let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileWorkplace = document.querySelector('.profile__workplace');
let popupContent = document.forms.popup__content;

openButton.addEventListener('click', function(){
    popup.classList.add('popup_opened')
    popupContent.elements.name.value = profileName.textContent 
    popupContent.elements.workplace.value = profileWorkplace.textContent 
});
closeButton.addEventListener('click', function(){
    popup.classList.remove('popup_opened')
});

popupContent.addEventListener('submit', function(event){
    event.preventDefault();
    profileName.textContent = popupContent.elements.name.value
    profileWorkplace.textContent = popupContent.elements.workplace.value
    popup.classList.remove('popup_opened')
})