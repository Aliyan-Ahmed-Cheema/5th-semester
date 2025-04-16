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
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace Admin1
{
    public partial class passengerUpdate : Form
    {
        public passengerUpdate()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            string Connection = "Data Source=DESKTOP-3R6CFGK\\SQLEXPRESS;Initial Catalog=RailwayComplaintSystem15;Integrated Security=True";
            SqlConnection con = new SqlConnection(Connection);

          



            try
            {

               








                String querry = "UPDATE login set Password ='" + password.Text + "' , ConfirmPassword ='"+cpassword.Text+"'   WHERE Username ='" +Username1.Text + "'";



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

            
            this.Hide();

        }
    }
}
