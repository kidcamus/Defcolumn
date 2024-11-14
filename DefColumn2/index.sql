CREATE DATABASE website_db;  -- Create the database

USE website_db;  -- Select the database

CREATE TABLE page_hits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hit_count INT NOT NULL DEFAULT 0
);

-- Insert an initial hit count
INSERT INTO page_hits (hit_count) VALUES (0);
