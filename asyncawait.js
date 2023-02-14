// const myGit = fetch("https://api.github.com/users/Kasaklalita")
//   .then((response) => {
//     return response.json().then((res) => console.log(res));
//   })
//   .catch((error) => console.log(error));

function sleep(time) {
  return new Promise((resolve, reject) => {
    if (time < 500) {
      reject("Слишком мало сна");
    }
    setTimeout(() => resolve(`Was sleeping for ${time}`), time);
  });
}

sleep(1500)
  .then((res) => {
    console.log(res);
    return sleep(1000);
  })
  .then((res) => {
    console.log(res);
    return sleep(500);
  })
  .then((res) => {
    console.log(res);
    return sleep(1500);
  })
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
console.log("asdf");

// setInterval(() => console.log(Date.now()), 500);
