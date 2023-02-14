// const coffee = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(Error("Ваш кофе готов!"));
//   }, 1500);
// });
// coffee
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const family = [
  { member: "mother", id: 111, coffee: "Latte" },
  {
    member: "father",
    id: 222,
    coffee: "Espresso",
  },
  {
    member: "son",
    id: 333,
    coffee: "Cappuchino",
  },
];

const getCoffee = (member) => {
  const coffeePromise = fetch("https://api.sampleapis.com/coffee/hot");
  return coffeePromise
    .then((data) => data.json())
    .then((list) => {
      const coffee = list.find((res) => res.title === member.coffee);
      return {
        ...member,
        coffee,
      };
    });
};

const getFamilyMember = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const member = family.find((res) => res.id == id);
      if (member) {
        resolve(member);
      } else {
        reject(Error("Член семьи не найден"));
      }
    }, 1500);
  });
};

getFamilyMember(12)
  .then((data) => getCoffee(data))
  .then((newMember) => console.log(newMember))
  .catch((error) => {
    console.log(error);
  });
