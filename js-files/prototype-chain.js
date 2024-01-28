function userCreateor(name, score) {
  const newUser = Object.create(userFunctionStore);

  newUser.name = name;
  newUser.score = score;

  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("Logged in");
  },
};

const user1 = userCreateor("Yes", 9);
const user2 = userCreateor("No", 5);

user1.increment();

console.log({ user1, user2 });

// vai buscar pelo método hasOwnProperty no objeto user1, se não encontrar vai buscar no objeto userFunctionStore, se não encontrar vai buscar no objeto Object.prototype pela propriedade __proto__
user1.hasOwnProperty("score");

// use new keyword
function createUser(name, age) {
  this.name = name;
  this.age = age;
}

createUser.prototype.increment = function () {
  this.age++;
};

const newUser1 = new createUser("test", 1);
newUser1.increment();

console.log(newUser1);


// the syntax sugar for the new function aproach
class CreateAUserFromClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  increment() {
    this.age++;
  }
}

const newUser2FromClass = new CreateAUserFromClass("test2", 2);
