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
}

function validate(element) {
  var nameOfUser = element.value;
  if (nameOfUser === "geekster") {
    var formControl = element.parentElement;
    formControl.className = "form-control success";
  } else {
    var formControl = element.parentElement;
    formControl.className = "form-control failure";
    document.getElementsByClassName(element.id)[0].innerText = "invalid";
    console.log(element.id);
  }
}

username.addEventListener("change", (e) => console.log(e.target.value));
