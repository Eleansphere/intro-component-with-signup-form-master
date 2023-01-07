// element.addEventListener('click', () => document.querySelector('.final-score').textContent = 'Final Score');

var allInput = document.querySelectorAll('.input-field');

for(let input of allInput){
    input.addEventListener('click', () => document.querySelector('.input-field').value= '');

}

document.getElementById("fname").addEventListener("focus", myFunction);

function myFunction() {
    document.getElementById("fname").style.backgroundColor = "red";
}







// function getDetails(){
//     let firstName, lastName, emailAddress, password;
//     firstName = document.getElementById('first-name').innerText;
//     lastName = document.getElementById('last-name').innerText;
//     emailAddress = document.getElementById('email-address').innerText
//     password = document.getElementById('password').innerText;
// }
// console.log(firstName, lastName, emailAddress, password);

// function pushToServer(data){
//     let formData = [];
//     for (let i = 0; i<data.length; i++){
//         if(data.document.getElementById('password').value) != null{
//             formData[i] = data.
//         }
//     }
// }


// function passwordCheck(pwd){

// }
