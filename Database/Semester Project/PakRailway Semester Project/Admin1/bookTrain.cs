using System;
using System.Data;
using System.Data.SqlClient;
using System.Windows.Forms;

namespace Admin1
{
    public partial class bookTrain : Form
    {

        public static string username = PassengerLogin.username1;
        public bookTrain()
        {
            InitializeComponent();
            display();
            getPassengerID();
            panel4.Hide();
        }

        private void panel4_Paint(object sender, PaintEventArgs e)
        {

        }

        private void Home_Click(object sender, EventArgs e)
        {
            new PHome().Show();
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

        private void Feedback_Click(object sender, EventArgs e)
        {
            new PassengerFeedback().Show();
            this.Hide();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            new PassengerLogin().Show();
            this.Hide();
        }



        public void display()
        {


            SqlConnection con = new SqlConnection("Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True");

            con.Open();

            String table = "Select train.trainID,train.startingPoint,train.endPoint,train.noOfSeats,train.noOfCabins,schedualing.departureTime1,schedualing.departureTime2,schedualing.departureTime3,schedualing.stop1,schedualing.stop2,schedualing.stop3  from train, schedualing Where Train.trainID=schedualing.trainID ";

            SqlCommand sa = new SqlCommand(table, con);
            SqlDataReader reader = sa.ExecuteReader();
            DataTable dt = new DataTable();
            dt.Load(reader);




            grid3.DataSource = dt;


            con.Close();

        }


        string[] ticket = { "Economy(Rs 1500)", "Luxury(Rs 2000)", "Business(Rs 2500)" };



        string[] departure = new string[3];


        int ticketprice;

        int noOfTickets;

        private void button1_Click(object sender, EventArgs e)
        {
            try
            {
                SqlConnection con = new SqlConnection("Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True");



                String getstop = "select departureTime1,departureTime2,departureTime3,stop1,stop2,stop3 from schedualing where trainID=@trainID ";




                SqlCommand sa = new SqlCommand(getstop, con);




                sa.Parameters.AddWithValue("@trainID", trainID.Text);





                con.Open();






                SqlDataReader reader = sa.ExecuteReader();



                DataTable stop1 = new DataTable();
                stop1.Load(reader);




                string[] stop = new string[3];

                string[] Astop = new string[3];


                int i = 0;



                int k = 0;

                for (int j = 3; j < stop1.Columns.Count; j++)
                {

                    stop[k] = stop1.Rows[i][j].ToString();
                    Astop[k] = stop1.Rows[i][j].ToString();


                    k++;
                }


                for (int j = 0; j < 3; j++)
                {

                    departure[j] = stop1.Rows[i][j].ToString();


                }

                //arrival combobox

                BindingSource theBindingSource = new BindingSource();
                theBindingSource.DataSource = stop;
                comboBox.DataSource = theBindingSource.DataSource;

                //ticketType combobox
                BindingSource bindingSource = new BindingSource();
                bindingSource.DataSource = ticket;
                comboBox1.DataSource = bindingSource.DataSource;

                // departure combo box 
                BindingSource bindingSource1 = new BindingSource();
                bindingSource1.DataSource = Astop;
                combo.DataSource = bindingSource1.DataSource;










                con.Close();



            }




            catch
            {



                MessageBox.Show("Please Enter Correct TrainID");


            }
            finally
            {

                panel4.Show();
            }

        }

        private void comboBox_SelectedValueChanged(object sender, EventArgs e)
        {

        }

        private void comboBox_SelectedIndexChanged(object sender, EventArgs e)
        {


            if (comboBox.SelectedIndex.Equals(0))
            {

                label6.Text = departure[0];


            }
            else if (comboBox.SelectedIndex.Equals(1))
            {
                label6.Text = departure[1];
            }
            else if (comboBox.SelectedIndex.Equals(2))
            {


                label6.Text = (departure[2]);

            }

        }

        private void book_Click(object sender, EventArgs e)
        {

            noOfTickets = int.Parse(tickets.Text);
            string check = comboBox1.SelectedValue.ToString();





            if (check.Equals("Economy(Rs 1500)"))
            {


                ticketprice = 1500 * noOfTickets;


            }


            else if (check.Equals("Luxury(Rs 2000)"))
            {


                ticketprice = 2000 * noOfTickets;

            }


            else if (check.Equals("Business(Rs 2500)"))
            {


                ticketprice = 2500 * noOfTickets;

            }







            try
            {




                SqlConnection con = new SqlConnection("Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True");

                string booking = " insert into booking (traintype,noOfTickets,departureStop,arrivalStop,departureTime,TotalPrice,trainID,PassengersID) values ('" + comboBox1.Text + "',@noOftickets,'" + comboBox.Text + "','" + combo.Text + "','"+label6.Text+"',@ticketprice,'" + trainID.Text + "',@passenger)";


                SqlCommand ja = new SqlCommand(booking, con);




                ja.Parameters.AddWithValue("@noOftickets", SqlDbType.Int).Value = noOfTickets;
                ja.Parameters.AddWithValue("@ticketprice", SqlDbType.Int).Value = ticketprice;
                ja.Parameters.AddWithValue("@passenger", SqlDbType.Int).Value = int.Parse(passenger);




                con.Open();

                ja.ExecuteNonQuery();


                MessageBox.Show(" Train Has been booked");

                con.Close();




            }

            catch
            {
                MessageBox.Show(" Please Fill All Fields");
            }





            label8.Text = ticketprice.ToString();

        }

        string passenger;
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

        private void panel2_Paint(object sender, PaintEventArgs e)
        {

        }

        private void label6_Click(object sender, EventArgs e)
        {

        }

        private void label9_Click(object sender, EventArgs e)
        {

        }

    }
}
