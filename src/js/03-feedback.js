// const LOCAL_STORAGE_KEY = "feedback-form-state"

// const refs = {
//   userEmail: document.querySelector('.input[name="email"]'),
//   userMessage: document.querySelector('textarea[name="message"]'),
//   form: document.querySelector('.feedback-form'),
// }

// const userEmail = document.querySelector('.input[name="email"]')
//   const  userMessage = document.querySelector('textarea[name="message"]')
// const form = document.querySelector('.feedback-form')
  
// const dataBase = {
//   email: '',
//   message: '',
// }


// ////////////////////////////////////////////////////////

// form.addEventListener('submit', onFormSubmit)

// function onFormSubmit(event) {
//   event.preventDefault();
//   event.currentTarget.reset();

//   console.log(dataBase);
// }

// function validateForm(event) {
//   const { name, value } = event.target;
//   dataBase[name] = value;
//   console.log(dataBase[name])
//   console.log("yyy suk")

//   localStorage.setItem('feedback-form-state', JSON.stringify(dataBase));
// }
// ////////////////////////////////////////////////////////

// function getDataBase(){
// const getData = localStorage.getItem('feedback-form-state');
// const parsedData = JSON.parse(getData);
//   if (parsedData) {
//   console.log(dataBase);

//     console.log(parsedData.email)
//     console.log(userEmail)
//     userEmail.value = parsedData.email;
//     userMessage.value = parsedData.message;
//   }
// }
// form.addEventListener('input', validateForm);

// getDataBase();

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input[name="email"]');
const messageRef = document.querySelector('textarea[name="message"]');
const dataBase = {
    email: '',
    message: '',
}

// ///////////////////////////////////////////////////////
function validateForm(e){
    const { name, value } = e.target;
    dataBase[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataBase));
}
function submitForm (e){
    e.preventDefault();
    e.currentTarget.reset();
    console.log(dataBase);
}
function getDataBase(){
const getData = localStorage.getItem('feedback-form-state');
const parsedData = JSON.parse(getData);
if (parsedData) {
    emailRef.value = parsedData.email;
    messageRef.value = parsedData.message;
}}

//////////////////////////////////////////////////
formRef.addEventListener('submit', submitForm);

formRef.addEventListener('input', validateForm);

getDataBase();



