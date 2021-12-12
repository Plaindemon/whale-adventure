--A query is a request for data from a database table or a combination of tables.


-- Query to select all the employees from the table employee within the database store
SELECT * FROM employee;

SELECT
  books.book_name AS book_name, prices.price AS price
FROM books
JOIN prices ON books.price = prices.id;
