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
    public partial class StaffTask : Form
    {

        SqlConnection con = new SqlConnection("Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True");
        SqlConnection cmd;
        DataTable dt;
        SqlDataAdapter adt;

        public StaffTask()
        {
            InitializeComponent();
            display();
        }

        private void button1_Click(object sender, EventArgs e)
        {

            new Stafflogin().Show();
            this.Hide();

        }

        private void Home_Click(object sender, EventArgs e)
        {
            new StaffHome().Show();
            this.Hide();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'railwayComplaintSystem15DataSet3.Complaint' table. You can move, or remove it, as needed.
            this.complaintTableAdapter2.Fill(this.railwayComplaintSystem15DataSet3.Complaint);
            // TODO: This line of code loads data into the 'railwayComplaintSystem15DataSet2.Complaint' table. You can move, or remove it, as needed.
            this.complaintTableAdapter1.Fill(this.railwayComplaintSystem15DataSet2.Complaint);
            // TODO: This line of code loads data into the 'railwayComplaintSystem7DataSet13.Complaint' table. You can move, or remove it, as needed.
            this.complaintTableAdapter.Fill(this.railwayComplaintSystem7DataSet13.Complaint);

        }

        private void button2_Click(object sender, EventArgs e)
        {
            string Connection = "Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True";
            SqlConnection con = new SqlConnection(Connection);


            String querry = "UPDATE Complaint SET Status ='" + Status.SelectedItem.ToString() + "'WHERE ComplaintNo ='" + ComplaintId.Text + "'";



            SqlDataAdapter z = new SqlDataAdapter(querry, con);



            con.Open();


            z.SelectCommand.ExecuteNonQuery();
            MessageBox.Show("Data Saved SuccessFully");

            con.Close();

            new StaffTask().Show();
            this.Hide();

        }



        public void display()
        {



            con.Open();
            adt = new SqlDataAdapter("Select Complaint.ComplaintNo,Complaint.Details,Complaint.Status,Complaint.Department from Complaint", con);
            dt = new DataTable();
            adt.Fill(dt);
            dataGridView1.DataSource = dt;


            con.Close();

        }


    }



}
