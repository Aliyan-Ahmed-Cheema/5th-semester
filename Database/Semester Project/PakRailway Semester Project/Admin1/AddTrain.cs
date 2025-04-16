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
using static System.Windows.Forms.VisualStyles.VisualStyleElement.ListView;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.StartPanel;

namespace Admin1
{
    public partial class AddTrain : Form
    {
        public AddTrain()
        {
            InitializeComponent();
            getAdminID();

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void label9_Click(object sender, EventArgs e)
        {

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

        }

        public static string username = AdminLogin.usernamex;

        private void button1_Click(object sender, EventArgs e)
        {
            if (!Authenticate())
            {


                MessageBox.Show("Do not keep any textBox Blank!");
                return;

            }


            string Connection = "Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True";
            SqlConnection con = new SqlConnection(Connection);


         //  try
          // {

                string AddTrain = "INSERT INTO Train (trainID,startingPoint,endPoint,noOfSeats,noOfCabins,adminID) values('" + TrainID.Text +"','" + StartingPoint.Text + "','" +Endpoint.Text + "','" + NumberOfseat.Text + "','" + NumberOfcabin.Text + "',@adminId);";
               string Schedualing = "INSERT INTO schedualing (trainID,departureTime1,departureTime2,departureTime3,stop1,stop2,stop3) values('" + TrainID.Text +"','" + Departuretime1.Text + "','" + Departuretime2.Text + "','" + Depaturetime3.Text + "','" + Stop1.Text + "','" + Stop2.Text + "','" + Stop3.Text + "');";

               

               SqlCommand da = new SqlCommand(AddTrain, con);
                SqlDataAdapter sa = new SqlDataAdapter(Schedualing, con);
            

            da.Parameters.AddWithValue("@adminId", SqlDbType.Int).Value=int.Parse(Adminx);

                con.Open();
                da.ExecuteNonQuery();
                sa.SelectCommand.ExecuteNonQuery();

                MessageBox.Show("Train Has Been Added");

                clearData();
          //  }
         //  catch
           // {

            //    MessageBox.Show("TrainID Already Exist");
           // }
         //   finally
          // {

          //      con.Close();
         // }

        }
        private void clearData()
        {

            NumberOfseat.Text = "";
            NumberOfcabin.Text = "";
            StartingPoint.Text = "";
            Endpoint.Text = "";
            Stop1.Text = "";
            Stop2.Text = "";
            Stop3.Text = "";
            Departuretime1.Text = "";
            Departuretime2.Text = "";
            Depaturetime3.Text = "";

            NumberOfcabin.Focus();

        }






        bool Authenticate()
        {
            if (string.IsNullOrWhiteSpace(NumberOfseat.Text) ||
                string.IsNullOrWhiteSpace(NumberOfcabin.Text) ||
                string.IsNullOrWhiteSpace(StartingPoint.Text) ||
                string.IsNullOrWhiteSpace(Endpoint.Text) ||
              string.IsNullOrWhiteSpace(Stop1.Text) ||
                string.IsNullOrWhiteSpace(Stop2.Text) ||
                string.IsNullOrWhiteSpace(Stop3.Text)||
                string.IsNullOrWhiteSpace(Departuretime1.Text) ||
                string.IsNullOrWhiteSpace(Departuretime2.Text) ||
                string.IsNullOrWhiteSpace(Depaturetime3.Text) 
                

                )
                return false;
            else return true;


        }

        private void panel2_Paint(object sender, PaintEventArgs e)
        {

        }

        private void label14_Click(object sender, EventArgs e)
        {

        }

        private void TrainType_TextChanged(object sender, EventArgs e)
        {

        }


        string Adminx;

        public void getAdminID()
        {

            string Connection = "Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True";
            SqlConnection con = new SqlConnection(Connection);
            String AdminID = "Select adminID from admin where Username='" + username + "'";

            SqlCommand cmd = new SqlCommand(AdminID, con);

            con.Open();
            SqlDataReader reader = cmd.ExecuteReader();



            while (reader.Read())
            {
                 Adminx= reader.GetValue(0).ToString();

            }

            con.Close();


        }

        private void Stop1_TextChanged(object sender, EventArgs e)
        {

        }

        private void Departuretime1_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
