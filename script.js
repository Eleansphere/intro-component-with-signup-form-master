//DOM inputs
const imgErr = document.querySelectorAll('.form-img');
const labelErr = document.querySelectorAll('label');
const inputFields = document.querySelectorAll('.input-field');  
const mainForm = document.querySelector('form');

//Input validation

mainForm.addEventListener("submit", event =>{
  event.preventDefault();
  let ban = true;
  inputFields.forEach((item, index) =>{

    if(item.value ==="" || (validateEmail(item.value)===true && index === 2)){
      ban = false;
      errorShow(index);
    }
    else{
      errorRemove(index);
     
    }
  });
  
  if(ban === true){
    inputFields.forEach((item, index) =>{
    console.log(`Your ${item.id} is: ${item.value}`);
    successShow(index);
    setTimeout(resetInputs, 4000);
    });
    
    }
    else{
      inputFields.forEach((item, index) =>{
        if(item.value==="") errorShow(index);
      }); 
  }
});

//Email input validation

function validateEmail(inputText) {
     const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
     if (inputText.match(mailFormat)) {
       return false;
    }
    return true;
   };

//Adding class

function errorShow(inputIndex){
  imgErr[inputIndex].classList.add('form-img-show');
  labelErr[inputIndex].classList.add('form-label-show');
  inputFields[inputIndex].classList.add('input-outline-red');
}

//Removing class

function errorRemove(inputIndex){
  imgErr[inputIndex].classList.remove('form-img-show');
  labelErr[inputIndex].classList.remove('form-label-show');
  inputFields[inputIndex].classList.remove('input-outline-red');
}

//Success class

function successShow(inputIndex){
  inputFields[inputIndex].classList.add('input-outline-green');
}

//Resetting inputs

function resetInputs(){
  inputFields.forEach((item, index) =>{
    item.value = "";
    errorRemove(index);
  });
  console.log("Input values removed");
}