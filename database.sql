CREATE DATABASE demodb; 

CREATE TABLE task(
    task_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);


CREATE TABLE post(
    post_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);