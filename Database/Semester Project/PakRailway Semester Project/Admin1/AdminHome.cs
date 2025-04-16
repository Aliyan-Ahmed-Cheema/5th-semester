using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Admin1
{
    public partial class AdminHome : Form
    {
        public AdminHome()
        {
            InitializeComponent();
        }

        private void Form14_Load(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
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

        private void button1_Click(object sender, EventArgs e)
        {
            new AdminLogin().Show();
            this.Hide();
        }

        private void label4_Click(object sender, EventArgs e)
        {

        }
    }
}
