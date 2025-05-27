const RequestBtn = document.getElementById("submit-btn");
const resultsSection = document.getElementById("results-section");
RequestBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  RequestBtn.textContent = "Loading...";
  RequestBtn.disabled = true;
  const userInput = document.getElementById("user-input").value;
  if (userInput === "") {
    resultsSection.textContent = "Please enter your full name";
    return;
  }
  try {
    const responseDisplay = await fetch(
      `https://api.nationalize.io/?name=${userInput}`
    );
    const result = await responseDisplay.json();
    console.log(result);
    
    const { name, country } = result;
    if(country.length>0){

    resultsSection.innerHTML = `<p>${name} is form ${country[0].country_id} with ${ country[0].probability * 100 }% certainty</p>`;
}
  } catch (error) {
    resultsSection.textContent =
      "An error occurred while fetching data. Please try again.";
    return;
  }
  console.log(result);
  RequestBtn.removeAttribute("disabled");
  RequestBtn.innerHTML = `<p>Search</p>`;
});
