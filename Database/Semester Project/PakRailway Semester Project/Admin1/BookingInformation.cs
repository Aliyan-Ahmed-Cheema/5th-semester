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
    public partial class BookingInformation : Form
    {
        public BookingInformation()
        {
            InitializeComponent();
            display();
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

        }

        private void button2_Click_1(object sender, EventArgs e)
        {
            new PassengerLogin().Show();
            this.Hide();
        }

        private void Submit_Click(object sender, EventArgs e)
        {
            string Connection = "Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True";
            SqlConnection con = new SqlConnection(Connection);
            String booking = "select booking.BookingID,booking.traintype,booking.TotalPrice,booking.noOfTickets,booking.departureStop,booking.arrivalStop,booking.departureTime from booking where BookingID='" + BookID.Text + "'";

            SqlCommand cmd = new SqlCommand(booking, con);

            con.Open();


            SqlDataReader reader = cmd.ExecuteReader();
            DataTable dt = new DataTable();
            dt.Load(reader);




            bookGrid.DataSource = dt;






            con.Close();
        }


        public void display()
        {


            SqlConnection con = new SqlConnection("Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True");



            String table = "select * from booking";


            SqlCommand cmd = new SqlCommand(table, con);

            con.Open();



            SqlDataReader reader = cmd.ExecuteReader();
            DataTable dt = new DataTable();
            dt.Load(reader);



            bookGrid.DataSource = dt;




            con.Close();

        }
    }
}
