const popupForm = document.querySelector('.popup')
const editButton = document.querySelector('.profile__edit')
const closeButton = document.querySelector('.popup__close-button')

const nameInput = document.querySelector('.popup__name-input')
const titleInput = document.querySelector('.popup__title-input')
const imageInput = document.querySelector('.popup__image-input')

const nameUser = document.querySelector('.profile__name')
const titleUser = document.querySelector('.profile__title')

const saveButton = document.querySelector('.popup__save-button')
const cards = document.querySelector('.cards')


function removeElement(item) {
  item.parentElement.remove()
}

function deleteEvent() {
  let images = document.querySelectorAll('.card__title')
  images = Array.from(images)
  for (const image of images) {
    image.removeEventListener('click', () => removeElement)
    image.addEventListener('click', () => removeElement(image))
  }
}

deleteEvent()

function changeDisplaytoFlex() {
  popupForm.classList.add('popup_change_display')
  nameInput.value = nameUser.textContent
  titleInput.value = titleUser.textContent
}

function changeDisplaytoNone() {
  popupForm.classList.remove('popup_change_display')
}

editButton.addEventListener('click', changeDisplaytoFlex)
closeButton.addEventListener('click', changeDisplaytoNone)

function saveNewInputValues(evento) {
  evento.preventDefault();
  if (nameInput.value != '' && titleInput.value != '') {
    nameUser.textContent = nameInput.value
    titleUser.textContent = titleInput.value
  }

  if (imageInput.value != '') {
    const username = nameInput.value ? nameInput.value : 'Guest'
    insertCardWithImageURL(imageInput.value, username)
    imageInput.value = ''
  }
  changeDisplaytoNone()
  deleteEvent()
}

saveButton.addEventListener('click', saveNewInputValues)

function insertCardWithImageURL(url, nome) {
  cards.insertAdjacentHTML('beforeend', `<li class="card__item">
  <img class="card__image" src="${url}" alt="${nome}">
  <h4 class="card__title">${nome}</h4>
  <p class="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
      provident.</p>
</li>`)
}

