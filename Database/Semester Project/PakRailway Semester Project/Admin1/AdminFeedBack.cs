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
    public partial class AdminFeedBack : Form
    {
        SqlConnection con = new SqlConnection("Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True");
        SqlConnection cmd;
        DataTable dt;
        SqlDataAdapter adt;


        public AdminFeedBack()
        {
            InitializeComponent();
            display();
        }



        public void display()
        {

            try
            {

                con.Open();
                adt = new SqlDataAdapter("Select  feedback.feedbackID, feedback.complaintID , feedback.PassengersID , feedback.comments from feedback", con);
                dt = new DataTable();
                adt.Fill(dt);
                FeedbackGrid.DataSource = dt;


                con.Close();
            }

            catch {

                MessageBox.Show("FeedBack Does not Exist");




            }


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

        private void bunifuImageButton1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            new AdminLogin().Show();
            this.Hide();
        }

        private void AdminFeedBack_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'railwayComplaintSystem15DataSet6.feedback' table. You can move, or remove it, as needed.
            this.feedbackTableAdapter2.Fill(this.railwayComplaintSystem15DataSet6.feedback);
            // TODO: This line of code loads data into the 'railwayComplaintSystem15DataSet5.feedback' table. You can move, or remove it, as needed.
            this.feedbackTableAdapter1.Fill(this.railwayComplaintSystem15DataSet5.feedback);
            // TODO: This line of code loads data into the 'railwayComplaintSystem7DataSet10.feedback' table. You can move, or remove it, as needed.
            this.feedbackTableAdapter.Fill(this.railwayComplaintSystem7DataSet10.feedback);

        }

        private void panel2_Paint(object sender, PaintEventArgs e)
        {

        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void FeedbackGrid_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }
    }
}
