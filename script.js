createHeader();
createFooter();

function createHeader() {
  const createHead = document.createElement("HEADER");

  createHead.innerHTML = `<header></header>`;
  createHead.innerText = `This is the header`;

  document.body.appendChild(createHead);
}

function createFooter() {
  const createFoot = document.createElement("FOOTER");

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

function createCard() {}
