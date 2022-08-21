const LOCAL_STORAGE_KEY = "feedback-form-state"

const refs = {
  userEmail: document.querySelector('.input[name="email"]'),
  userMessage: document.querySelector('textarea[name="message"]'),
  form: document.querySelector('.feedback-form'),
}

const dataBase = {
  email: '',
  message: '',
}

refs.form.addEventListener('input', validateForm);

////////////////////////////////////////////////////////

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();

  console.log(dataBase);
}

function validateForm(event) {
  const { name, value } = event.target;
  dataBase[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataBase));
}
////////////////////////////////////////////////////////

function getDataBase(){
const getData = localStorage.getItem('feedback-form-state');
const parsedData = JSON.parse(getData);
if (parsedData) {
    refs.userEmail.value = parsedData.dataBase.email;
    refs.userMessage.value = parsedData.dataBase.message;
  }
}

getDataBase();




