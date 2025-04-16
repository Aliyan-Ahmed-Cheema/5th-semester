create database project
--use project;

CREATE TABLE Tenant (
    TenantID INT NOT NULL PRIMARY KEY,
    Username VARCHAR(255),
    Password VARCHAR(255),
    Email VARCHAR(255),
    Phone_number INT,
    Address VARCHAR(255)
);

select * from Tenant

INSERT INTO Tenant (TenantID, Username, Password, Email, Phone_number, Address)
VALUES  (1, 'JohnDoe', 'password123', 'john.doe@example.com', 1234567, '123 Main St'),
        (2, 'JaneSmith', 'pass456', 'jane.smith@example.com', 9876543, '456 Oak St'),
        (3, 'BobJohnson', 'secure789', 'bob.johnson@example.com', 5551234, '789 Elm St'),
        (4, 'AliceMiller', 'secret123', 'alice.miller@example.com', 3339876, '567 Pine St'),
        (5, 'CharlieBrown', 'hidden456', 'charlie.brown@example.com', 888555, '901 Maple St'),
        (6, 'Ayesha Asghar', '074', 'ayesha.asghar@example.com', 1112222, '123 Street'),
        (7, 'Javeria Azeem', '027', 'javeria.azeem@example.com', 3334444, '456 Street'),
        (8, 'MichaelSmith', 'mike123', 'michael.smith@example.com', 5556666, '789 Avenue'),
        (9, 'EmilyJohnson', 'emily456', 'emily.johnson@example.com', 7778888, '987 Road'),
        (10, 'DavidBrown', 'david789', 'david.brown@example.com', 9990000, '654 Lane');

CREATE TABLE Landlord_Property (
    HouseProperty_id INT NOT NULL PRIMARY KEY,
    Size INT,
    Location VARCHAR(255),
    Description VARCHAR(255),
    Bedrooms INT,
    Bathrooms INT,
    Amenities VARCHAR(255),
    TenantID INT,
    CONSTRAINT fk_tenant FOREIGN KEY (TenantID) REFERENCES Tenant(TenantID)
);

select * from Landlord_Property

INSERT INTO Landlord_Property (HouseProperty_id, Size, Location, Description, Bedrooms, Bathrooms, Amenities, TenantID)
VALUES  (103, 1800, 'City Center', 'Modern condo', 2, 1, 'Balcony, Parking', 1),
        (104, 2200, 'Beachfront', 'Luxury villa', 4, 3, 'Pool, Ocean view', 2),
        (105, 1200, 'Suburb', 'Quaint cottage', 1, 1, 'Garden, Fireplace', 3), 
        (106, 2000, 'Downtown', 'Urban loft', 2, 2, 'City view, Gym', 4),
        (107, 1600, 'Mountain View', 'Rustic cabin', 3, 2, 'Nature retreat', 5),
        (108, 1500, 'Suburb', 'Cozy bungalow', 3, 2, 'Garden, Pool', 6),
        (109, 2500, 'City Center', 'Spacious apartment', 4, 2, 'Balcony, Parking', 7),
        (110, 1800, 'City Center', 'Modern apartment', 2, 1, 'Balcony, Parking', 8),
        (111, 1600, 'Beachfront', 'Cosy beach house', 3, 2, 'Pool, Ocean view', 9),
        (112, 1400, 'Downtown', 'Charming studio', 1, 1, 'City view, Gym', 10);

CREATE TABLE UserRentalAgreement (
    AgreementID INT NOT NULL PRIMARY KEY,
    HouseProperty_id INT,
    TenantID INT,
    StartDate DATE,
    EndDate DATE,
    RentAmount DECIMAL(10, 2),
    SecurityDeposit DECIMAL(10, 2),
    TermsandConditions VARCHAR(255),
    CONSTRAINT fk_tenant1 FOREIGN KEY (TenantID) REFERENCES Tenant(TenantID),
    CONSTRAINT fk_land_prop FOREIGN KEY (HouseProperty_id) REFERENCES Landlord_Property(HouseProperty_id)
);

select * from UserRentalAgreement

INSERT INTO UserRentalAgreement (AgreementID, HouseProperty_id, TenantID, StartDate, EndDate, RentAmount, SecurityDeposit, TermsandConditions) 
VALUES (1, 103, 1, '2022-01-01', '2022-12-31', 1000, 500, 'Agreement terms and conditions for AgreementID 1'),
       (2, 104, 2, '2022-02-01', '2023-01-31', 1500, 750, 'Agreement terms and conditions for AgreementID 2'),
       (3, 105, 3, '2022-03-01', '2023-02-28', 2000, 1000, 'Agreement terms and conditions for AgreementID 3'),
       (4, 106, 4, '2022-04-01', '2023-03-31', 2500, 1250, 'Agreement terms and conditions for AgreementID 4'),
       (5, 107, 5, '2022-05-01', '2023-04-30', 3000, 1500, 'Agreement terms and conditions for AgreementID 5'),
       (6, 108, 6, '2022-06-01', '2023-05-31', 1800, 900, 'Agreement terms and conditions for AgreementID 6'),
       (7, 109, 7, '2022-07-01', '2023-06-30', 2000, 1000, 'Agreement terms and conditions for AgreementID 7'),
       (8, 110, 8, '2022-08-01', '2023-07-31', 1500, 750, 'Agreement terms and conditions for AgreementID 8'),
       (9, 111, 9, '2022-09-01', '2023-08-31', 1800, 900, 'Agreement terms and conditions for AgreementID 9'),
       (10, 112, 10, '2022-10-01', '2023-09-30', 1200, 600, 'Agreement terms and conditions for AgreementID 10');

CREATE TABLE UserPayment (
    Payment_id INT NOT NULL PRIMARY KEY,
    AgreementID INT,
    RentAmount DECIMAL(10, 2),
    Payment_date DATE,
    Payment_method VARCHAR(255),
    Status VARCHAR(255),
    CONSTRAINT fk_rentid FOREIGN KEY (AgreementID) REFERENCES UserRentalAgreement(AgreementID)
);

select * from UserPayment

INSERT INTO UserPayment (Payment_id, AgreementID, RentAmount, Payment_date, Payment_method, Status)
VALUES (1, 1, 1000, '2022-01-01', 'Credit Card', 'Paid'),
       (2, 2, 1500, '2022-02-01', 'Bank Transfer', 'Pending'),
       (3, 3, 2000, '2022-03-01', 'Cash', 'Paid'),
       (4, 4, 2500, '2022-04-01', 'Bank Transfer', 'Paid'),
       (5, 5, 3000, '2022-05-01', 'Credit Card', 'Pending'),
	   (6, 6, 1800, '2022-06-01', 'Credit Card', 'Pending'),
       (7, 7, 2000, '2022-07-01', 'Cash', 'Paid'),
	   (8, 8, 1500, '2022-08-01', 'Credit Card', 'Pending'),
       (9, 9, 1800, '2022-09-01', 'Bank Transfer', 'Pending'),
       (10, 10, 1200, '2022-10-01', 'Cash', 'Pending');

GO
create procedure tenantProperty @TenantID int, @Address varchar(255)
AS
select Username from Tenant where TenantID=@TenantID and Address=@Address;

exec tenantProperty @TenantID =2, @Address ='456 Oak St';
GO

CREATE PROCEDURE User_payment @RentAmount DECIMAL(10, 2)
AS
SELECT * FROM UserPayment where Payment_id in (select AgreementID from UserRentalAgreement where AgreementID= 4);
exec User_payment 2500;
GO

CREATE PROCEDURE GetPropertyByTenantID1 @tenantID INT
AS
    SELECT lp.* FROM Landlord_Property lp
    INNER JOIN UserRentalAgreement ura ON lp.HouseProperty_id = ura.HouseProperty_id
    WHERE ura.TenantID = @tenantID;

	exec  GetPropertyByTenantID1 @tenantID = 5;
GO

CREATE PROCEDURE userent @TenantID int, @HouseProperty_id int
     AS
	  select *from Tenant where   TenantID =@tenantid
     SELECT * FROM UserRentalAgreement WHERE TenantID = @TenantID AND HouseProperty_id = @HouseProperty_id;

exec userent 1,103

GO		
		create procedure landlord @tenantid int,@HouseProperty_id int
	 as
	 select *from Tenant where   TenantID =@tenantid
	     SELECT * FROM  Landlord_Property where HouseProperty_id= @HouseProperty_id

		execute landlord 2,103
GO

CREATE PROCEDURE GetPaymentDetailsByTenantID @tenantID INT
as
    SELECT up.Payment_id, up.AgreementID, up.RentAmount, up.Payment_date, up.Payment_method, up.Status
    FROM UserPayment up
    JOIN UserRentalAgreement  ON up.AgreementID = UserRentalAgreement.AgreementID
    WHERE UserRentalAgreement.TenantID = tenantID;

	execute  GetPaymentDetailsByTenantID 2
GO

		CREATE PROCEDURE GetPropertyByTenantID2 @tenantID INT
AS
    SELECT Landlord_Property.*
    FROM Landlord_Property 
    JOIN UserRentalAgreement  ON Landlord_Property .HouseProperty_id = UserRentalAgreement.HouseProperty_id
    WHERE UserRentalAgreement.TenantID = @tenantID;

	execute  GetPropertyByTenantID2 7;

GO
	CREATE PROCEDURE GetPaymentsBy_TenantID @tenantID INT
AS
    SELECT UserPayment.*
    FROM UserPayment 
     JOIN UserRentalAgreement  ON UserPayment .AgreementID = UserRentalAgreement.AgreementID
    WHERE UserRentalAgreement.TenantID = @tenantID;

execute  GetPaymentsBy_TenantID 6
GO

CREATE PROCEDURE GetPropertyInfoAndAgreements(@HouseProperty_id INT)
AS
    SELECT lp.*, ura.*
    FROM Landlord_Property lp
    LEFT JOIN UserRentalAgreement ura ON lp.HouseProperty_id = ura.HouseProperty_id
    WHERE lp.HouseProperty_id = @HouseProperty_id

   EXECUTE GetPropertyInfoAndAgreements @HouseProperty_id = 106;

GO
   CREATE PROCEDURE GetTenantInfoAndAgreements(@TenantID INT)
AS
    SELECT t.*, ura.*
    FROM Tenant t
    LEFT JOIN UserRentalAgreement ura ON t.TenantID = ura.TenantID
    WHERE t.TenantID = @TenantID;

	EXECUTE GetTenantInfoAndAgreements @TenantID = 3;
GO

	/*VIEWS*/

CREATE VIEW TenantPropertyDetails
AS
SELECT Tenant.*, Landlord_Property.Size, Landlord_Property.Location, Landlord_Property.Bedrooms, Landlord_Property.Bathrooms
FROM Tenant 
JOIN Landlord_Property  ON Tenant.TenantID = Landlord_Property.TenantID;
GO
select *from  TenantPropertyDetails
GO

CREATE VIEW PropertyTenantInfo 
AS
SELECT Landlord_Property.*, Tenant.Username AS TenantUsername, Tenant.Email AS TenantEmail
FROM Landlord_Property 
 JOIN Tenant  ON Landlord_Property.TenantID = Tenant.TenantID;
 GO
 select *from  PropertyTenantInfo
 GO

 CREATE VIEW OverduePayments2 AS
SELECT UserRentalAgreement.AgreementID, UserPayment.RentAmount, UserPayment.Payment_date, UserPayment.Status
FROM UserRentalAgreement 
JOIN UserPayment  ON UserRentalAgreement.AgreementID = UserPayment.AgreementID
WHERE UserPayment.Payment_date > UserRentalAgreement.EndDate AND UserPayment.Status = 'Pending';
GO
select *from OverduePayments2
GO

CREATE VIEW TenantAgreementDetails AS
SELECT Tenant.Username, UserRentalAgreement.AgreementID, UserRentalAgreement.StartDate, UserRentalAgreement.EndDate, UserRentalAgreement.RentAmount, UserRentalAgreement.SecurityDeposit
FROM Tenant 
JOIN UserRentalAgreement ON Tenant.TenantID = UserRentalAgreement.TenantID;
GO
SELECT * FROM TenantAgreementDetails;
GO
CREATE VIEW OccupancyStatus AS
SELECT lp.HouseProperty_id, lp.Location, lp.Bedrooms, lp.Bathrooms
FROM Landlord_Property lp
LEFT JOIN UserRentalAgreement ua ON lp.HouseProperty_id = ua.HouseProperty_id;
GO
select * from OccupancyStatus
GO
CREATE VIEW TenantWithPropertyView AS
SELECT t.TenantID, t.Username, t.Email, t.Phone_number, t.Address, 
(SELECT lp.Size FROM Landlord_Property lp WHERE lp.TenantID = t.TenantID) AS Size,
(SELECT lp.Location FROM Landlord_Property lp WHERE lp.TenantID = t.TenantID) AS Location,
(SELECT lp.Description FROM Landlord_Property lp WHERE lp.TenantID = t.TenantID) AS Description
FROM Tenant t;
GO
SELECT * FROM TenantWithPropertyView;
GO
CREATE VIEW PaymentsWithTenantView AS
SELECT tp.Payment_id, tp.Payment_date, tp.Payment_method, tp.Status, tr.StartDate, tr.EndDate, tr.RentAmount,
(SELECT t.TenantID FROM Tenant t WHERE t.TenantID = tr.TenantID) AS TenantID,
(SELECT t.Username FROM Tenant t WHERE t.TenantID = tr.TenantID) AS Username,
(SELECT t.Email FROM Tenant t WHERE t.TenantID = tr.TenantID) AS Email,
(SELECT t.Phone_number FROM Tenant t WHERE t.TenantID = tr.TenantID) AS Phone_number,
(SELECT t.Address FROM Tenant t WHERE t.TenantID = tr.TenantID) AS Address
FROM UserPayment tp
INNER JOIN UserRentalAgreement tr ON tp.AgreementID = tr.AgreementID;
GO
SELECT * FROM PaymentsWithTenantView;
GO
CREATE VIEW ActiveTenantsView AS
SELECT t.TenantID, t.Username, t.Email, t.Phone_number
FROM Tenant t
INNER JOIN UserRentalAgreement ra ON t.TenantID = ra.TenantID
WHERE ra.EndDate > StartDate
GO
SELECT * FROM ActiveTenantsView;
GO
CREATE VIEW PropertiesByLocationView AS
SELECT lp.Size, lp.Location, lp.Description
FROM Landlord_Property lp
GO
SELECT * FROM PropertiesByLocationView;
GO
CREATE VIEW ExpiredAgreementsView AS
SELECT ra.AgreementID, ra.StartDate, ra.EndDate, ra.TenantID
FROM UserRentalAgreement ra
WHERE ra.EndDate <StartDate;
GO
SELECT * FROM ExpiredAgreementsView;