const { db } = require('./queries/index.js')
const faker = require('faker')

let communities_names = ['Manhattan','Queens','Bronx','Brooklyn','Staten Island'];
let communities = [];

for (let i = 0; i < communities_names.length; i++) {
  let name = communities_names[i];
  let str = `('${name}')`;
  communities.push(str);
}

let users = []

for (let i = 0; i < 25; i++) {
  let username = faker.name.findName()
  username = username.split("'").join();
  let password_digest = faker.internet.password();
  let email = faker.internet.email();
  let community_id = Math.floor(Math.random() * 5) + 1;
  let avatar_img = `https://api.adorable.io/avatars/200/${email}`
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
  let str = `('${description}', '${title}', ${community_id}, ${target_value}, ${completed})`;
  goals.push(str)
}
///

  let goals1 = [];
for (let i = 0; i < communities.length; i++) {
  let description = "Take a picture of the recycling bin in your area. @$You know the three R''s (Reduce, Reuse and Recycle). But do you know how powerful they can be? The average New Yorker throws out nearly 4.5 pounds of waste each year. If we can remember our Rs, we can lower that number and stop overcrowding our landfills. @$Feed your recycling bin - it is hungry."
  let title = "Recyle"
  let community_id = i+1;
  let target_value = 2000
  let completed = false
  let str = `('${description}', '${title}', ${community_id}, ${target_value}, ${completed})`;
  goals1.push(str)

}
let goals2 = []
for (let i = 0; i < communities.length; i++) {
  let description = "Take a picture of your reusable water bottle or glass of water. @$NYC tap water is about the best in the country -- pure, clean, and refreshing. It''s also better for your wallet, health, and planet than bottled water. @$Drink up pristine water from the Catskill Mountains FOR FREE."
  let title = "Drink Tap Water"
  let community_id = i+1;
  let target_value = 2000
  let completed = false
  let str = `('${description}', '${title}', ${community_id}, ${target_value}, ${completed})`;
  goals2.push(str)

}
///
let subscriptions = [];

for (let i = 0; i < 25; i++) {
  let goal_id = Math.floor(Math.random() * 5) + 1;
  let user_id = Math.floor(Math.random() * 25) + 1;
  let str = `(${goal_id}, ${user_id})`
  subscriptions.push(str)
}

let submissions = [];

for (let i = 0; i < 40; i++) {
  let img_url = `https://www.pppmi.com/wp-content/gallery/Retail-Non-Woven-Bags/whole-foods-grocery-bag.jpg`
  let goal_id = Math.floor(Math.random() * 5) + 1;
  let user_id = Math.floor(Math.random() * 25) + 1;
  let str = `('${img_url}', ${goal_id}, ${user_id})`
  submissions.push(str)
}

let activity_names = ['joined','subscribed','uploaded','milestone'];
let activity = [];

for (let i = 0; i < 40; i++) {
  let type = activity_names[Math.floor(Math.random() * 4)]
  let user_id = Math.floor(Math.random() * 25) + 1;
  let subscription_id = Math.floor(Math.random() * 25) + 1;
  let str = `('${type}', ${user_id}, ${subscription_id})`
  activity.push(str)
}

communities = communities.join(", ")
users = users.join(", ")
goals = goals.concat(goals1).concat(goals2)
goals = goals.join(", ")
subscriptions = subscriptions.join(", ")
submissions = submissions.join(", ")
activity = activity.join(", ")

db.none("INSERT INTO communities(name) VALUES " + communities + ";")
.then(() => {
  db.none("INSERT INTO users(username, password_digest, email, community_id, avatar_img) VALUES " + users + ";")
  .then(() => {
      db.none("INSERT INTO goals(description, title, community_id, target_value, completed) VALUES " + goals +  ";")
      .then(() => {
        db.none("INSERT INTO subscriptions(goal_id, user_id) VALUES " + subscriptions + ";")
        .then(() => {
          db.none("INSERT INTO submissions(img_url, goal_id, user_id) VALUES " + submissions + ";")
          .then(() => {
            db.none("INSERT INTO activity(type, user_id, subscription_id) VALUES " + activity + ";")
          })
        })
      })
  })
})
.catch(err => console.log(err));

//have to chain the seedings, since it's a promise (it takes time to seed the database.)
