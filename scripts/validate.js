

// const editPopup = document.getElementById('popup');
// const openBtn = document.querySelector('.profile__button-edit');
// const editCloseBtn = editPopup.querySelector('.popup__close-button');
// const formElement = document.querySelector(".popup__form");
// const inputName = document.querySelector("#input1");
// const inputJob = document.querySelector("#input2");
// const title = document.querySelector(".profile__title");
// const subtitle = document.querySelector(".profile__explore");
// const cardPopup = document.getElementById('cardPopup');
// const cardPopupCloseBtn = cardPopup.querySelector('.popup__close-button');
// const popupImg = document.getElementById('popupimg');
// const popupImgCloseBtn = popupImg.querySelector('.popup__close-button')
// const inputImageName =document.querySelector("#input3");
// const inputLink = document.querySelector("#input4");
// const formCreateCard = document.querySelector("#cardForm");
// const cardPopupSubmit = document.querySelector("#image_submit");
// console.log(formCreateCard)


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

const validarInput = (inputList) => {
  return inputList.some((inputElement) => {
    console.log("inputElement.validity.valid"+inputElement.validity.valid);
    return !inputElement.validity.valid;

  });
};

//fazer a condicao para validar o input (min e max de letras)
const mudarEstadoBotao = (inputList, buttonElement) => {
  console.log("validacao"+validarInput(inputList));
  if (validarInput(inputList)) {
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
  mudarEstadoBotao(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      // E aqui, para verificar sempre que qualquer entrada de campo for alterada:
      mudarEstadoBotao(inputList, buttonElement);
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