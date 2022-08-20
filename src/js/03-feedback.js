const userEmail = document.querySelector("input")
console.log(userEmail)

const userMessage = document.querySelector("textarea")
console.log(userMessage)

userEmail.addEventListener("input", (event) => {
  console.log(event.currentTarget.value)
  const userEmailJSON = JSON.stringify(event.currentTarget.value)
    console.log(userEmailJSON)
})

  userMessage.addEventListener("input", (event) => {
  console.log(event.currentTarget.value)
  const userMessageJSON = JSON.stringify(event.currentTarget.value)
    console.log(userMessageJSON)
})

