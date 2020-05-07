/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

//axios.get("https://api.github.com/users/VickieNelson").then(response => {
// console.log(response);
//});

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
//declare the variable
const cardsDiv = document.querySelector(".cards");

axios.get("https://api.github.com/users/VickieNelson")
  .then((response) => {
    let myInfo = response.data;
    cardsDiv.appendChild(createGitHubCard(myInfo));
  });

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`).then(response => {
    let followerInfo = response.data;
    cardsDiv.appendChild(createGitHubCard(followerInfo)); //taking main cards div and appending child to have the 'newgitcard and apssing in the folowerinfo
  });
});

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

function createGitHubCard(object) { //function start

  //variable
  const gitCard = document.createElement("div");
  gitCard.classList.add("card"); //add class

  const gitImg = document.createElement("img"); //variable
  gitImg.src = object.avatar_url; // img source
  gitCard.appendChild(gitImg); // append

  const gitInfo = document.createElement("div");
  gitCard.classList.add("card-info");
  gitCard.appendChild(gitInfo);

  const gitName = document.createElement("h3");
  gitName.textContent = object.name; //add text content
  gitName.classList.add("name");
  gitInfo.appendChild(gitName);

  const gitUserName = document.createElement("p");
  gitUserName.textContent = `Github username: ${object.login}`;
  gitUserName.classList.add("username");
  gitInfo.appendChild(gitUserName);

  const gitLocation = document.createElement("p");
  gitLocation.textContent = `Location: ${object.location}`;
  gitInfo.appendChild(gitLocation);

  const gitProfile = document.createElement("p");
  gitProfile.textContent = "Profile:";
  gitInfo.appendChild(gitProfile);

  const gitProfLink = document.createElement("a");
  gitProfLink.href = object.html_url;
  gitProfLink.textContent = object.html_url;
  gitProfile.appendChild(gitProfLink);

  const gitFollowers = document.createElement("p");
  gitFollowers.textContent = `Followers: ${object.followers}`;
  gitInfo.appendChild(gitFollowers);

  const gitFollowing = document.createElement("p");
  gitFollowing.textContent = `Following: ${object.following}`;
  gitInfo.appendChild(gitFollowing);

  const gitBio = document.createElement("p");
  gitBio.textContent = `Bio: ${object.bio}`;
  gitInfo.appendChild(gitBio);







  return gitCard;
} //close createGitHubCard

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
