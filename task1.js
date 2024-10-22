const greetings = (name, dob, year, location) => {
  const age = year - dob;

  const greeting = `Hello ${name} from ${location}, your current age is ${age}`;
  console.log(greeting);

  return age;
};
greetings("Jay", 1999, 2024, "Rivers");
