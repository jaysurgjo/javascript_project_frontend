function showOtherDrinkers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => {
      const otherDrinkersDiv = document.getElementById("other_drinkers");
      res.forEach((item) => {
        const li = document.createElement("li");
        const imgLink =
          "https://static.vecteezy.com/system/resources/previews/001/971/958/original/blue-abstract-line-art-background-with-text-placeholder-vector.jpg";
        li.innerHTML = `
        <div>
          <div class="card-img">
            <img src="${imgLink}" />
          </div>
          <div class="card-content">
            <h1>${item.name} </h1>
            <p>${item.username} </p>
            <p>${item.email} </p>
            <p>${item.phone} </p>
          </div>
        </div>
        `;
        otherDrinkersDiv.appendChild(li);
      });
    })
    .catch((err) => console.log("some err==>>", err));
}

showOtherDrinkers();
