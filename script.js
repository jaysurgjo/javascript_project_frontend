document.getElementById('submit-form').addEventListener('click', postData)

function getData () {
  const first_name_element = document.getElementById('first_name')
  const last_name_element = document.getElementById('last_name')
  const location_element = document.getElementById('location')

  return {
    first_name: first_name_element.value,
    last_name: last_name_element.value,
    location: location_element.value
  }
}

function createCard (firstName, lastName, data) {
  const first_name = firstName
  const last_name = lastName
  const location = data.fCity + data.fState
  const imgLink = data.fImage
  const drinkName = data.fDrink
  const cardContent = document.createElement('div')
  cardContent.className = 'user_card'

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
    </div>`

  document.querySelector('.content-right').appendChild(cardContent)
}

function createTable (obj) {
  const { id, name, email } = obj
  const tableContent = document.createElement('table')
  tableContent.className = 'user_table'

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
  </tbody>`

  document.querySelector('.content-right').appendChild(tableContent)
  document
    .querySelector('.delete_table')
    .addEventListener('click', function () {
      document.querySelector('.user_card').remove()
      tableContent.remove()
      document.querySelector('.content-wrapper').style.justifyContent = 'center'
    })
}

function getFetchData () {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(function (response) {
      return response.json()
    })
    .then(function (myJson) {
      createCard()
      createTable(myJson[0])
      document.getElementById('form_ele').reset()
    })
    .catch(function (error) {
      console.log('Error: ' + error)
    })
}

function postData (event) {
  event.preventDefault()
  const { first_name, last_name, location } = getData()
  fetch(
    'https://weatherdrinkapp.herokuapp.com/postDrink?' +
      new URLSearchParams({
        //get info from form for search parameters
        name: first_name + last_name,
        loc: location
      }),
    {
      method: 'POST'
    }
  )
    .then(response => response.json())
    .then(data => {
      createCard(first_name, last_name, data)
      document.getElementById('form_ele').reset()
    })
}
