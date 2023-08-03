let nameInput = document.querySelector("#name");
let maleInput = document.querySelector("#male");
let femaleInput = document.querySelector("#female");
let marriedInput = document.querySelector("#married");
let notMarriedInput = document.querySelector("#not-married");
let sendButton = document.querySelector("#send");
let clearButton = document.querySelector("#clear");
let result = document.querySelector("#result");

// functions
function maleMarried() {
  result.innerHTML = `<span>Hello ${nameInput.value}. Your title is Mr ${nameInput.value}.</span>`;
}

function maleNotMarried() {
  result.innerHTML = `<span>Hello ${nameInput.value}. Your title is Mr ${nameInput.value}.</span>`;
}

function femaleMarried() {
  result.innerHTML = `<span>Hello ${nameInput.value}. Your title is Mrs ${nameInput.value}</span>`;
}

function femaleNotMarried() {
  result.innerHTML = `<span>Hello ${nameInput.value}. Your title is Ms ${nameInput.value}</span>`;
}

// send event listenener
send.addEventListener("click", function (e) {
  // data giver about the clicked button, detailed
  // getting users name

  // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  // default behavior
  e.preventDefault();
  // console.log(nameInput.value);
  // nameInput.value;

  if (maleInput.checked && marriedInput.checked) {
    maleMarried();
  }

  if (maleInput.checked && notMarriedInput.checked) {
    maleNotMarried();
  }

  if (femaleInput.checked && marriedInput.checked) {
    femaleMarried();
  }

  if (femaleInput.checked && notMarriedInput.checked) {
    femaleNotMarried();
  }
});

// clear event listener
clear.addEventListener("click", function (e) {
  e.preventDefault();
  result.innerHTML = "";
  maleInput.checked = false;
  femaleInput.checked = false;
  marriedInput.checked = false;
  notMarriedInput.checked = false;
  nameInput.value = "";
});
