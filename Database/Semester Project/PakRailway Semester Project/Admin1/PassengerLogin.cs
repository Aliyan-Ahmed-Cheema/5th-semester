using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml.Schema;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.ListView;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.StartPanel;

namespace Admin1
{
    public partial class PassengerLogin : Form
    {
        public PassengerLogin()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            new AddTrain().Show();
            this.Hide();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            new SC().Show();
            this.Hide();

        }

        private void button3_Click(object sender, EventArgs e)
        {
            new AdminFeedBack().Show();
            this.Hide();
        }


        private void button4_Click_1(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void bunifuGradientPanel1_Click(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {

        }

        private void panel2_Paint(object sender, PaintEventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void panel3_Paint(object sender, PaintEventArgs e)
        {

        }

        private void button3_Click_1(object sender, EventArgs e)
        {
            new PassengerLogin().Show();
            this.Hide();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            new Stafflogin().Show();
            this.Hide();
        }

        private void button2_Click_1(object sender, EventArgs e)
        {

        }

        private void button1_Click_1(object sender, EventArgs e)
        {
            new AdminLogin().Show();
            this.Hide();
        }

        private void label8_Click(object sender, EventArgs e)
        {
            new Pregistration().Show();
            this.Hide();
        }


        public static string username1;
        private void button5_Click(object sender, EventArgs e)
        {

            if (!Authenticate())
            {


                MessageBox.Show("Do not keep any textBox Blank!");
                return;

            }

            String username = Username.Text;
            String password = Password.Text;

            username1 = Username.Text;

            string Connection = "Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True";
            SqlConnection con = new SqlConnection(Connection);

            try
            {

                string PLogin = "Select * from login where username = '" + Username.Text + "' and password= '" + Password.Text + "' ";
                SqlDataAdapter sda = new SqlDataAdapter(PLogin, con);
                DataTable dataTable = new DataTable();
                sda.Fill(dataTable);

                if (dataTable.Rows.Count > 0)

                {

                    username = Username.Text;
                    password = Password.Text;



                    new PHome().Show();
                    this.Hide();
                }

                else
                {

                    MessageBox.Show("Invalid Login Details");

                    clearData();
                }







            }

            catch
            {

                MessageBox.Show("Error");

            }


            finally
            {



            }
        }
        private void label9_Click(object sender, EventArgs e)
        {
            DialogResult Result = MessageBox.Show("Are you sure you want to quit?", "Exit Application", MessageBoxButtons.YesNo);
            if (Result == System.Windows.Forms.DialogResult.Yes)
            {
                Application.Exit();
            }
        }

        private void clearData()
        {


            Password.Text = "";

            Password.Focus();

        }






        bool Authenticate()
        {
            if (
                string.IsNullOrWhiteSpace(Username.Text) ||
                string.IsNullOrWhiteSpace(Password.Text)
                )
                return false;
            else return true;


        }

        private void textBox5_TextChanged(object sender, EventArgs e)
        {

        }

        private void label7_Click(object sender, EventArgs e)
        {
            new passengerUpdate().Show();
            
            
        }
    }
}
