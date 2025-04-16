using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Windows.Forms;
using System.Net.Mail;
using System.Net;

namespace Admin1
{
    public partial class Pregistration : Form
    {

       
        public Pregistration()
        {
            InitializeComponent();
            Password.PasswordChar = '*';
            ConfirmPassword.PasswordChar = '*';
        }

        private void checkBox1_CheckedChanged(object sender, EventArgs e)
        {
            if (checkBox1.Checked)
            {
                Password.PasswordChar = '\0';
                ConfirmPassword.PasswordChar = '\0';
            }
            else
            {
                Password.PasswordChar = '*';
                ConfirmPassword.PasswordChar = '*';
            }
        }
        private void pictureBox1_Click(object sender, EventArgs e)
        {
            new PassengerLogin().Show();
            this.Hide();
        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {

             if (!Authenticate()) {


             MessageBox.Show("Do not keep any textBox Blank!");
             return;

            }


            string Connection= "Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True";
           SqlConnection con=new SqlConnection(Connection);

            if (ConfirmPassword.Text.Equals(Password.Text))
            {
                try
            {

                String login = "INSERT INTO login (Username,Password,ConfirmPassword) values('" + Username.Text + "','" + Password.Text + "','" + ConfirmPassword.Text + "');";
                string passenger = "INSERT INTO Passengers (Fname,Lname,Email,phoneNumber,Username) values ('" + FirstName.Text + "', '" + Lastname.Text + "', '" + Email.Text + "','" + PhoneNumber.Text + "','" + Username.Text + "'); ";

                SqlDataAdapter da = new SqlDataAdapter(login, con);
                SqlDataAdapter sa = new SqlDataAdapter(passenger, con);
                con.Open();
                da.SelectCommand.ExecuteNonQuery();
                sa.SelectCommand.ExecuteNonQuery();


                sendConfirmationMail(FirstName.Text, Lastname.Text, Username.Text, Password.Text, ConfirmPassword.Text, Email.Text, PhoneNumber.Text);
                
                MessageBox.Show("Resgistration Successfull");

                clearData();
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
            else
            {
                MessageBox.Show("Confirm Password does not match ");
            }






        }

        private void sendConfirmationMail(string FirstName, string LastName, string Username, string Password, string ConfirmPassword, string Email,string PhoneNumber)
        {
            MailMessage mail = new MailMessage()
            {
                BodyEncoding = System.Text.Encoding.UTF8,
                SubjectEncoding = System.Text.Encoding.Default
            };
            mail.To.Add(Email);
            mail.From = new MailAddress("pakrailwayonline@gmail.com");
            mail.Subject = "PakRailway Registration Confirmation";
            
                mail.Body = "<b>Dear " + FirstName + ","+LastName+",<b><br><br>You have recently registered in PakRailway as a Passenger. So, your application has been approved.<br>Now, you are the member of Pak Raiways.<br><br>Your Username is: " + Username + "<br>Password: " + Password + "<b><br><br>Regards<br><b>Pak Railway Team<b>";
            
            
            mail.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient("smtp.gmail.com");
            smtp.EnableSsl = true;
            smtp.Port = 587;
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtp.Credentials = new NetworkCredential("pakrailwayonline@gmail.com", "smosacfbqdzshunc");
            smtp.Send(mail);
        }

        private void clearData()
        {

            Username.Text = "";
            Password.Text = "";
                ConfirmPassword.Text = "";
            FirstName.Text = "";
            Lastname.Text = "";
            Email.Text = "";

            PhoneNumber.Text = "";


        }






        bool Authenticate()
        {
            if (string.IsNullOrWhiteSpace(FirstName.Text) ||
                string.IsNullOrWhiteSpace(Lastname.Text) ||
                string.IsNullOrWhiteSpace(Email.Text) ||
                string.IsNullOrWhiteSpace(ConfirmPassword.Text) ||
                string.IsNullOrWhiteSpace(PhoneNumber.Text) ||
                string.IsNullOrWhiteSpace(Username.Text) ||
                string.IsNullOrWhiteSpace(Password.Text)
                )
                return false;
            else return true;


            }

        private void button2_Click(object sender, EventArgs e)
        {


            Username.Text = "";
            Password.Text = "";
            ConfirmPassword.Text = "";
            FirstName.Text = "";
            Lastname.Text = "";
            Email.Text = "";

            PhoneNumber.Text = "";
            FirstName.Focus();
        }

       
    }
    }

