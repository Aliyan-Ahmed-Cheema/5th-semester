using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.StartPanel;

namespace Admin1
{
    public partial class Stafflogin : Form
    {
        public Stafflogin()
        {
            InitializeComponent();
        }

        private void panel3_Paint(object sender, PaintEventArgs e)
        {

        }

        private void label6_Click(object sender, EventArgs e)
        {

        }

        private void textBox5_TextChanged(object sender, EventArgs e)
        {

        }

        private void label7_Click(object sender, EventArgs e)
        {

        }

        private void panel4_Paint(object sender, PaintEventArgs e)
        {

        }

        private void label9_Click(object sender, EventArgs e)
        {

        }

        private void panel7_Paint(object sender, PaintEventArgs e)
        {

        }

        private void label8_Click(object sender, EventArgs e)
        {

        }

        private void panel6_Paint(object sender, PaintEventArgs e)
        {

        }

        private void panel5_Paint(object sender, PaintEventArgs e)
        {

        }

        private void textBox6_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox5_TextChanged_1(object sender, EventArgs e)
        {

        }

        private void pictureBox4_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {

        }

        private void button5_Click(object sender, EventArgs e)
        {

        }

        private void button4_Click(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {

        }

        private void label8_Click_1(object sender, EventArgs e)
        {
            
        }

        private void button3_Click_1(object sender, EventArgs e)
        {
            new PassengerLogin().Show();
            this.Hide();
        }

        private void panel4_Paint_1(object sender, PaintEventArgs e)
        {

        }

        private void button4_Click_1(object sender, EventArgs e)
        {
            new Stafflogin().Show();
            this.Hide();
        }

        private void button2_Click_1(object sender, EventArgs e)
        {
            new AdminLogin().Show();
            this.Hide();
        }

        private void label9_Click_1(object sender, EventArgs e)
        {
            DialogResult Result = MessageBox.Show("Are you sure you want to quit?", "Exit Application", MessageBoxButtons.YesNo);
            if (Result == System.Windows.Forms.DialogResult.Yes)
            {
                Application.Exit();
            }
        }

        public static string usernamex;

        private void button5_Click_1(object sender, EventArgs e)
        {
            if (!Authenticate())
            {


                MessageBox.Show("Do not keep any textBox Blank!");
                return;
            }

            String username = Username.Text;
            String password = Password.Text;

            usernamex = Username.Text;

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



                    new StaffHome().Show();
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


        private void label7_Click_1(object sender, EventArgs e)
        {

        }
    }
}
