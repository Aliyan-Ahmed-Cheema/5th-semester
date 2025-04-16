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

namespace Admin1
{
    public partial class SC : Form
    {

        SqlConnection con = new SqlConnection("Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True");
        SqlConnection cmd;
        DataTable dt;
        SqlDataAdapter adt;
        public SC()
        {
            InitializeComponent();
            display();
        }

        private void bunifuDropdown1_SelectedIndexChanged(object sender, EventArgs e)
        {
                    }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

    
        
        
        }



        public void display()
        {



            con.Open();
            adt = new SqlDataAdapter("Select Complaint.ComplaintNo,Complaint.Details,Complaint.PassengersID,Complaint.Department," +
                "Passengers.Fname,Passengers.Lname,Passengers.Email from Passengers,Complaint Where Complaint.PassengersID=Passengers.PassengersID ", con);
            dt = new DataTable();
            adt.Fill(dt);
            grid1.DataSource = dt;


            con.Close();

        }

        private void button1_Click(object sender, EventArgs e)
        {
            string Connection = "Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True";
            SqlConnection con = new SqlConnection(Connection);





            try
            {

                



                String querry = "UPDATE Complaint SET Department ='" + comboBox1.SelectedItem.ToString() + "'WHERE ComplaintNo ='" + ComplaintId.Text + "'";



                SqlDataAdapter z = new SqlDataAdapter(querry, con);



                con.Open();


                z.SelectCommand.ExecuteNonQuery();
                MessageBox.Show("Data Saved SuccessFully");

            }
            catch
            {

                MessageBox.Show("Error occured");


            }
            finally
            {
                
                con.Close();
               
            }
            new SC().Show();
            this.Hide();

        }

        private void Home_Click(object sender, EventArgs e)
        {
            new AdminHome().Show();
            this.Hide();
        }

        private void Add_Train_Click(object sender, EventArgs e)
        {

            new AddTrain().Show();
            this.Hide();
        }

        private void See_Complaint_Click(object sender, EventArgs e)
        {

            new SC().Show();
            this.Hide();
        }

        private void See_Feedback_Click(object sender, EventArgs e)
        {

            new AdminFeedBack().Show();
            this.Hide();
        }

        private void button2_Click(object sender, EventArgs e)
        {

            new AdminLogin().Show();
            this.Hide();
        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {

            new AdminLogin().Show();
            this.Hide();
        }

        private void grid1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }
    }


}
