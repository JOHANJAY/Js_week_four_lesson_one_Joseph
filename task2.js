const user = (user) => {
    const { gender, occupation } = user
    
    console.log(`This person is ${gender}, and works as a ${occupation}.`);
    
}

const user1 = {
  occupation: "doctor",
  gender: "female",
  height: "160cm",
  nationality: "Nigerian",
};

const user2 = {
  occupation: "engineer",
  gender: "male",
  height: "160cm",
  nationality: "Nigerian",
};

const user3 = {
  occupation: "Trader",
  gender: "female",
  height: "160cm",
  nationality: "Nigerian",
};

user(user1)
user(user2)
user(user3)
