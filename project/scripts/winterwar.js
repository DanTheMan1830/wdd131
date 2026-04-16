///////////////
// Footer Stuff
///////////////
const copyrightYear = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;
const modifiedDate = document.getElementById("lastModified").innerHTML = document.lastModified;

/////////////////
// Hamburger Menu
/////////////////

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");


hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

//////////////
// War Facts
//////////////
const warFacts = [
    {
        label: "Date",
        value: "Nov 1939 – March 1940"
    },
    {
        label: "Invading Force",
        value: "Soviet Union"
    },
    {
        label: "Defending Force",
        value: "Finland"
    },
    {
        label: "Location",
        value: "Karelian Isthmus"
    }
];

const labelList = document.querySelector('.label');
const valueList = document.querySelector('.value');


warFacts.forEach(entry => {
    let liLabel = document.createElement('li');
    let liValue = document.createElement('li');

    liLabel.textContent = entry.label;
    liValue.textContent = entry.value;

    labelList.appendChild(liLabel);
    valueList.appendChild(liValue);
});

//////////////////////
// Local Storage Stuff
//////////////////////

