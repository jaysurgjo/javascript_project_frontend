document.getElementById("submit-form").addEventListener("click", function (e) {
  e.preventDefault();
  // Getting form and adding eventlistener to it for onclick with an async function, also preventing default so it doesnt refresh.

  getFetchData();
  document.querySelector(".content-wrapper").style.justifyContent =
    "space-evenly";
  // calling getFetchData and changing the styling for that query selector.
});

function getData() {
  const first_name_element = document.getElementById("first_name");
  const last_name_element = document.getElementById("last_name");
  const location_element = document.getElementById("location");

  return {
    first_name: first_name_element.value,
    last_name: last_name_element.value,
    location: location_element.value,
    // Getting the data from the input form and returning the values.
  };
}

function createCard() {
  const { first_name, last_name, location } = getData();
  const imgLink =
    "https://static.vecteezy.com/system/resources/previews/001/971/958/original/blue-abstract-line-art-background-with-text-placeholder-vector.jpg";
  const cardContent = document.createElement("div");
  cardContent.className = "user_card";

  cardContent.innerHTML = `
    <div>
        <div class="card-img">
          <img src="${imgLink}" />
        </div>
        <div class="card-content">
          <p>${first_name} </p>
          <p>${last_name} </p>
          <p>${location} </p>
        </div>
    </div>`;
  document.querySelector(".content-right").appendChild(cardContent);
  // Getting the data from the inputs, creating an img varible, creating div element, setting an attribute to that div. Creating innerhtml and using string interpolation to pass in the data to show on our card. Appedning card_content to the div element.
}

function createTable(obj) {
  const { id, name, email } = obj;
  const tableContent = document.createElement("table");
  tableContent.className = "user_table";
  // Creating obj from data, creating table, setting attribute to table.

  tableContent.innerHTML = `
  <thead>
    <tr>
      <th>Id</th>
      <th>name</th>
      <th>email</th>
      <th>Drink</th>
      <th>Recipe</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${email}</td>
      <td>Drink item</td>
      <td>Recipe item</td>
      <td class="delete_table">Delete</td>
    </tr>
  </tbody>`;
  // Creating innerhtml for the table and adding the delete button.

  document.querySelector(".content-right").appendChild(tableContent);
  document
    .querySelector(".delete_table")
    .addEventListener("click", function () {
      document.querySelector(".user_card").remove();
      tableContent.remove();
      document.querySelector(".content-wrapper").style.justifyContent =
        "center";
    });
}

function getFetchData() {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      createCard();
      createTable(myJson[0]);
      document.getElementById("form_ele").reset();
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
}
