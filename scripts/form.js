///////////////
// Footer Stuff
///////////////
const copyrightYear = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;
const modifiedDate = document.getElementById("lastModified").innerHTML = document.lastModified;

/////////////////////
// Product Name Stuff
/////////////////////
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const productList = document.querySelector('select');

products.forEach(product => {
    let option = document.createElement('option');
    option.value = product.id;
    option.textContent = `${product.name} — Rating: ${product.averagerating}`;
    productList.appendChild(option);
});

//////////////////////
// Local Storage Stuff
//////////////////////

const button = document.querySelector('button');
const form = document.querySelector('form');

let reviewCount = getReviewCount() || 0;

button.addEventListener('click', function () {

});

form.addEventListener('submit', function () {
    reviewCount++;
    setReviewCount();
});

function setReviewCount() { localStorage.setItem('userReviewCount', JSON.stringify(reviewCount)); };

function getReviewCount() { return JSON.parse(localStorage.getItem('userReviewCount')); };