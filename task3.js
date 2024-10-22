const details = document.getElementById("details");

const myArr = [
  {
    firstName: "Jane",
    lastName: "John",
    complexion: "Chocolate",
    occupation: "Trader",
  },

  {
    firstName: "Alice",
    lastName: "Mark",
    complexion: "fair",
    occupation: "nurse",
  },

  {
    firstName: "Emmanuel",
    lastName: "Inua",
    complexion: "Chocolate",
    occupation: "Software Developer",
  },

  {
    firstName: "Princewill",
    lastName: "John",
    complexion: "Fair",
    occupation: "Achitect",
  },
];

myArr.forEach((item) => {
  const newDetails = document.createElement("div");

  const userInfo = `
        <h3>${item.firstName} ${item.lastName}</h3>
        <p>Complexion: ${item.complexion}</p>
        <p>Occupation: ${item.occupation}</p>
      `;

  newDetails.innerHTML = userInfo;
  details.append(newDetails);
});
