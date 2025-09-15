-- users
INSERT INTO users (name, email, password) VALUES ('John Doe', 'john.doe@example.com', '123456');
INSERT INTO users (name, email, password) VALUES ('Jane Doe', 'jane.doe@example.com', '123456');

-- posts
INSERT INTO posts (title, content, user_id) VALUES ('Post 1', 'Content 1', 1);
INSERT INTO posts (title, content, user_id) VALUES ('Post 2', 'Content 2', 2);
INSERT INTO posts (title, content, user_id) VALUES ('Post 3', 'Content 3', 1);
INSERT INTO posts (title, content, user_id) VALUES ('Post 4', 'Content 4', 2);

-- comments
INSERT INTO comments (content, user_id, post_id) VALUES ('Comment 1 user 1', 1, 1);
INSERT INTO comments (content, user_id, post_id) VALUES ('Comment 1 user 2', 2, 1);
INSERT INTO comments (content, user_id, post_id) VALUES ('Comment 2 user 2', 2, 2);
INSERT INTO comments (content, user_id, post_id) VALUES ('Comment 3 user 1', 1, 3);
INSERT INTO comments (content, user_id, post_id) VALUES ('Comment 4 user 2', 2, 3);
INSERT INTO comments (content, user_id, post_id) VALUES ('Comment 4 user 2', 2, 4);

-- tasks
INSERT INTO tasks (title, completed, user_id) VALUES ('Task 1', FALSE, 1);
INSERT INTO tasks (title, completed, user_id) VALUES ('Task 2', TRUE, 2);
INSERT INTO tasks (title, completed, user_id) VALUES ('Task 3', FALSE, 1);
INSERT INTO tasks (title, completed, user_id) VALUES ('Task 4', TRUE, 2);

-- albums
INSERT INTO albums (title, user_id) VALUES ('Album 1', 1);
INSERT INTO albums (title, user_id) VALUES ('Album 2', 2);
INSERT INTO albums (title, user_id) VALUES ('Album 3', 1);
INSERT INTO albums (title, user_id) VALUES ('Album 4', 2);

-- photos
INSERT INTO photos (title, url, album_id) VALUES ('Photo 1 - Album 1', 'https://via.placeholder.com/150', 1);
INSERT INTO photos (title, url, album_id) VALUES ('Photo 2 - Album 1', 'https://via.placeholder.com/150', 1);
INSERT INTO photos (title, url, album_id) VALUES ('Photo 1 - Album 2', 'https://via.placeholder.com/150', 2);
INSERT INTO photos (title, url, album_id) VALUES ('Photo 2 - Album 2', 'https://via.placeholder.com/150', 2);
INSERT INTO photos (title, url, album_id) VALUES ('Photo 1 - Album 3', 'https://via.placeholder.com/150', 3);
INSERT INTO photos (title, url, album_id) VALUES ('Photo 2 - Album 3', 'https://via.placeholder.com/150', 3);
INSERT INTO photos (title, url, album_id) VALUES ('Photo 1 - Album 4', 'https://via.placeholder.com/150', 4);
INSERT INTO photos (title, url, album_id) VALUES ('Photo 2 - Album 4', 'https://via.placeholder.com/150', 4);
INSERT INTO photos (title, url, album_id) VALUES ('Photo 3 - Album 4', 'https://via.placeholder.com/150', 4);