CREATE TABLE IF NOT EXISTS houses(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    zip INTEGER
);

ALTER TABLE houses 
  ADD img TEXT;
ALTER TABLE houses 
  ADD mortgage DECIMAL;
ALTER TABLE houses 
  ADD rent DECIMAL;