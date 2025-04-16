using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.ListView;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.StartPanel;
using System.Net;

namespace Admin1
{
    public partial class Aregistration : Form
    {
        public Aregistration()
        {
            InitializeComponent();
            Password.PasswordChar = '*';
            ConfirmPassword.PasswordChar = '*';
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
            new AdminLogin().Show();
            this.Hide();
        }

        private void pictureBox1_Click_1(object sender, EventArgs e)
        {
            new AdminLogin().Show();
            this.Hide();
        }

        private void button1_Click(object sender, EventArgs e)
        {

            if (!Authenticate())
            {


                MessageBox.Show("Do not keep any textBox Blank!");
                return;

            }


            string Connection = "Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True";
            SqlConnection con = new SqlConnection(Connection);

            if (ConfirmPassword.Text.Equals(Password.Text))
            {
                try
                {

                    String login = "INSERT INTO login (Username,Password,ConfirmPassword) values('" + Username.Text + "','" + Password.Text + "','" + ConfirmPassword.Text + "');";
                    string Admin = "INSERT INTO Admin (Fname,Lname,Email,phoneNumber,Username) values ('" + FirstName.Text + "', '" + Lastname.Text + "', '" + Email.Text + "','" + PhoneNumber.Text + "','" + Username.Text + "'); ";


                    SqlDataAdapter da = new SqlDataAdapter(login, con);
                    SqlDataAdapter sa = new SqlDataAdapter(Admin, con);
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

        private void textBox5_TextChanged(object sender, EventArgs e)
        {

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

            FirstName.Focus();

        }




        private void sendConfirmationMail(string FirstName, string LastName, string Username, string Password, string ConfirmPassword, string Email, string PhoneNumber)
        {
            MailMessage mail = new MailMessage()
            {
                BodyEncoding = System.Text.Encoding.UTF8,
                SubjectEncoding = System.Text.Encoding.Default
            };
            mail.To.Add(Email);
            mail.From = new MailAddress("pakrailwayonline@gmail.com");
            mail.Subject = "PakRailway Registration Confirmation";

            mail.Body = "<b>Dear " + FirstName + "," + LastName + ",<b><br><br>You have recently registered in PakRailway as an Admin. So, your application has been approved.<br>Now, you are the member of Pak Raiways.<br><br>Your Username is: " + Username + "<br>Password: " + Password + "<b><br><br>Regards<br><b>Pak Railway Team<b>";


            mail.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient("smtp.gmail.com");
            smtp.EnableSsl = true;
            smtp.Port = 587;
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtp.Credentials = new NetworkCredential("pakrailwayonline@gmail.com", "smosacfbqdzshunc");
            smtp.Send(mail);
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

      
    }
}
