```mermaid
erDiagram
    users {
        serial id PK
        varchar name "NOT NULL"
        varchar email "NOT NULL, UNIQUE"
        varchar password "NOT NULL"
    }
    
    tasks {
        serial id PK
        varchar title "NOT NULL"
        boolean completed "NOT NULL, DEFAULT FALSE"
        user_id int FK "REFERENCES users(id)"
    }
    
    albums {
        serial id PK
        varchar title "NOT NULL"
        int user_id FK "REFERENCES users(id)"
    }
    
    photos {
        serial id PK
        varchar title "NOT NULL"
        varchar url "NOT NULL"
        int album_id FK "REFERENCES albums(id)"
    }
    
    posts {
        serial id PK
        varchar title "NOT NULL"
        text content "NOT NULL"
        int user_id FK "REFERENCES users(id)"
    }
    
    comments {
        serial id PK
        text content "NOT NULL"
        int user_id FK "REFERENCES users(id)"
        int post_id FK "REFERENCES posts(id)"
    }

    users ||--o{ tasks : "user_id"
    users ||--o{ albums : "user_id"
    users ||--o{ posts : "user_id"
    users ||--o{ comments : "user_id"
    albums ||--o{ photos : "album_id"
    posts ||--o{ comments : "post_id"
```

Esse é o código SQL para criar as tabelas do banco de dados
:
```SQL
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  user_id INT NOT NULL REFERENCES users(id)
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  user_id INT NOT NULL REFERENCES users(id)
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  album_id INT NOT NULL REFERENCES albums(id)
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  user_id INT NOT NULL REFERENCES users(id)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  user_id INT NOT NULL REFERENCES users(id),
  post_id INT NOT NULL REFERENCES posts(id)
);
```