const coffee = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error("Ваш кофе готов!"));
  }, 1500);
});
coffee
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
