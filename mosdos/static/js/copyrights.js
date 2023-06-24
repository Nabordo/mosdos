// Get the current year
const currentYear = new Date().getFullYear();

// Find the element with id "copyRightsDate"
const copyRightsDateElement = document.getElementById("copyRightsDate");

// Set the inner text of the element to the current year
copyRightsDateElement.innerText = currentYear;
