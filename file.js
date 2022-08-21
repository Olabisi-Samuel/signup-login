let form = document.querySelector(".form-container");
let nameInput = document.getElementById("name-input");
let emailInput = document.getElementById("email-input");
let passInput1 = document.getElementById("pass-input1");
let passInput2 = document.getElementById("pass-input2");
let btn = document.querySelector(".btn");
let error = document.querySelector(".error");
let nameError = document.querySelector(".name-error");
let emailError = document.querySelector(".email-error");
let passError = document.querySelector(".pass-error");
let passNote = document.querySelector(".pass-note");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (nameInput.value === "") {
    nameInput.classList.add("error");
    nameError.innerHTML = "Please insert your name";
  } else if (nameInput.value <= 8) {
    nameInput.classList.add("error");
    nameError.innerHTML = "Please insert your name";
  } else {
    nameInput.classList.remove("error");
    nameError.innerHTML = "";
  }

  if (emailInput.value === "") {
    emailInput.classList.add("error");
    emailError.innerHTML = "Enter your email";
  } else {
    emailInput.classList.remove("error");
    emailError.innerHTML = "";
    // emailInput.value = "";
  }

  if (passInput1.value === "") {
    passInput1.classList.add("error");
    passError.innerHTML = "Enter valid password";
  } else {
    passInput1.classList.remove("error");
    passError.innerHTML = "";
    // passInput1.value = "";
  }

  if (passInput2.value !== passInput1.value) {
    passInput2.classList.add("error");
  } else {
    passInput2.classList.remove("error");
    // passInput2.value = "";
  }
});

btn.addEventListener("click", function () {
  if (nameInput.value === "") {
    nameInput.classList.add("error");
    nameError.innerHTML = "Please insert your name";
  } else if (nameInput.value <= 8) {
    nameInput.classList.add("error");
    nameError.innerHTML = "Please insert your name";
  } else {
    nameInput.classList.remove("error");
    nameError.innerHTML = "";
    nameInput.value = "";
  }

  if (emailInput.value === "") {
    emailInput.classList.add("error");
    emailError.innerHTML = "Enter your e-mail address or mobile phone number";
  } else {
    emailInput.classList.remove("error");
    emailError.innerHTML = "";
    emailInput.value = "";
  }

  if (passInput1.value === "") {
    // passInput1.classList.remove("passNote");
    passInput1.classList.add("error");
    passError.innerHTML = "Enter valid password";
  } else {
    passInput1.classList.remove("error");
    passError.innerHTML = "";
    passInput1.value = "";
  }

  if (passInput2.value !== passInput1.value) {
    passInput2.classList.add("error");
  } else {
    passInput2.classList.remove("error");
    passInput2.value = "";
  }
});

nameInput.addEventListener("blur", function () {
  if (nameInput.value === "") {
    nameInput.classList.add("error");
    nameError.innerHTML = "Please insert your name";
  } else if (nameInput.value <= 8) {
    nameInput.classList.add("error");
    nameError.innerHTML = "Please insert your name";
  } else {
    nameInput.classList.remove("error");
    nameError.innerHTML = "";
    // nameInput.value = "";
  }
});

emailInput.addEventListener("blur", function () {
  if (emailInput.value === "") {
    emailInput.classList.add("error");
    emailError.innerHTML = "Enter your e-mail address or mobile phone number";
  } else {
    emailInput.classList.remove("error");
    emailError.innerHTML = "";
    // emailInput.value = "";
  }
});

passInput1.addEventListener("blur", function () {
  if (passInput1.value === "") {
    passInput1.classList.add("error");
    passError.innerHTML = "Enter valid password";
  } else {
    passInput1.classList.remove("error");
    passError.innerHTML = "";
    // passInput1.value = "";
  }
});
