///////////////
// Footer Stuff
///////////////
const copyrightYear = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;
const modifiedDate = document.getElementById("lastModified").innerHTML = document.lastModified;

/////////////////////
//
/////////////////////