const currentyear = document.querySelector("#currentyear");

const today = Date.now();

console.log(today.getFullYear());

currentyear.innerHTML = 'getDay(): <span id="currentyear">${today.getDay()}</span>';