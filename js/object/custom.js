const person = {
  name: ["bob", "smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  greeting: function () {
    console.log(`Hi!! I'm ${this.name[0]}.`);
  },
};

console.log(person);
person.greeting();

//함수 추가
person.farewell = function () {
  console.log("bye");
};
person.farewell();

//얕복
const person2 = person;

person.name[0] = "tomato";
console.log("person name 변경 후", person.name);
console.log(person2.name);

const person3 = {
  ...person,
  name: [...person.name],
  interests: [...person.interests],
};
person.name[0] = "bob";
person.interests[0] = "book";
console.log("person name 변경 후", person.name);
console.log("person interest 변경 후", person.interests);
console.log(person3.name);
console.log(person3.interests);
