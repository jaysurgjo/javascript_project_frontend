function showOtherDrinkers () {
  fetch('https://weatherdrinkapp.herokuapp.com/getAllDrinks')
    .then(response => response.json())
    .then(data => {
      const otherDrinkersDiv = document.getElementById('other_drinkers')
      data.forEach(item => {
        const li = document.createElement('li')
        const imgLink = item.fImage
        li.innerHTML = `
        <div>
          <div class="card-img">
            <img src="${imgLink}" />
          </div>
          <div class="card-content">
            <h1>${item.fDrink} </h1>
            <h2>${item.fName} </h2>
            <p>${item.fCity}, ${item.fState} </p>
          </div>
        </div>
        `
        otherDrinkersDiv.appendChild(li)
      })
    })
    .catch(err => console.log('err:', err))
}

showOtherDrinkers()
