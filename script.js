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

send.addEventListener("click", function (e) {
  e.preventDefault();

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

clear.addEventListener("click", function (e) {
  e.preventDefault();
  result.innerHTML = "";
  maleInput.checked = false;
  femaleInput.checked = false;
  marriedInput.checked = false;
  notMarriedInput.checked = false;
  nameInput.value = "";
});
