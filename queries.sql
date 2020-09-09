-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT productName, categoryName
FROM product
    JOIN category ON category.id = product.categoryId


-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT [order].id, Shipper.companyName, [order].orderDate
FROM [order]
    JOIN shipper ON [order].shipvia = shipper.id
WHERE [order].orderDate < "2012-08-09"


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT orderId, quantity, productname
FROM orderdetail
    JOIN product ON orderdetail.productid = product.id
WHERE orderId = 10251
ORDER BY productname


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT [order].id AS "Order Id"
    , customer.companyName AS "Company Name"
    , employee.lastName AS "Employee Last Name"
FROM [order]
    JOIN customer ON [order].customerid = customer.id
    JOIN employee ON [order].employeeid = employee.id