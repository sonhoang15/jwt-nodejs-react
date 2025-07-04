INSERT INTO"Group"("id", "name", "description", "createdAt", "updatedAt") VALUES
    (1, 'Dev', 'development', '1751557639', '1751557639'),
    (2, 'Leader', 'leader/manager', '1751557639', '1751557639'),
    (3, 'Customer', 'Our customer', '1751557639', '1751557639'),
    (4, 'Guest', 'view only', '1751557639', '1751557639');


INSERT INTO "Group_Role"("id", "roleId", "groupId", "createdAt", "updatedAt") VALUES
    (36, 11, 4, '1751557639', '1751557639'),
    (37, 1, 4, '1751557639', '1751557639'),
    (38, 5, 2, '1751557639', '1751557639'),
    (39, 4, 2, '1751557639', '1751557639'),
    (40, 3, 2, '1751557639', '1751557639'),
    (41, 1, 2, '1751557639', '1751557639'),
    (72, 20, 3, '1751557639', '1751557639'),
    (73, 19, 3, '1751557639', '1751557639'),
    (74, 12, 3, '1751557639', '1751557639'),
    (75, 11, 3, '1751557639', '1751557639'),
    (76, 54, 1, '1751557639', '1751557639'),
    (77, 21, 1, '1751557639', '1751557639'),
    (78, 20, 1, '1751557639', '1751557639'),
    (79, 19, 1, '1751557639', '1751557639'),
    (80, 12, 1, '1751557639', '1751557639'),
    (81, 11, 1, '1751557639', '1751557639'),
    (82, 6, 1, '1751557639', '1751557639'),
    (83, 5, 1, '1751557639', '1751557639'),
    (84, 4, 1, '1751557639', '1751557639'),
    (85, 3, 1, '1751557639', '1751557639'),
    (86, 1, 1, '1751557639', '1751557639');


    
INSERT INTO "Role"("id", "url", "description", "createdAt", "updatedAt") VALUES
    (1, '/user/read', 'show all user', '1751557639', '1751557639'),
    (3, '/user/update', 'delete user', '1751557639', '1751557639'),
    (4, 'user/delete', '', '1751557639', '1751557639'),
    (5, '/group/read', '', '1751557639', '1751557639'),
    (6, '/role/create', 'create roles', '1751557639', '1751557639'),
    (11, '/role/read', '', '1751557639', '1751557639'),
    (12, '/role/delete', '', '1751557639', '1751557639'),
    (19, '/role/by-group', '', '1751557639', '1751557639'),
    (20, '/role/assign-to-group', '', '1751557639', '1751557639'),
    (21, '/user/create', 'create user', '1751557639', '1751557639'),
    (54, '/role/update', 'update roles', '1751557639', '1751557639');


    
INSERT INTO"Users"("id", "email", "password", "username", "address", "sex", "phone", "groupId", "createdAt", "updatedAt") VALUES
    (11, 'yani.gaming123@gmail.com', '$2a$10$DYOTrOsiFiFP1GMuxyLAkefqDr75REKbeQkJdCPp6Q9kHyKD5xdjC', 'hoang son123', '', '', '1234465767', 2, '1751557639', '1751557639'),
    (12, 'h@gmail.com', '1234567', 'h3', 'ha noi', '', '276438123645', 1, '1751557639', '1751557639'),
    (14, 'hoangson@1gmail.com', '1234567', 'h2', 'ha nam', 'Other', '0325542941', 3, '1751557639', '1751557639'),
    (15, 'dghsagdja@gmail.com', '1234567', 'hoang son', 'sdasdasd', '', '213241', 1, '1751557639', '1751557639'),
    (16, 'test@gmail.com', '$2a$10$bgrzwrBrCcPs6sQN5EmE/uHb6wKS0.myp8rUJNYyxbrFJ0Unn4inS', 'test', 'việt nam', 'Other', '2141345666453', 4, '1751557639', '1751557639'),
    (17, 'dsahdg@hajskhdkas.com', '$2a$10$.0ljvyr2smvfy1xggUwJpe2M0i5fLy1w3oNHvJwPeo0fpsNb7dnNO', 'test axios', 'dong nai', 'Other', 'fdasdasdasda', 1, '1751557639', '1751557639'),
    (18, 'jwt@gmail.com', '$2a$10$D6.Du1WsfgV9lHbMBYd.FeMmVi5TNT5q6EZ9wGPKXzlrUWCD02woe', 'jwt', 'china', '', '1123453656', 1, '1751557639', '1751557639'),
    (21, 'c@gmail.com', '$2a$10$DCi3qNsDxbNbHaPavEixLuj3JFollRRnoQrey6kEbAgSVx.83l7Km', 'hi son', 'ha noi', 'Male', '12323435', 2, '1751557639', '1751557639'),
    (22, 'test1@gmail.com', '$2a$10$MSu79adLoggoSNE2/1q9FuTErKC4dewzOtxC7PF3rAxntbDhr23ri', 'test', 'ha nam', 'Female', '42534543', 3, '1751557639', '1751557639'),
    (24, 'hihi@gmail.com', '$2a$10$vzM4ZSatL3o8Wejw1VIO9um/NctiPSSU.1eu3oAL/li2oxx7239XK', 'son hoang', 'việt nam', 'Male', '432534654', 1, '1751557639', '1751557639');