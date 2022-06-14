
createCard();
=======
document.getElementById("input_form").addEventListener("submit", function (e) {
  e.preventDefault();

  createCard();
  document.getElementById("input_form").reset();
});

const createHead = document.createElement("header");

createHead.innerHTML = `<header></header>`;
createHead.innerText = `This is the header`;

document.body.appendChild(createHead);

const createFoot = document.createElement("footer");

createFoot.innerHTML = `<footer></footer>`;
createFoot.innerText = `This is the footer`;

document.body.appendChild(createFoot);


function getData() {
  const first_name_element = document.getElementById("first_name");
  const last_name_element = document.getElementById("last_name");
  const location_element = document.getElementById("location");

  return {
    first_name: first_name_element.value,
    last_name: last_name_element.value,
    location: location_element.value,
  };
}

function createCard(obj) {
  const { first_name, last_name, location } = getData();

  const cardContent = document.createElement("tr");
  const deleteButton = document.createElement("button");

  deleteButton.addEventListener("click", () => deleteCard(cardContent));

  deleteButton.innerHTML = `Delete`;

  cardContent.innerHTML = `
  <td>${first_name} ${last_name}</td>
  <td>${location}</td>
  <td>Title of Drink PlaceHolder</td>
  <td>Recipe Example</td>`;

  cardContent.appendChild(deleteButton);

  document.getElementById("card_container").appendChild(cardContent);
}

function deleteCard(record) {
  record.remove();
}
// fixed js
