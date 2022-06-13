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
