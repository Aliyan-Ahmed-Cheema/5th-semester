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
    public partial class PassengerFeedback : Form
    {
        public PassengerFeedback()
        {
            InitializeComponent();
            getPassengerID();
            display();
        }

        private void Form12_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'railwayComplaintSystem15DataSet4.Complaint' table. You can move, or remove it, as needed.
            this.complaintTableAdapter1.Fill(this.railwayComplaintSystem15DataSet4.Complaint);
            // TODO: This line of code loads data into the 'railwayComplaintSystem7DataSet12.Complaint' table. You can move, or remove it, as needed.
            this.complaintTableAdapter.Fill(this.railwayComplaintSystem7DataSet12.Complaint);
            // TODO: This line of code loads data into the 'railwayComplaintSystem7DataSet11.feedback' table. You can move, or remove it, as needed.
            this.feedbackTableAdapter.Fill(this.railwayComplaintSystem7DataSet11.feedback);

        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void Feedback_Click(object sender, EventArgs e)
        {

        }

        private void panel2_Paint(object sender, PaintEventArgs e)
        {

        }

        private void bunifuGradientPanel1_Click(object sender, EventArgs e)
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

        private void button2_Click(object sender, EventArgs e)
        {
            new PassengerLogin().Show();
            this.Hide();
        }


        public void display()
        {


            SqlConnection con = new SqlConnection("Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True");
            SqlConnection cmd;
            DataTable datatable;
            SqlDataAdapter adt;

            con.Open();

            String table = "Select Complaint.ComplaintNo,Complaint.Status,Complaint.Department,Complaint.Details  from Complaint Where PassengersID=@PassengersID";

            SqlCommand sa = new SqlCommand(table, con);
            sa.Parameters.AddWithValue("@PassengersID", int.Parse(passenger));
            SqlDataReader reader = sa.ExecuteReader();
            DataTable dt = new DataTable();
            dt.Load(reader);


           






            grid2.DataSource = dt;


            con.Close();

        }


        string passenger;
        public static string username = PassengerLogin.username1;
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

        private void bunifuButton1_Click(object sender, EventArgs e)
        {
            string Connection = "Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True";
            SqlConnection con = new SqlConnection(Connection);
            try
            {


                String AddFeedback = "INSERT INTO feedback (ComplaintID ,comments,PassengersID) values(@ComplaintID,@comments,@PassengersID )";

                SqlCommand sa = new SqlCommand(AddFeedback, con);



                con.Open();


                sa.Parameters.AddWithValue("@ComplaintID", int.Parse(CID.Text));
                sa.Parameters.AddWithValue("@comments", Feed.Text);
                sa.Parameters.AddWithValue("@PassengersID", int.Parse(passenger));




                sa.ExecuteNonQuery();



                MessageBox.Show("FEEDBACK HAS BEEN SUBMITTED");


            }
            catch
            {

                MessageBox.Show("Please Fill All Fields");


            }
            finally
            {

                con.Close();
            }
        }

        private void grid2_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }
    }
}
