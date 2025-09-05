const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

console.log("mensagem");

const editPopup = document.getElementById('popup');
const openBtn = document.querySelector('.profile__button-edit');
const editCloseBtn = editPopup.querySelector('.popup__close-button');
const formElement = document.querySelector(".popup__form");
const inputName = document.querySelector("#input1");
const inputJob = document.querySelector("#input2");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__explore");
const cardPopup = document.getElementById('cardPopup');
const cardPopupCloseBtn = cardPopup.querySelector('.popup__close-button');
const popupImg = document.getElementById('popupimg');
const popupImgCloseBtn = popupImg.querySelector('.popup__close-button')
const inputImageName =document.querySelector("#input3");
const inputLink = document.querySelector("#input4");
const formCreateCard = document.querySelector("#cardForm");
const cardPopupSubmit = document.querySelector("#image_submit");
console.log(formCreateCard)


// mensagem de erro//
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};


// criar no html paragrafo com classes input 1 , 2 error//
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_inactive");
  } else {
    buttonElement.classList.remove("button_inactive");
  }
};

const validacaoFormulario = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__text"));
  const buttonElement = formElement.querySelector(".popup__submit");
console.log(inputList)
  // Aqui, para verificar o estado do botão no início:
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      // E aqui, para verificar sempre que qualquer entrada de campo for alterada:
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("input", function (evt) {
      evt.preventDefault();
      console.log("oi")
      
      validacaoFormulario(formElement);
    });
   
  });
};

enableValidation();

// validacao input 



openBtn.addEventListener('click', () => {
  editPopup.classList.add('popup_opened');
})

cardPopupCloseBtn.addEventListener('click', () => {
  cardPopup.classList.remove('popup_opened');

})


editCloseBtn.addEventListener('click', () => {
  editPopup.classList.remove('popup_opened');
})

popupImgCloseBtn.addEventListener('click', () => {
  popupImg.classList.remove('popup_opened');

})




// Função para salvar o nome
function saveData(event) {
  event.preventDefault()
  title.textContent = inputName.value
  subtitle.textContent = inputJob.value
  console.log(inputName.value)
  inputName.value = ""
  inputJob.value = ""

 editPopup.classList.remove('popup_opened');
}

// document.getElementById("card__like").addEventListener("click", function () {
//this.classList.toggle("active"); // Alterna a classe 'active' no botão
//});

formElement.addEventListener("submit", saveData)
//lixeira//
document.querySelectorAll('.card__delete').forEach((trashBtn) => {
  trashBtn.addEventListener('click', (e) => {
    const card = e.target.closest('.card__grid');
    if (card) {
      card.remove();
    }
  });
});

// Elementos do form de adicionar cartão
const addCardBtn = document.getElementById('addCardButton');
const cardOverlay = cardPopup.querySelector('.card-popup__overlay');
const cardClose = cardPopup.querySelector('.card-popup__close');
const cardForm = document.getElementById('cardForm');
const titleInput = cardForm.title;
const linkInput = cardForm.link;
const submitBtn = cardForm.querySelector('button[type="submit"]');
const cardContainer = document.querySelector('.card');

// // Validação básica: habilita o botão se inputs válidos
// function updateSubmitState() {
//   submitBtn.disabled = !(cardForm.checkValidity());
//   submitBtn.classList.toggle('button--disabled', !submitBtn.disabled);
// }

// Exibir popup
addCardBtn.addEventListener('click', () => {
  cardPopup.classList.add('popup_opened');
  cardForm.reset();
  // updateSubmitState();

    validarTodosFormularios();
});

const validarTodosFormularios = () => {
    const formList = Array.from(document.querySelectorAll(".popup__form"));
    validacaoFormulario(formElement);
}


initialCards.forEach(card => {
  createCard(card)
})

function createCard(card) {
  console.log(card)
  const cardTemplate = document.getElementById('card-template').content.querySelector('.card__grid').cloneNode(true)
  console.log(cardTemplate)

  const cardImage = cardTemplate.querySelector('.card__grid-image')
  console.log(cardImage)

  cardImage.src = card.link
  cardImage.alt = card.name

  const description = cardTemplate.querySelector('.card__description');
  description.textContent = card.name;
  document.querySelector('.card').appendChild(cardTemplate);

  //lixeira
  document.querySelectorAll('.card__delete').forEach((trashBtn) => {
    trashBtn.addEventListener('click', (e) => {
      const card = e.target.closest('.card__grid');
      if (card) {
        card.remove();
      }
    });
  });

  //curtida//
  const likeButton = cardTemplate.querySelector('.card__button');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');
  })

  //popupimagem
  cardImage.addEventListener('click', () => {
    console.log("popupImg")

    const popupImg = document.getElementById('popupimg')

    const popupImageElement = document.querySelector('.popup__image');
    popupImg.classList.add("popup_opened");

    popupImageElement.src = card.link
    popupImageElement.alt = card.name

    const popupDescImg = popupImg.querySelector('.popup__image-description');
    popupDescImg.textContent = card.name;


  });
}




function saveImage(e) {
  e.preventDefault();  // previne o envio padrão
  console.log("chamado");

  createCard({
    name: inputImageName.value,
    link: inputLink.value
  });

  inputImageName.value = "";
  inputLink.value = "";

  cardPopup.classList.remove('popup_opened');
}

formCreateCard.addEventListener('submit', saveImage);
