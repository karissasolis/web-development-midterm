// NOTE: You may use the sample user in the data/user.json file to test your code before your hit the API. 
// Write your code below.

const nextBtn = document.getElementById("next-btn");
const mobileContainer = document.getElementById("mobile-container");

function renderUser(user) {
  
  const fullName = `${user.name.first} ${user.name.last}`;
  document.getElementById("user-name").textContent = fullName;

  document.getElementById("user-email").textContent = user.email;

  const loc = user.location;
  const locationText = `${loc.city}, ${loc.state}, ${loc.country}`;
  document.getElementById("user-location").textContent = locationText;

  document.getElementById("user-age").textContent = user.dob.age;

  document.getElementById("user-image").src = user.picture.large;

  mobileContainer.innerHTML = "";
  const p = document.createElement("p");
  p.innerHTML = `<strong>Mobile:</strong> <span>${user.cell}</span>`;
  mobileContainer.appendChild(p);

  if (user.gender === "male") {
    document.body.style.backgroundColor = "steelblue";
  } else if (user.gender === "female") {
    document.body.style.backgroundColor = "rebeccapurple";
  } else {
    document.body.style.backgroundColor = "#f4f6f9";
  }
}

async function fetchRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];
    renderUser(user);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

nextBtn.addEventListener("click", fetchRandomUser);

fetchRandomUser();