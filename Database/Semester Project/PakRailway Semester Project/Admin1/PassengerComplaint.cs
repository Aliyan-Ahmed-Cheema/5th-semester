using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.StartPanel;

namespace Admin1
{
    public partial class PassengerComplaint : Form
    {



        public static string username = PassengerLogin.username1;



        public PassengerComplaint()
        {
            InitializeComponent();
         
            getPassengerID();
            display();
        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void Home_Click(object sender, EventArgs e)
        {
            new PHome().Show();
            this.Hide();
        }

        private void Book_Train_Click(object sender, EventArgs e)
        {
            new bookTrain().Show();
            this.Hide();
        }

        private void BookingInfo_Click(object sender, EventArgs e)
        {
            new BookingInformation().Show();
            this.Hide();
        }

        private void Complaint_Click(object sender, EventArgs e)
        {
            new PassengerComplaint().Show();
            this.Hide();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            new PassengerFeedback().Show();
            this.Hide();
        }
        string passenger;
        private void Email_TextChanged(object sender, EventArgs e)
        {

        }


       

      

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void label3_Click_1(object sender, EventArgs e)
        {

        }

      

        private void label4_Click_1(object sender, EventArgs e)
        {
            
        }

        private void Email_TextChanged_1(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            new PassengerLogin().Show();
            this.Hide();
        }

        private void bunifuButton1_Click_1(object sender, EventArgs e)
        {
            string Connection = "Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True";
            SqlConnection con = new SqlConnection(Connection);
            try
            {


                String AddComplaint = "INSERT INTO Complaint (Details ,PassengersID) values(@Details, @PassengersID)";

                SqlCommand sa = new SqlCommand(AddComplaint, con);



                con.Open();


                sa.Parameters.AddWithValue("@Details", ComplaintDetails.Text);
                sa.Parameters.AddWithValue("@PassengersID", int.Parse(passenger));




                sa.ExecuteNonQuery();

                sendConfirmationMail(Email.Text, ComplaintDetails.Text);

                MessageBox.Show("Complaint Submitted SuccessFully");

                new PassengerComplaint().Show();
                this.Hide();


            }
            catch
            {

                MessageBox.Show("Error occured");


            }
            finally
            {

                con.Close();
            }

        }
        private void sendConfirmationMail(string Email, string ComplaintDetails)
        {
            MailMessage mail = new MailMessage()
            {
                BodyEncoding = System.Text.Encoding.UTF8,
                SubjectEncoding = System.Text.Encoding.Default
            };
            mail.To.Add(Email);
            mail.From = new MailAddress("pakrailwayonline@gmail.com");
            mail.Subject = "PakRailway Complaint Confirmation";

            mail.Body = "<b>Dear Passenger,<br> : " + Email + ", <b><br><br>Your Complaint has been Registered.<br>We will look into the matter and try to resolve the complaint as soon as possible.<br><br>Your Complaint is: " + ComplaintDetails + "<b><br><br>Regards,<br><b>Pak Railway Team<b>";


            mail.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient("smtp.gmail.com");
            smtp.EnableSsl = true;
            smtp.Port = 587;
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtp.Credentials = new NetworkCredential("pakrailwayonline@gmail.com", "smosacfbqdzshunc");
            smtp.Send(mail);
        }


        
        public void getPassengerID()
        {

            string Connection = "Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True";
            SqlConnection con = new SqlConnection(Connection);
            String PassengerID = "Select PassengersID from Passengers where Username='" + username + "'";

            SqlCommand cmd = new SqlCommand(PassengerID, con);

            con.Open();

            SqlDataReader reader = cmd.ExecuteReader();








            while (reader.Read())
            {
                passenger = reader.GetValue(0).ToString();

            }





            con.Close();


        }


        public void display()
        {


            SqlConnection con = new SqlConnection("Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True");
            SqlConnection cmd;
            DataTable datatable;
            SqlDataAdapter adt;

            con.Open();

            String table = "Select Complaint.ComplaintNo,Complaint.Status,Complaint.Details from Complaint where PassengersID=@PassengersID";

            SqlCommand sa = new SqlCommand(table, con);


             sa.Parameters.AddWithValue("@PassengersID", int.Parse(passenger));

            SqlDataReader reader = sa.ExecuteReader();
            DataTable dt = new DataTable();
            dt.Load(reader);









            ComplaintList.DataSource = dt;


            con.Close();

        }



        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void PassengerComplaint_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'railwayComplaintSystem15DataSet1.Complaint' table. You can move, or remove it, as needed.
            this.complaintTableAdapter1.Fill(this.railwayComplaintSystem15DataSet1.Complaint);
            // TODO: This line of code loads data into the 'railwayComplaintSystem15DataSet.Complaint' table. You can move, or remove it, as needed.
            this.complaintTableAdapter.Fill(this.railwayComplaintSystem15DataSet.Complaint);

        }
    }
}
