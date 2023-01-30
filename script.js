<form action="#" method="post">
<div class="form__container">
  <input type="text" name="name" id="name" class="form-input" placeholder="First Name">
  <img src="./images/icon-error.svg" alt="error" class="form-img" id="name-img">
  <label for="name" id="name-label">Name cannot be empty</label>
</div>
<div class="form__container">
  <input type="text" name="lastname" id="lastname" class="form-input" placeholder="Last Name">
  <img src="./images/icon-error.svg" alt="error" class="form-img" id="lastname-img">
  <label for="lastname" id="lastname-label">Last Name cannot be empty</label>
</div>
<div class="form__container">
  <input type="email" name="email" id="email" class="form-input" placeholder="Email Address">
  <img src="./images/icon-error.svg" alt="error" class="form-img" id="email-img">
  <label for="email" id="email-label">Email cannot be empty</label>
</div>
<div class="form__container">
  <input type="password" name="password" id="password" class="form-input" placeholder="Password">
  <img src="./images/icon-error.svg" alt="error" class="form-img" id="password-img">
  <label for="password" id="password-label">Password cannot be empty</label>
</div>
<input type="submit" value="Claim your free trial" class="form-submit">
<p class="form-cta">
  By clicking the button, you are agreeing to our <a href="#">Terms and Services</a>
</p>
</form>

















const buttonSubmit = document.querySelector('.form-submit');

const emptyValue = () => {
    let ban = false;
    if(document.getElementById('name').value == ''){
        let img = document.getElementById('name-img');
        let label = document.getElementById('name-label');
        showError(img, label);
        ban = true;
    }
    if(document.getElementById('lastname').value == ''){
        let img = document.getElementById('lastname-img');
        let label = document.getElementById('lastname-label');
        showError(img, label);
        ban = true;
    }
    if(document.getElementById('email').value == ''){
        let img = document.getElementById('email-img');
        let label = document.getElementById('email-label');
        showError(img, label);
        ban = true;
    }
    if(document.getElementById('password').value == ''){
        let img = document.getElementById('password-img');
        let label = document.getElementById('password-label');
        showError(img, label);
        ban = true;
    }
    return ban;
}
const showError = (img, label) => {
    img.classList.toggle('form-img-show');
    label.classList.toggle('form-label-show');
    setTimeout(()=> {
        img.classList.toggle('form-img-show');
        label.classList.toggle('form-label-show');
    }, 2000)
}
buttonSubmit.addEventListener('click', e => {
    e.preventDefault();
    if(!emptyValue()){
        document.getElementById('name').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
});




*******************


const inputs = document.querySelectorAll(".form-control")
const form = document.querySelector("#form")

// form submit event
form.addEventListener("submit", function (e) {
  e.preventDefault()
  inputs.forEach(function (input) {
    input.addEventListener("mouseleave", function (e) {
      if (e.currentTarget.value) {
        e.currentTarget.classList.remove("invalid-input")
      }
    })
    if (!input.value && input.dataset.id !== "email") {
      active(input, 1)
    } else if (input.dataset.id === "email") {
      if (validateEmail(input.value)) {
        active(input, 1)
      } else {
        active(input, 0)
      }
    } else {
      active(input, 0)
    }
  })
})
// add and remove class
function active(input, temp) {
  if (temp) {
    input.classList.add("invalid-input")
    input.nextElementSibling.classList.add("error")
  } else {
    input.classList.remove("invalid-input")
    input.nextElementSibling.classList.remove("error")
  }
}
// valid email
function validateEmail(inputText) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (inputText.match(mailformat)) {
    return false
  }
  return true
}