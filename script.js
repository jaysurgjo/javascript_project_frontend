createHeader();

function createHeader() {
  const createHead = document.createElement("HEADER");

  createHead.innerHTML = `<header>This is the header</header>`;

  document.body.appendChild(createHead);
}
