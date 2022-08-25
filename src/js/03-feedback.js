import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = "feedback-form-state"

const form = document.querySelector('.feedback-form');
const userEmail = document.querySelector('input[name="email"]');
const userMessage = document.querySelector('textarea[name="message"]');
// const dataBase = {
//   email: '',
//   message: '',
// }
const formValues = {}

/////////////////////////////////////////////////////////

getDataBase();

form.addEventListener('input', throttle(validateForm, 500));

function validateForm(event){
  const { name, value } = event.target;
  // dataBase[name] = value;
  // console.log(dataBase[name])

  let alreadyInStorage = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (alreadyInStorage) {
    alreadyInStorage = JSON.parse(alreadyInStorage)
  } else {
      alreadyInStorage ={}
  }
  
  alreadyInStorage[name] = value;
  
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(alreadyInStorage));
}
  
  // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataBase));
// }

//////////////////////////////////////////////////////////

form.addEventListener('submit', submitForm);

function submitForm (event){
  event.preventDefault();

  const {
    elements: { email, message }
  } = event.currentTarget;

  if (email.value === "" || message.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Email: ${email.value}, Message: ${message.value}`);
  event.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY)
}

function getDataBase(){
  const getData = localStorage.getItem(LOCAL_STORAGE_KEY);
  const parsedData = JSON.parse(getData);
  
if (parsedData) {
  // userEmail.value = parsedData.email || '';
  // userMessage.value = parsedData.message || '';

  console.log(parsedData)
  Object.entries(parsedData).forEach(([name, value])=> {
    // console.log(name, value)
    formValues[name] = value;
    form.elements[name].value = value
  })
}}






