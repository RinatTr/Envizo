-- DROP DATABASE IF EXISTS envizo;
-- CREATE DATABASE envizo;

-- \c envizo;

CREATE TABLE communities (
  id SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR UNIQUE NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  community_id INT REFERENCES communities(id),
  avatar_img VARCHAR,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE goals (
  id SERIAL PRIMARY KEY,
  description VARCHAR,
  title VARCHAR,
  community_id INT REFERENCES communities(id),
  target_value INT,
  completed BOOLEAN,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subscriptions (
  id SERIAL PRIMARY KEY,
  goal_id INT REFERENCES goals(id),
  user_id INT REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(goal_id, user_id)
);

CREATE TABLE submissions (
  id SERIAL PRIMARY KEY,
  img_url VARCHAR,
  goal_id INT REFERENCES goals(id),
  user_id INT REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE activity (
  id SERIAL PRIMARY KEY,
  type VARCHAR,
  user_id INT REFERENCES users(id),
  subscription_id INT REFERENCES subscriptions(id) ON DELETE CASCADE,
  time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- communities
INSERT INTO communities(name)
VALUES ('Manhattan'),('Queens'),('Bronx'),('Brooklyn'),
('Staten Island');
-- users
INSERT INTO users(username, password_digest, email, community_id, avatar_img)
VALUES
('Mitejada','$2a$10$nv25B38zarRD5e3eeykARuuqpJIz.4HN3zQyFlbxfgHd2MSUev3.W','mitejada2011@gmail.com',1,'https://envizo-img.s3.amazonaws.com/A7CBDB39-46CF-4722-802B-FAF8A22EA388.jpeg'),
('xpectro','$2a$10$NeZucEU3D64.whR3vjb6HuyzkeR.KKLbz5GI6mAqNBr.I74vfSmVO','jon',2,'https://envizo-img.s3.amazonaws.com/leme.jpg'),
('Aaron','$2a$10$8rNBAb1X4j1IsbTqruVEUOTQdH3K.encsFnhivAyLiubEO9Eo1uQO','aaron@a.com',1,'https://envizo-img.s3.amazonaws.com/user4.png'),
('Rayliss','$2a$10$WLv5oi0tnd6DkloGqfcsDewdUEytex55ZSdA71tt2d1GFqggoT0ey','ray@ray.com',1,'https://envizo-img.s3.amazonaws.com/user5.png'),
('Juju','$2a$10$34E1XRa6mSsMGloExL9DBOVfrQUNsyzrOIbOF5g0m5oEtBksPPTsa','Juju@ju.com',1,'https://envizo-img.s3.amazonaws.com/user3.png'),
('Aiden','$2a$10$v.8andXAHBpHV1.dOimiH.a7F3EPOWX.rdlQV768eP59zZAl7BYFC','aiden@a.com',1,'https://envizo-img.s3.amazonaws.com/user2.png'),
('Emma','$2a$10$Qvfcs5VD/W2TRMdxagjXXuY36IOKGqZswDKLwQM3rd/RIEy7SmM5y','Emma@em.com',1,'https://envizo-img.s3.amazonaws.com/user1.png'),
('Bluebadger','$2a$10$eWMRaEPk2Xt9lbUdXZ2dgeXpjjyDDwbz7Q4VqxVEttUR6sKU509nS','badger@blue.com',1,'https://envizo-img.s3.amazonaws.com/bby.jpg'),
('Ilana','$2a$10$nRzfcT4ggIRAiHH3i99DLOOEpotpW8iZXa25uJpZ1YUeKV3kb.6i2','ilana',2,'https://envizo-img.s3.amazonaws.com/bby.jpg'),
('Shaggy','$2a$10$hzsd8I/j5w5yV6ZekugJiuvI7DEIsgCwnnJPSXlHNfXgZLxh0ph9W','doo@scooby',2,'https://envizo-img.s3.amazonaws.com/shaggy.jpg'),
('Leo','$2a$10$its.GUhVKVE.xvDXulukQOnRSOjL0jJMJ5y5PoVZWdWUsV9BKzgLu','leo@pursuit.org',5,'https://envizo-img.s3.amazonaws.com/_Ninja-2-512.png'),
('Leo1','$2a$10$RGiPoSPzTJik62Ic27EvUe3BxpX2xBbk735WMg9n0OgcYhKeZRa/a','lu@gmail.com',5,'https://envizo-img.s3.amazonaws.com/893d8cfa6f429bdf6283ba5b2e432f14.png'),
('Jason','$2a$10$C79S7Uk9XvPm/roo3Z4kfuR7BswfIClk7hYTevazyDW2AYeqXt0EC','jason@gmail.com',5,'https://envizo-img.s3.amazonaws.com/avatar_1550144758.png'),
('Leo2','$2a$10$s6MYcvmCCLy4zpbjci9uO.21DgEZVGyhkD97YkO6iQ0Jsj/I66mVS','leolu@gmail.com',5,'https://envizo-img.s3.amazonaws.com/e6690e38d505dfb75eda026a1c424416.png'),
('Leo3','$2a$10$6Vk9Ynryjy5jqkhFsDAqLeg7POYHgMNce4KblCIhMrLl6iZRkbLcm','leo3@gmail.com',5,'https://envizo-img.s3.amazonaws.com/image.jpeg'),
('Leo4','$2a$10$hkOL8pbotDCs.B0gI8eifuWL2hMnLMP/8hUqPGI2ws5rKkc6rkxni','leo4@gmail.com',5,'https://envizo-img.s3.amazonaws.com/image.jpeg'),
('Leo5','$2a$10$k4OPpfIip7ilhZiZVcZg6uY2x.auvPQr71A2mi7LjJrlN7RAQ3h82','Leo5@gmail.com',5,'https://envizo-img.s3.amazonaws.com/images.jpeg'),
('Dylan','$2a$10$5b3j5LKtqPpYmNSGGLZkru49Hq0U42CR5ZYgXDMXUKtmqYXohR1hi','dylan@d.com',3,'https://envizo-img.s3.amazonaws.com/buser1.png'),
('Logan','$2a$10$W589P/USxcgVjeN25IcI..DmPlJN.8nAVkGtSunCK3onU7.qeV2um','Logan@l.com',3,'https://envizo-img.s3.amazonaws.com/buser2.png'),
('Raphy','$2a$10$LrS5Jz8tpITEJyAS1IlbaO0B6o2KZFCtq3Jai95od5bPUSVUBB8Dq','Raphy@r.com',3,'https://envizo-img.s3.amazonaws.com/buser3.png'),
('Melanie','$2a$10$C/VFAkeHFH9RH6rus5/tael23W1wOjc1u//AkdLjeqMiI.2tFy.zW','melanie@m.com',3,'https://envizo-img.s3.amazonaws.com/buser4.png'),
('Miguel','$2a$10$1VUx9LMEmWRaW5CPSI/SpOSs0FX6wQZXCB/hWj8xJRRVbdTVElmNi','miguel@m.com',3,'https://envizo-img.s3.amazonaws.com/buser5.png'),
('dudette','$2a$10$lWpPUnoNLP.D6NNBMFVWr.Q4T6QnysHTnzDiNqDerbBA/rrTepPI.','ther@resa.org',2,'https://envizo-img.s3.amazonaws.com/1b66c2b2b09bb95cb54d8cb259f27123.jpg'),
('Bilbo','$2a$10$Wqi284.7tqhZLxwsiu8gD.b084jXkSSOmcILg5tdvXRyh.8NptR1i','Bilbo@baggings.com',1,'https://envizo-img.s3.amazonaws.com/634fc7589ecb8b3229528763c2a246a1--cowboy-hats-cowboys.jpg'),
('Leo10','$2a$10$D8SCugnOrsQm9kbG8S6RzODM2.s7gXR5WxwjTsnEDaS5QNhH0fUvG','leo10@gmail.com',1,'https://envizo-img.s3.amazonaws.com/avatar_1550144758.png'),
('Leo11','$2a$10$g43fiQak7MDybvq5UObSauvLH45WNaUuneLOUDbFB3XKZekuRo.Zq','leo11',1,'https://envizo-img.s3.amazonaws.com/BaG.png'),
('AKIAX7PA4OK5NUZFVHZC','$2a$10$kt94z76X.B38kbFAITwDU.JbAE0HP9Dyi70bfqqGxusFCCQMcBowK','alex+envizo@alexquick.com',4,'https://envizo-img.s3.amazonaws.com/dog.png'),
('Yari','$2a$10$/yDp4UNFrNArwhhz6eb1jeSMewiEqgQFBvbrFqkpb7ANuH/Yx58Ja','Yari@y.com',3,'https://envizo-img.s3.amazonaws.com/6016BC68-CD23-478C-B530-C0647D32155D.jpeg');

-- goals
INSERT INTO goals(description, title, community_id, target_value, completed)
VALUES
('Take a picture of your reusable bag after you have gone shopping. @$Reusable bags look great, don''t rip, and carry lots of stuff. Keep a box of them near your front door so you remember to take them to the store. It''s surprisingly convenient! @$Keep the Sky and the Sea Plastic free','Reusable Grocery Bag',1,500,false),
('Take a picture of your reusable bag after you have gone shopping. @$Reusable bags look great, don''t rip, and carry lots of stuff. Keep a box of them near your front door so you remember to take them to the store. It''s surprisingly convenient! @$Keep the Sky and the Sea Plastic free','Reusable Grocery Bag',2,500,false),
('Take a picture of your reusable bag after you have gone shopping. @$Reusable bags look great, don''t rip, and carry lots of stuff. Keep a box of them near your front door so you remember to take them to the store. It''s surprisingly convenient! @$Keep the Sky and the Sea Plastic free','Reusable Grocery Bag',3,500,false),
('Take a picture of your reusable bag after you have gone shopping. @$Reusable bags look great, don''t rip, and carry lots of stuff. Keep a box of them near your front door so you remember to take them to the store. It''s surprisingly convenient! @$Keep the Sky and the Sea Plastic free','Reusable Grocery Bag',4,500,false),
('Take a picture of your reusable bag after you have gone shopping. @$Reusable bags look great, don''t rip, and carry lots of stuff. Keep a box of them near your front door so you remember to take them to the store. It''s surprisingly convenient! @$Keep the Sky and the Sea Plastic free','Reusable Grocery Bag',5,500,false),
('Take a picture of the recycling bin in your area. @$You know the three R''s (Reduce, Reuse and Recycle). But do you know how powerful they can be? The average New Yorker throws out nearly 4.5 pounds of waste each year. If we can remember our Rs, we can lower that number and stop overcrowding our landfills. @$Feed your recycling bin - it is hungry.','Recycle',1,500,false),
('Take a picture of the recycling bin in your area. @$You know the three R''s (Reduce, Reuse and Recycle). But do you know how powerful they can be? The average New Yorker throws out nearly 4.5 pounds of waste each year. If we can remember our Rs, we can lower that number and stop overcrowding our landfills. @$Feed your recycling bin - it is hungry.','Recycle',2,500,false),
('Take a picture of the recycling bin in your area. @$You know the three R''s (Reduce, Reuse and Recycle). But do you know how powerful they can be? The average New Yorker throws out nearly 4.5 pounds of waste each year. If we can remember our Rs, we can lower that number and stop overcrowding our landfills. @$Feed your recycling bin - it is hungry.','Recycle',3,500,false),
('Take a picture of the recycling bin in your area. @$You know the three R''s (Reduce, Reuse and Recycle). But do you know how powerful they can be? The average New Yorker throws out nearly 4.5 pounds of waste each year. If we can remember our Rs, we can lower that number and stop overcrowding our landfills. @$Feed your recycling bin - it is hungry.','Recycle',4,500,false),
('Take a picture of the recycling bin in your area. @$You know the three R''s (Reduce, Reuse and Recycle). But do you know how powerful they can be? The average New Yorker throws out nearly 4.5 pounds of waste each year. If we can remember our Rs, we can lower that number and stop overcrowding our landfills. @$Feed your recycling bin - it is hungry.','Recycle',5,500,false),
('Take a picture of your reusable water bottle or glass of water. @$NYC tap water is about the best in the country -- pure, clean, and refreshing. It''s also better for your wallet, health, and planet than bottled water. @$Drink up pristine water from the Catskill Mountains FOR FREE.','Drink Tap Water',1,500,false),
('Take a picture of your reusable water bottle or glass of water. @$NYC tap water is about the best in the country -- pure, clean, and refreshing. It''s also better for your wallet, health, and planet than bottled water. @$Drink up pristine water from the Catskill Mountains FOR FREE.','Drink Tap Water',2,500,false),
('Take a picture of your reusable water bottle or glass of water. @$NYC tap water is about the best in the country -- pure, clean, and refreshing. It''s also better for your wallet, health, and planet than bottled water. @$Drink up pristine water from the Catskill Mountains FOR FREE.','Drink Tap Water',3,500,false),
('Take a picture of your reusable water bottle or glass of water. @$NYC tap water is about the best in the country -- pure, clean, and refreshing. It''s also better for your wallet, health, and planet than bottled water. @$Drink up pristine water from the Catskill Mountains FOR FREE.','Drink Tap Water',4,500,false),
('Take a picture of your reusable water bottle or glass of water. @$NYC tap water is about the best in the country -- pure, clean, and refreshing. It''s also better for your wallet, health, and planet than bottled water. @$Drink up pristine water from the Catskill Mountains FOR FREE.','Drink Tap Water',5,500,false);
-- subscriptions
INSERT INTO subscriptions(goal_id, user_id, created_at)
VALUES
(1, 6, '2019-05-09 19:06:13.879373'),
(12, 7, '2019-05-09 19:07:14.273244'),
 (7,14, '2019-05-09 19:28:42.100436'),
(12,15, '2019-05-09 20:46:06.612533'),
 (2,14, '2019-05-09 20:50:29.647704'),
 (7, 7, '2019-05-09 20:56:58.47817'),
 (2,15, '2019-05-09 21:00:46.997571'),
 (6, 6, '2019-05-10 00:00:00.095866'),
(11, 6, '2019-05-10 00:00:29.676139'),
 (1,11, '2019-05-10 00:02:22.314402'),
 (6,11, '2019-05-10 00:02:27.04041'),
(11,11, '2019-05-10 00:02:32.121115'),
 (6, 9, '2019-05-10 00:04:18.78321'),
(11, 9, '2019-05-10 00:04:21.043509'),
 (8,26, '2019-05-10 00:05:02.681247'),
 (3,27, '2019-05-10 00:06:06.533989'),
(10,16, '2019-05-10 16:16:23.655371'),
(15,16, '2019-05-10 16:16:31.184155'),
 (5,16, '2019-05-10 16:16:49.555446'),
 (6,12, '2019-05-10 16:17:20.446124'),
 (7,15, '2019-05-10 16:21:18.243815'),
 (6, 8, '2019-05-11 04:20:07.46331'),
 (1, 8, '2019-05-11 04:20:23.517082'),
 (3,26, '2019-05-11 04:22:01.006904'),
(13,26, '2019-05-11 04:22:14.992231'),
 (2, 7, '2019-05-13 05:24:56.918526');

-- submissions
INSERT INTO submissions(img_url, goal_id, user_id, created_at)
VALUES
('https://envizo-img.s3.amazonaws.com/water.jpg' ,12 , 7 , '2019-05-09 19:24:20.092046'),
 ('https://envizo-img.s3.amazonaws.com/water.jpg' , 7 ,14 , '2019-05-09 19:28:55.482228'),
 ('https://envizo-img.s3.amazonaws.com/water2.jpg',12 ,15 , '2019-05-09 20:47:06.890075'),
 ('https://envizo-img.s3.amazonaws.com/bag1.jpg', 2 ,14 , '2019-05-09 20:52:02.491431'),
 ('https://envizo-img.s3.amazonaws.com/can1.jpg', 7 ,14 , '2019-05-09 20:55:53.329689'),
 ('https://envizo-img.s3.amazonaws.com/can3.jpg', 7 , 7 , '2019-05-09 20:57:28.007255'),
 ('https://envizo-img.s3.amazonaws.com/bag2.jpg', 2 ,15 , '2019-05-09 21:01:49.217759'),
 ('https://envizo-img.s3.amazonaws.com/download.jpeg' , 7 ,15 , '2019-05-10 16:24:39.752669'),
 ('https://envizo-img.s3.amazonaws.com/585778a1d7654788829146.jpg',10 ,16 , '2019-05-10 16:24:54.071251'),
 ('https://envizo-img.s3.amazonaws.com/BaG.png' ,10 ,16 , '2019-05-10 16:25:02.940919'),
 ('https://envizo-img.s3.amazonaws.com/noplasticbag.jpg',10 ,16 , '2019-05-10 16:25:17.965511'),
 ('https://envizo-img.s3.amazonaws.com/Recycle_Flower_Tote_Bag_300x300.jpg' ,10 ,16 , '2019-05-10 16:25:26.459303'),
 ('https://envizo-img.s3.amazonaws.com/585778a1d7654788829146.jpg',10 ,16 , '2019-05-10 16:25:36.984907'),
 ('https://envizo-img.s3.amazonaws.com/BaG.png' ,10 ,16 , '2019-05-10 16:25:42.646095'),
 ('https://envizo-img.s3.amazonaws.com/BaG.png' ,10 ,16 , '2019-05-10 16:25:48.666327'),
 ('https://envizo-img.s3.amazonaws.com/Recycle_Flower_Tote_Bag_300x300.jpg' ,10 ,16 , '2019-05-10 16:25:52.59047'),
 ('https://envizo-img.s3.amazonaws.com/Recycle_Flower_Tote_Bag_300x300.jpg' ,10 ,16 , '2019-05-10 16:26:06.933283'),
 ('https://envizo-img.s3.amazonaws.com/BaG.png' ,10 ,16 , '2019-05-10 16:26:16.388496'),
 ('https://envizo-img.s3.amazonaws.com/BaG.png' ,10 ,16 , '2019-05-10 16:26:21.343916'),
 ('https://envizo-img.s3.amazonaws.com/585778a1d7654788829146.jpg',10 ,16 , '2019-05-10 16:26:26.844183'),
 ('https://envizo-img.s3.amazonaws.com/bottle.jpg',15 ,16 , '2019-05-10 16:28:26.711989'),
('https://envizo-img.s3.amazonaws.com/bottle3.jpeg',15 ,16 , '2019-05-10 16:28:37.026956'),
('https://envizo-img.s3.amazonaws.com/bottle.jpg',15 ,16 , '2019-05-10 16:28:42.12023'),
('https://envizo-img.s3.amazonaws.com/bottle.jpg',15 ,16 , '2019-05-10 16:28:48.510485'),
('https://envizo-img.s3.amazonaws.com/bottle1.jpg' ,15 ,16 , '2019-05-10 16:28:53.506065'),
('https://envizo-img.s3.amazonaws.com/bottle1.jpg' ,15 ,16 , '2019-05-10 16:28:58.745166'),
('https://envizo-img.s3.amazonaws.com/bottle.jpg',15 ,16 , '2019-05-10 16:29:02.984047'),
('https://envizo-img.s3.amazonaws.com/bottle3.jpeg',15 ,16 , '2019-05-10 16:29:11.131043'),
('https://envizo-img.s3.amazonaws.com/BE13E09A-430C-4502-BAE5-3B17E7E00B3C.jpeg' , 3 ,27 , '2019-05-10 16:29:57.759027'),
('https://envizo-img.s3.amazonaws.com/noplasticbag.jpg', 5 ,16 , '2019-05-10 16:30:42.821027'),
('https://envizo-img.s3.amazonaws.com/BaG.png' , 5 ,16 , '2019-05-10 16:30:52.25824'),
('https://envizo-img.s3.amazonaws.com/BaG.png' , 5 ,16 , '2019-05-10 16:33:57.70481'),
('https://envizo-img.s3.amazonaws.com/noplasticbag.jpg', 5 ,16 , '2019-05-10 16:34:06.64334'),
('https://envizo-img.s3.amazonaws.com/Recycle_Flower_Tote_Bag_300x300.jpg' , 5 ,16 , '2019-05-10 16:34:11.796841'),
 ('https://envizo-img.s3.amazonaws.com/B51992F9-CCFE-42C7-A564-870D41196A0E.jpeg' , 6 , 8 , '2019-05-11 04:19:17.1277'),
 ('https://envizo-img.s3.amazonaws.com/AF79B84D-04F0-4D69-827F-CB6666682872.jpeg' , 1 , 8 , '2019-05-11 04:20:35.606704');

INSERT INTO activity(type, user_id, subscription_id, time_stamp)
VALUES
('joined' , 6 ,NULL, '2019-05-09 19:00:03.485026'),
 ('joined' , 7 ,NULL, '2019-05-09 19:00:59.165289'),
 ('subscribed' , 6 , 1 , '2019-05-09 19:06:13.883552'),
 ('subscribed' , 7 , 2 , '2019-05-09 19:07:14.276347'),
 ('joined' , 8 ,NULL, '2019-05-09 19:12:05.075121'),
 ('joined' , 9 ,NULL, '2019-05-09 19:15:32.263439'),
 ('joined' ,10 ,NULL, '2019-05-09 19:16:29.539707'),
 ('joined' ,11 ,NULL, '2019-05-09 19:16:59.309969'),
 ('joined' ,12 ,NULL, '2019-05-09 19:17:34.637531'),
 ('joined' ,13 ,NULL, '2019-05-09 19:26:05.9235'),
 ('joined' ,14 ,NULL, '2019-05-09 19:28:23.832472'),
 ('subscribed' ,14 , 3 , '2019-05-09 19:28:42.102907'),
 ('joined' ,15 ,NULL, '2019-05-09 19:49:28.264635'),
 ('joined' ,16 ,NULL, '2019-05-09 19:54:12.245933'),
 ('joined' ,17 ,NULL, '2019-05-09 19:57:35.10129'),
 ('joined' ,18 ,NULL, '2019-05-09 19:58:39.967019'),
 ('joined' ,19 ,NULL, '2019-05-09 19:59:18.449645'),
 ('joined' ,20 ,NULL, '2019-05-09 20:00:04.715643'),
 ('joined' ,21 ,NULL, '2019-05-09 20:00:33.710805'),
 ('joined' ,22 ,NULL, '2019-05-09 20:01:13.301601'),
 ('joined' ,23 ,NULL, '2019-05-09 20:14:02.49491'),
 ('joined' ,24 ,NULL, '2019-05-09 20:14:56.207075'),
 ('joined' ,25 ,NULL, '2019-05-09 20:15:59.144892'),
 ('joined' ,26 ,NULL, '2019-05-09 20:16:49.217514'),
 ('joined' ,27 ,NULL, '2019-05-09 20:17:28.814972'),
 ('subscribed' ,15 , 4 , '2019-05-09 20:46:06.615762'),
 ('subscribed' ,14 , 5 , '2019-05-09 20:50:29.650539'),
 ('subscribed' , 7 , 6 , '2019-05-09 20:56:58.481378'),
 ('subscribed' ,15 , 7 , '2019-05-09 21:00:47.003949'),
 ('joined' ,28 ,NULL, '2019-05-09 21:47:55.460891'),
 ('subscribed' , 6 ,10 , '2019-05-09 23:59:58.070028'),
 ('subscribed' , 6 ,11 , '2019-05-10 00:00:00.099397'),
 ('subscribed' , 6 ,12 , '2019-05-10 00:00:03.252674'),
 ('subscribed' , 6 ,14 , '2019-05-10 00:00:29.68096'),
 ('subscribed' ,11 ,15 , '2019-05-10 00:02:22.316723'),
 ('subscribed' ,11 ,16 , '2019-05-10 00:02:27.042967'),
 ('subscribed' ,11 ,17 , '2019-05-10 00:02:27.044425'),
 ('subscribed' ,11 ,18 , '2019-05-10 00:02:32.124019'),
 ('subscribed' ,11 ,19 , '2019-05-10 00:02:32.126201'),
 ('subscribed' , 9 ,25 , '2019-05-10 00:04:18.787093'),
 ('subscribed' , 9 ,26 , '2019-05-10 00:04:21.046536');
