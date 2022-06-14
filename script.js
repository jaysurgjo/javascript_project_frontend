createCard();

function getData() {
  const first_name_element = document.getElementById("first_name");
  const last_name_element = document.getElementById("last_name");
  const location_element = document.getElementById("location");

  return {
    first_name: first_name_element.value,
    last_name: last_name_element.value,
    locatation: location_element.value,
  };
}

function createCard(obj) {
  const { first_name, last_name, locatation } = getData();

  const cardContent = document.createElement("tr");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  editButton.innerHTML = `Edit`;
  deleteButton.innerHTML = `Delete`;

  cardContent.innerHTML = `<td>Title of Drink PlaceHolder</td>
  <td>Recipe Example</td>`;

  cardContent.appendChild(editButton);
  cardContent.appendChild(deleteButton);

  document.getElementById("card_container").appendChild(cardContent);
}

// Handle show/hide of details card
function showDetailsCard() {
  var div = document.getElementById("details");
  if (div.style.display == "none") {
    div.style.display = "";
  } else {
    div.style.display = "none";
  }
}

// added to js
