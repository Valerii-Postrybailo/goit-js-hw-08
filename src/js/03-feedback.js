import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = "feedback-form-state"

const form = document.querySelector('.feedback-form');
const userEmail = document.querySelector('input[name="email"]');
const userMessage = document.querySelector('textarea[name="message"]');
const dataBase = {
  email: '',
  message: '',
}

/////////////////////////////////////////////////////////

form.addEventListener('input', throttle(validateForm, 500));


function validateForm(event){
  const { name, value } = event.target;
  dataBase[name] = value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataBase));
}

//////////////////////////////////////////////////////////

form.addEventListener('submit', submitForm);

function submitForm (event){
  event.preventDefault();
  event.currentTarget.reset();
  console.log(dataBase);
}

getDataBase();

function getDataBase(){
const getData = localStorage.getItem(LOCAL_STORAGE_KEY);
const parsedData = JSON.parse(getData);
if (parsedData) {
  userEmail.value = parsedData.email;
  userMessage.value = parsedData.message;
}}





