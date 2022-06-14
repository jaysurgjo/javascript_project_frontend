createHeader();
createFooter();
createCard();

function createHeader() {
  const createHead = document.createElement("header");

  createHead.innerHTML = `<header></header>`;
  createHead.innerText = `This is the header`;

  document.body.appendChild(createHead);
}

function createFooter() {
  const createFoot = document.createElement("footer");

  createFoot.innerHTML = `<footer></footer>`;
  createFoot.innerText = `This is the footer`;

  document.body.appendChild(createFoot);
}

document.getElementById("button_container");

const homeButton = document.createElement("button");
const otherUserButton = document.createElement("button");

homeButton.innerHTML = `Home`;
otherUserButton.innerHTML = `Other User Entries`;

document.getElementById("button_container").appendChild(homeButton);
document.getElementById("button_container").appendChild(otherUserButton);

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

// added to js
