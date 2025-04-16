CREATE DATABASE LibraryManagementSystem;
USE LibraryManagementSystem;

-- Create the Category_DB table
CREATE TABLE Category_DB (
    Catagory_ID INT PRIMARY KEY,
    Catagory_Name VARCHAR(26)
);
-- Insert data into Category_DB
INSERT INTO Category_DB VALUES  
(43, 'Qol'),
(55, 'ABC'),
(30, 'XYZ'),
(28, 'PQR'),
(67, 'JKL'),
(49, 'MNO'),
(38, 'RST'),
(62, 'EFG'),
(41, 'UVW'),
(35, 'HIJ');

-- Create the Supplier_DB table
CREATE TABLE Supplier_DB (
    SID INT PRIMARY KEY AUTO_INCREMENT,      
    Supplier_Name VARCHAR(20) NOT NULL UNIQUE ,     
    Contact_No VARCHAR(15) NOT NULL,         
    Email VARCHAR(50) UNIQUE,               
    Address VARCHAR(200)                     
);

-- Insert data into Supplier_DB
INSERT INTO Supplier_DB (Supplier_Name, Contact_No, Email, Address) VALUES
('Hamza', '01213131', 'Hamza@gmail.com', 'New City'),
('Aisha', '01456564', 'Aisha@gmail.com', 'Old Town'),
('Omar', '01789323', 'Omar@gmail.com', 'Green Village'),
('Layla', '01987456', 'Layla@gmail.com', 'Blue Hills'),
('Zain', '01123456', 'Zain@gmail.com', 'Red Valley'),
('Fatima', '01678901', 'Fatima@gmail.com', 'Sunrise City'),
('Ali', '01345678', 'ali@gmail.com', 'Mountain View'),
('Sara', '01876543', 'sara@gmail.com', 'Ocean City'),
('Ahmed', '01543210', 'ahmed@gmail.com', 'Golden Town'),
('Nadia', '01234567', 'nadia@gmail.com', 'Silver Heights');


-- Create the Book_DB table
CREATE TABLE Book_DB (
    Book_ID INT PRIMARY KEY,
    Book_Name VARCHAR(20) UNIQUE,
    Catagory_ID INT,
    Catagory_Name VARCHAR(20),
    Author VARCHAR(20),
    Publisher VARCHAR(20),
    Eddition_No INT NOT NULL,
    Eddition_Year YEAR,
    Shelf_No INT NOT NULL,
    Supplier_Name VARCHAR(20),
    Delivary_Time TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (Catagory_ID) REFERENCES Category_DB(Catagory_ID),
    FOREIGN KEY (Supplier_Name) REFERENCES Supplier_DB(Supplier_Name)
);

-- Insert data into Book_DB
INSERT INTO Book_DB VALUES 
(1, 'Ghazal', 43, 'Qol', 'Hamza', 'Bajd', 8, 2002, 32, 'Hamza', DEFAULT),
(2, 'Poetry', 55, 'ABC', 'John', 'Smith', 5, 2005, 45, 'Aisha', DEFAULT),
(3, 'Novel', 30, 'XYZ', 'Alice', 'Wonderland', 12, 2010, 60, 'Omar', DEFAULT),
(4, 'Fiction', 28, 'PQR', 'Mark', 'Twain', 10, 2008, 55, 'Layla', DEFAULT),
(5, 'Science', 67, 'JKL', 'Stephen', 'Hawking', 15, 2001, 80, 'Zain', DEFAULT),
(6, 'Fantasy', 49, 'MNO', 'J.R.R.', 'Tolkien', 20, 1998, 70, 'Fatima', DEFAULT),
(7, 'Biography', 38, 'RST', 'Steve', 'Jobs', 25, 2015, 50, 'Ali', DEFAULT),
(8, 'History', 62, 'EFG', 'Winston', 'Churchill', 30, 1995, 90, 'Sara', DEFAULT),
(9, 'Thriller', 41, 'UVW', 'Agatha', 'Christie', 18, 2006, 75, 'Ahmed', DEFAULT),
(10, 'Horror', 35, 'HIJ', 'Stephen', 'King', 22, 2019, 85, 'Nadia', DEFAULT);

-- Select all data from Book_DB
SELECT * FROM Book_DB;


-- Create the Member_DB table
CREATE TABLE Member_DB (
    MID INT PRIMARY KEY,
    M_Date DATETIME DEFAULT CURRENT_TIMESTAMP,
    M_Name VARCHAR(20) NOT NULL,
    M_contact BIGINT NOT NULL,
    M_Email VARCHAR(50), 
    M_NIC BIGINT, 
    Membership_period INT,
    M_Expirydate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert data into Member_DB
INSERT INTO Member_DB (MID, M_Date, M_Name, M_contact, M_Email, M_NIC, Membership_period, M_Expirydate) VALUES 
(2, DEFAULT, 'Ali', 923012345678, 'ali@example.com', 1234567890123, 2, DEFAULT),
(3, DEFAULT, 'Sana', 923334567890, 'sana@example.com', 2345678901234, 1, DEFAULT),
(4, DEFAULT, 'Ahmed', 923454321098, 'ahmed@example.com', 3456789012345, 3, DEFAULT),
(5, DEFAULT, 'Fatima', 923045678901, 'fatima@example.com', 4567890123456, 2, DEFAULT),
(6, DEFAULT, 'Imran', 923012345678, 'imran@example.com', 5678901234567, 1, DEFAULT),
(7, DEFAULT, 'Ayesha', 923334567890, 'ayesha@example.com', 6789012345678, 2, DEFAULT),
(8, DEFAULT, 'Usman', 923454321098, 'usman@example.com', 7890123456789, 3, DEFAULT),
(9, DEFAULT, 'Sadia', 923045678901, 'sadia@example.com', 8901234567890, 1, DEFAULT),
(10, DEFAULT, 'Bilal', 923012345678, 'bilal@example.com', 9012345678901, 2, DEFAULT),
(11, DEFAULT, 'Hira', 923334567890, 'hira@example.com', 123456789012, 3, DEFAULT);

-- Select all data from Member_DB
SELECT * FROM Member_DB;

-- Create the Staff_DB table
CREATE TABLE Staff_DB (
    StaffID INT AUTO_INCREMENT PRIMARY KEY,
    AppyDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Staff_name VARCHAR(20) NOT NULL,
    Title VARCHAR(500) NOT NULL,
    Contact_No VARCHAR(25) NOT NULL,
    Email VARCHAR(50) UNIQUE NOT NULL,
    CNIC VARCHAR(20) UNIQUE NOT NULL,
    Country VARCHAR(20) NOT NULL,
    Salary INT NOT NULL
);

-- Insert data into Staff_DB
INSERT INTO Staff_DB (StaffID, AppyDate, Staff_name, Title, Contact_No, Email, CNIC, Country, Salary) VALUES 
(1, DEFAULT, 'Salman', 'Code', 39293, 'salman@gmail.com', 734712461278, 'Pakistan', 16000),
(2, DEFAULT, 'Ayesha', 'Algorithms', 49384, 'ayesha@gmail.com', 823412461279, 'Pakistan', 18000),
(3, DEFAULT, 'Ahmed', 'DPatterns', 53839, 'ahmed@gmail.com', 634512461280, 'Pakistan', 17500),
(4, DEFAULT, 'Sara', 'Therogrammer', 63920, 'sara@gmail.com', 734512461281, 'Pakistan', 15000),
(5, DEFAULT, 'Bilal', 'CComplete', 73928, 'bilal@gmail.com', 934512461282, 'Pakistan', 19000),
(6, DEFAULT, 'Nadia', 'Interpretation', 83927, 'nadia@gmail.com', 34512461283, 'Pakistan', 16500),
(7, DEFAULT, 'Farah', 'OSConcepts', 89327, 'farah@gmail.com', 434512461284, 'Pakistan', 17000),
(8, DEFAULT, 'Zain', 'Computation', 92388, 'zain@gmail.com', 634512461285, 'Pakistan', 18500),
(9, DEFAULT, 'Hassan', 'AI', 57328, 'hassan@gmail.com', 434512461286, 'Pakistan', 15500),
(10, DEFAULT, 'Amna', 'CN', 82391, 'amna@gmail.com', 734512461287, 'Pakistan', 20000);

SELECT * FROM Staff_DB;
SELECT * FROM Supplier_DB;
SELECT * FROM Book_DB;
 
 ALTER TABLE Book_DB ADD COLUMN Description VARCHAR(255);
ALTER TABLE Book_DB DROP COLUMN Description;

UPDATE Supplier_DB 
SET Contact_No = '0123456789' 
WHERE Supplier_Name = 'Hamza';

SELECT * FROM Supplier_DB;

UPDATE Staff_DB 
SET Salary = 21000 
WHERE Staff_name = 'Hassan';

SELECT * FROM Staff_DB;

SELECT * FROM Supplier_DB 
WHERE Address = 'New City';


SELECT * FROM Staff_DB 
WHERE Salary BETWEEN 15000 AND 20000;

SELECT * FROM Book_DB 
WHERE Author IN ('Hamza', 'John', 'Alice') AND Eddition_Year > 2000;

SELECT * FROM Book_DB 
WHERE Book_Name LIKE 'N%' AND Author LIKE 'Alice%';



SELECT * FROM Book_DB 
WHERE Author NOT IN ('Hamza', 'John', 'Alice');



SELECT * FROM Staff_DB 
WHERE Title NOT IN ('Algorithms', 'DPatterns', 'Therogrammer');


SELECT * FROM Supplier_DB 
WHERE (Supplier_Name LIKE 'A%' OR Supplier_Name LIKE 'S%') AND Address = 'New City';

SELECT * FROM Book_DB 
WHERE Author != 'Stephen' AND Catagory_Name != 'Horror';



-- DELETE FROM Supplier_DB 
-- WHERE Address = 'New City' AND Contact_No LIKE '012%';

SET SQL_SAFE_UPDATES = 0;

DELETE FROM Supplier_DB 
WHERE Address = 'New City' AND Contact_No LIKE '012%';

SET SQL_SAFE_UPDATES = 1;

Select * from Supplier_DB;



SELECT YEAR(M_Date) AS YearJoined, AVG(Membership_period) AS AverageMembershipPeriod 
FROM Member_DB 
GROUP BY YEAR(M_Date);

SELECT Country, SUM(Salary) AS TotalSalary 
FROM Staff_DB 
GROUP BY Country 
HAVING SUM(Salary) > 30000;








































































































