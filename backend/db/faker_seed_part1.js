const { db } = require('./index.js')
const faker = require('faker')

let community = ['Manhattan','Queens','Bronx','Brooklyn','Staten Island'];

for (let i = 0; i < 25; i++) {
  //creates a string which can be put after VALUES
  let username = faker.name.findName();
  let email = faker.internet.email();
  let str = `('${username}', '${email}')`
  users.push(str)
}

let photos = [];

for (let i = 0; i < 50; i++) {
  //creates a string which can be put after VALUES
  let user_id = Math.floor(Math.random() * 25) + 1;
  let url = faker.image.imageUrl();
  let str = `(${user_id}, '${url}')`;
  photos.push(str)
}

users = users.join(", ")
photos = photos.join(", ")

db.none("INSERT INTO users(username, email) VALUES " + users + ";")
.then(()=> {"INSERT INTO photos(user_id, url) VALUES " + photos + ";"})
.catch(err => console.log(err)); //have to chain the seedings, since it's a promise (it takes time to seed the database.)
