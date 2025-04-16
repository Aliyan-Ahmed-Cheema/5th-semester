create database RailwayComplaintSystem15
 use RailwayComplaintSystem15



  create table department (


departmentID int primary key  identity(1,1),
departmentName varchar(50),

)




create table login(

LoginID int identity(1,1) primary key ,
Username varchar (20) ,
Password varchar(20),
ConfirmPassword varchar(20)

)




create table  admin(


adminID int identity (1,1) primary key,
Fname varchar (20) ,
Lname varchar(20),
Email varchar (50),
phoneNumber varchar(50),




)

ALTER TABLE Complaint
ADD Status varchar(50)

select * from admin


create table Train (

trainID varchar(50) primary key ,
startingPoint varchar(50),
endPoint varchar(50),
noOfSeats varchar(50),
noOfCabins varchar(50),
adminID int foreign key REFERENCES admin(adminID)

)








create table Passengers (


PassengersID int identity(1,1) primary key,
Fname varchar (20) ,

Lname varchar(20),
phoneNumber varchar(50),
Email varchar (50),
trainID varchar(50) foreign key REFERENCES train(trainID),
loginID int foreign key REFERENCES login(loginID),
Username varchar (20) 

)







create table Complaint (
ComplaintNo int identity(1,1) Primary key,
Department varchar (30),
Details varchar (1000),
adminID int foreign key REFERENCES admin(adminID),
PassengersID int foreign key REFERENCES Passengers(PassengersID),
departmentID int foreign key REFERENCES department(departmentID),
Status varchar(50)

)




create table schedualing (


srNo int identity (1,1) Primary Key,
trainID varchar(50) foreign key REFERENCES train(trainID),
departureTime1 varchar(50),
departureTime2 varchar(50),
departureTime3 varchar(50),
stop1 varchar(50),
stop2 varchar(50),
stop3 varchar(50)



)




create table feedback(

feedbackID int identity(1,1) primary key,
complaintID varchar(50),
comments varchar(1000),
adminID int  foreign key REFERENCES admin(adminID),
PassengersID int foreign key REFERENCES Passengers(PassengersID)



)
select * from feedback
select  feedback.feedbackID, feedback.complaintID , feedback.PassengersID , feedback.comments from feedback

create table booking(
BookingID int  identity(1,1) primary key,
TotalPrice int,
noOfTickets int,
departureStop varchar (50),
arrivalStop varchar(50),
departureTime varchar(50),
trainID varchar(50)foreign key REFERENCES train(trainID),
PassengersID int foreign key REFERENCES Passengers(PassengersID),
traintype varchar(50)



)






insert into booking (traintype,noOfTickets,departmentStop,arrivalStop,departureTime,TotalPrice,trainID,PassengersID) values ('ecooco',4 ,'sdfs','fgfgh','fgdgdf',67 + 'C07' , 1)




select * from booking


select booking.BookingID,booking,traintype,booking.TotalPrice,booking.noOfTickets,booking.departureStop,booking.arrivalStop,booking.departureTime from booking

Select Complaint.ComplaintNo,Complaint.ComplaintType,Complaint.Details,Complaint.PassengersID,
                Passengers.Fname,Passengers.Lname,Passengers.Email from Passengers,Complaint
				Where Complaint.PassengersID=Passengers.PassengersID


select* from schedualing

select * from Complaint
select * from feedback
				select * from Complaint
select * from booking

select * from train
select * from login

select * from admin

Delete from Train where trainID ='C07'

delete from schedualing where srNo=3

select * from Train
select * from schedualing

select * from Passengers

select * from Complaint