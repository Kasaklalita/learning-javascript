const myGit = fetch("https://api.github.com/users/Kasaklalita")
  .then((response) => {
    return response.json().then((res) => console.log(res));
  })
  .catch((error) => console.log(error));
