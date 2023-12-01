//DOM inputs
const imgErr = document.querySelectorAll('.form-img');
const labelErr = document.querySelectorAll('label');
const inputFields = document.querySelectorAll('.input-field');  
const submitButton = document.getElementById("submitBtn");


//Input validation

let validate = false;


submitButton.addEventListener("click", ()=>{
      if(validate!==true){
         submitButton.disabled = true;
          alert("Fill the form!");
      }
 });

inputFields.forEach((item, index)=>{
  item.addEventListener("focus", ()=>{
      if(item.id == "first-name" && item.value === ""){
      
        errorShow(index);
      }
      if(item.id == "last-name" && item.value === ""){
   
        errorShow(index);
      }
      if(item.id == "email-address" && validateEmail(item.value)==true){
        
        errorShow(index);
      }
      if(item.id == "password" && item.value === ""){
       
        errorShow(index);
      }
  });
  item.addEventListener("change", ()=>{
    if(item.id == "first-name" && item.value !== ""){
      validate = true;
      errorRemove(index);
    }
    if(item.id == "last-name" && item.value !== ""){
      validate = true;
      errorRemove(index);
    }

    if(item.id == "email-address" && validateEmail(item.value)==false){
      validate = true;
      errorRemove(index);
    }

    if(item.id == "password" && item.value !== ""){
      validate = true;
      errorRemove(index);
    }
});
});



//email input validation

function validateEmail(inputText) {
     const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
     if (inputText.match(mailFormat)) {
       return false;
    }
    return true;
   }


//adding class

function errorShow(inputIndex){
  imgErr[inputIndex].classList.add('form-img-show');
  labelErr[inputIndex].classList.add('form-label-show');
}

//removing class

function errorRemove(inputIndex){
  imgErr[inputIndex].classList.remove('form-img-show');
  labelErr[inputIndex].classList.remove('form-label-show');
}















// const buttonSubmit = document.querySelector('.form-submit');

// const emptyValue = () => {
//     let ban = false;
//     if(document.getElementById('name').value == ''){
//         let img = document.getElementById('name-img');
//         let label = document.getElementById('name-label');
//         showError(img, label);
//         ban = true;
//     }
//     if(document.getElementById('lastname').value == ''){
//         let img = document.getElementById('lastname-img');
//         let label = document.getElementById('lastname-label');
//         showError(img, label);
//         ban = true;
//     }
//     if(document.getElementById('email').value == ''){
//         let img = document.getElementById('email-img');
//         let label = document.getElementById('email-label');
//         showError(img, label);
//         ban = true;
//     }
//     if(document.getElementById('password').value == ''){
//         let img = document.getElementById('password-img');
//         let label = document.getElementById('password-label');
//         showError(img, label);
//         ban = true;
//     }
//     return ban;
// }
// const showError = (img, label) => {
//     img.classList.toggle('form-img-show');
//     label.classList.toggle('form-label-show');
//     setTimeout(()=> {
//         img.classList.toggle('form-img-show');
//         label.classList.toggle('form-label-show');
//     }, 2000)
// }
// buttonSubmit.addEventListener('click', e => {
//     e.preventDefault();
//     if(!emptyValue()){
//         document.getElementById('name').value = '';
//         document.getElementById('lastname').value = '';
//         document.getElementById('email').value = '';
//         document.getElementById('password').value = '';
//     }
// });


// const inputs = document.querySelectorAll(".form-control")
// const form = document.querySelector("#form")

// // form submit event
// form.addEventListener("submit", function (e) {
//   e.preventDefault()
//   inputs.forEach(function (input) {
//     input.addEventListener("mouseleave", function (e) {
//       if (e.currentTarget.value) {
//         e.currentTarget.classList.remove("invalid-input")
//       }
//     })
//     if (!input.value && input.dataset.id !== "email") {
//       active(input, 1)
//     } else if (input.dataset.id === "email") {
//       if (validateEmail(input.value)) {
//         active(input, 1)
//       } else {
//         active(input, 0)
//       }
//     } else {
//       active(input, 0)
//     }
//   })
// })
// // add and remove class
// function active(input, temp) {
//   if (temp) {
//     input.classList.add("invalid-input")
//     input.nextElementSibling.classList.add("error")
//   } else {
//     input.classList.remove("invalid-input")
//     input.nextElementSibling.classList.remove("error")
//   }
// }
// // valid email
// function validateEmail(inputText) {
//   const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//   if (inputText.match(mailformat)) {
//     return false
//   }
//   return true
// }