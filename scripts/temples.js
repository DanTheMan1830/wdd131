const copyrightYear = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;

const modifiedDate = document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});
