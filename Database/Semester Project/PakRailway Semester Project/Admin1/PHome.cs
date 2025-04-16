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
    public partial class PHome : Form
    {
        public PHome()
        {
            InitializeComponent();
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

        private void PFeedback_Click(object sender, EventArgs e)
        {
            new PassengerFeedback().Show();
            this.Hide();

        }

        private void button2_Click(object sender, EventArgs e)
        {
            new PassengerLogin().Show();    
            this.Hide();
        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {

        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {

        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void panel2_Paint(object sender, PaintEventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void bunifuGradientPanel1_Click(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void panel3_Paint(object sender, PaintEventArgs e)
        {

        }

        private void Feedback_Click(object sender, EventArgs e)
        {

        }
    }
}
