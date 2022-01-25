var form = document.querySelector(".form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordConfirm = document.getElementById("confirm-password");

form.addEventListener("submit", submitForm);

function submitForm(geek) {
  geek.preventDefault();
  //   alert("form has been submitted");
  //   validate(email);
  //   validate(username);
  //   validate(password);
  //   validate(passwordConfirm);
  checkUserName(username);
  checkEmail(email);
  checkPassword(password);
  checkConfirmPassword(passwordConfirm);
}

// function validate(element) {
//   var nameOfUser = element.value;
//   if (nameOfUser === "geekster") {
//     var formControl = element.parentElement;
//     formControl.className = "form-control success";
//   } else {
//     var formControl = element.parentElement;
//     formControl.className = "form-control failure";
//     formControl.querySelector("small").innerText = "this is invalid";
//   }
// }

function checkUserName(element) {
  var nameOfUser = element.value;
  if (nameOfUser === "") {
    setError(element, "User name cannot be empty");
  } else {
    onSuccess(element);
  }
}

function checkEmail(element) {
  var emailValue = element.value;
  if (emailValue === "") {
    setError(element, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setError(element, "This is not a valid email");
  } else {
    onSuccess(element);
  }
}

function checkPassword(element) {
  var specialCharacter = ["(", ")", "$"];
  var passwordValue = element.value;
  if (passwordValue === "") {
    setError(element, "password cannot be empty");
  }
  //    else if (!passwordValue.includes("1")) {
  //     setError(element, "password should contain a number 1");
  //   }
  else {
    onSuccess(element);
  }
}

function checkConfirmPassword(element) {
  var passwordValue = password.value;
  var confirmPasswordValue = element.value;
  if (confirmPasswordValue === "") {
    setError(element, "confirm password cannot be empty");
  } else if (passwordValue !== confirmPasswordValue) {
    setError(element, "passwords do not match");
  } else {
    onSuccess(element);
  }
}

// regex for email validation - DO NOT TOUCH
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
// function isEmail(email) {
//   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//     return true;
//   }
//   return false;
// }

function setError(element, errorMessage) {
  var formControl = element.parentElement;
  formControl.className = "form-control failure";
  formControl.querySelector("small").innerText = errorMessage;
}

function onSuccess(element) {
  var formControl = element.parentElement;
  formControl.className = "form-control success";
}

username.addEventListener("change", (e) => console.log(e.target.value));
