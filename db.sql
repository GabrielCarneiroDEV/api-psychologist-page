CREATE DATABASE psychologist_posts;

create table posts(
  id serial primary key,
  author text not null,
  post_text text not null,
  post_date date not null,
  title text not null,
  subtitle text,
  highlight text not null,
  image text not null
  );