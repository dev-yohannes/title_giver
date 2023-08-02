let nameInput = document.querySelector("#name");
let maleInput = document.querySelector("#male");
let femaleInput = document.querySelector("#female");
let marriedInput = document.querySelector("#married");
let notMarriedInput = document.querySelector("#not-married");
let sendButton = document.querySelector("#send");
let result = document.querySelector("#result");

// functions
function maleMarried() {
  result.innerHTML = `<span>Hello ${nameInput.value}. Your title is Mr ${nameInput.value}.</span>`;
}

function maleNotMarried() {
  if (maleInput.checked && notMarriedInput.checked) {
    result.innerHTML = `<span>Hello ${nameInput.value}. Your title is Mr ${nameInput.value}.</span>`;
  }
}

function femaleMarried() {
  if (femaleInput.checked && marriedInput.checked) {
    result.innerHTML = `<span>Hello ${nameInput.value}. Your title is Mrs ${nameInput.value}</span>`;
  }
}

function femaleNotMarried() {
  if (femaleInput.checked && notMarriedInput.checked) {
    result.innerHTML = `<span>Hello ${nameInput.value}. Your title is Ms ${nameInput.value}</span>`;
  }
}

send.addEventListener("click", function (e) {
  // getting users name
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
