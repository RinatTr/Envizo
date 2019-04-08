const { db } = require('./index.js')
const faker = require('faker')

let communities = ['Manhattan','Queens','Bronx','Brooklyn','Staten Island'];

for (let i = 0; i < communities.length; i++) {
  let name = communities[i]
  let str = `('${name}')`
  communities.push(str)
}

let users = []

for (let i = 0; i < 25; i++) {
  let username = faker.name.findName();
  let password_digest = faker.internet.password();
  let email = faker.internet.email();
  let community_id = Math.floor(Math.random() * 5) + 1;
  let avatar_img = `https://api.adorable.io/avatars/200/${username}`
  let str = `('${username}', '${password_digest}', '${email}' ,${community_id}, '${avatar_img}')`
  users.push(str)
}

let goals = [];

for (let i = 0; i < communities.length; i++) {
  let description = "Upload a picture of your reusable grocery bag after you are back from grocery shopping."
  let title = "Reusable Grocery Bag"
  let community_id = i+1;
  let target_value = 2000
  let completed = false
  let str = `(${description}, '${title}', ${community_id}, ${target_value}, ${completed})`;
  goals.push(str)
}

let subscriptions = [];

for (let i = 0; i < 25; i++) {
  let goal_id = Math.floor(Math.random() * 5) + 1;
  let user_id = Math.floor(Math.random() * 25) + 1;
  let str = `('${goal_id}, ${user_id})`
  subscriptions.push(str)
}

let submissions = [];

for (let i = 0; i < 40; i++) {
  let img_url = `https://www.pppmi.com/wp-content/gallery/Retail-Non-Woven-Bags/whole-foods-grocery-bag.jpg`
  let subscriptions_id = Math.floor(Math.random() * 25) + 1;
  let str = `('${img_url}, ${subscriptions_id})`
  submissions.push(str)
}

let activity = ['joined','subscribed','uploaded','milestone'];

for (let i = 0; i < 40; i++) {
  let type = activity[Math.floor(Math.random() * 4) + 1]
  let activity_init_id = Math.floor(Math.random() * 25) + 1;
  let str = `('${type}', ${activity_init_id})`
  activity.push(str)
}

communities = communities.join(", ")
users = users.join(", ")
goals = goals.join(", ")
subscriptions = subscriptions.join(", ")
submissions = submissions.join(", ")
activity = activity.join(", ")

// db.none("INSERT INTO users(username, email) VALUES " + users + ";")
// .then(()=> {"INSERT INTO photos(user_id, url) VALUES " + photos + ";"})
// .catch(err => console.log(err)); //have to chain the seedings, since it's a promise (it takes time to seed the database.)
