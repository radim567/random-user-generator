function fetchUser() {
  fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((data) => {
      displayUser(data.results[0]);
    });
}

function displayUser(user) {
  if (user.gender === 'female') {
    document.body.style.backgroundColor = 'pink';
  } else {
    document.body.style.backgroundColor = 'lightblue';
  }
}

fetchUser();
