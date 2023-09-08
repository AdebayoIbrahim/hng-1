//Getting Values needed in output.
const date = document.querySelector("#Date")
const milliseconds  = document.querySelector('#milliseconds')

//setting Date Arrays

const dateArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
] 

const getDay = dateArray[new Date().getDay()]
//console.log(getDay)
//set output to date value
date.textContent = `${getDay}`

//milliseconds day format
setInterval(() => {
  milliseconds.textContent = `${Date.now()}ms`
},200)

