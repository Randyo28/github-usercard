/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'
const data = axios.get('https://api.github.com/users/Randyo28').then(res => {
  cards.append(githubUser(res))
})
.catch(err =>
  console.log(err))
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
console.log(axios.get('https://api.github.com/users/Randyo28'))
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const cards = document.querySelector('.cards')

// cards.append(githubUser({data}))

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers','justsml',
  'luishrd',
  'bigknell'
];


function followers(names){
axios.get(`https://api.github.com/users/${names}`).then(res => {
  cards.append(githubUser(res))
})
.catch(err => {
  console.log(err)
})
}
followers('tetondan')
followers('dustinmyers')
followers('justsml')
followers('luishrd')
followers('bigknell')

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


function githubUser({data}){
  //create elements
  const divCard = document.createElement('div')
  const img = document.createElement('img')
  const divInfo = document.createElement('div')
  const h3Name = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const addressLink = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  //Give classNames
  divCard.className = 'card'
  divInfo.className = 'card-info'
  h3Name.className = 'name'
  userName.className = 'username'

  //text-content
  img.setAttribute('src', `${data.avatar_url}`)
  h3Name.textContent = `${data.name}`
  userName.textContent = `${data.login}`
  location.textContent = `${data.location}`
  addressLink.setAttribute('href', `${data.html_url}`)
  addressLink.textContent = `${data.html_url}`
  followers.textContent = `${data.followers}`
  following.textContent = `${data.following}`
  bio.textContent = `${data.bio}`

  //appending elements
  // cards.append(divCard)
  divCard.append(img)
  divCard.append(divInfo)
  divInfo.append(h3Name)
  divInfo.append(userName)
  divInfo.append(location)
  divInfo.append(profile)
  profile.append(addressLink)
  divInfo.append(followers)
  divInfo.append(following)

  return divCard
}
 console.log(githubUser(data))
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
