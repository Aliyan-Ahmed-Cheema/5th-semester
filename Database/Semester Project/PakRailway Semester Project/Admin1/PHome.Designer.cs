namespace Admin1
{
    partial class PHome
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(PHome));
            this.panel2 = new System.Windows.Forms.Panel();
            this.pictureBox2 = new System.Windows.Forms.PictureBox();
            this.label4 = new System.Windows.Forms.Label();
            this.panel1 = new System.Windows.Forms.Panel();
            this.label2 = new System.Windows.Forms.Label();
            this.bunifuGradientPanel1 = new Bunifu.UI.WinForms.BunifuGradientPanel();
            this.pictureBox3 = new System.Windows.Forms.PictureBox();
            this.PFeedback = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.panel3 = new System.Windows.Forms.Panel();
            this.Home = new System.Windows.Forms.Button();
            this.Complaint = new System.Windows.Forms.Button();
            this.BookingInfo = new System.Windows.Forms.Button();
            this.Book_Train = new System.Windows.Forms.Button();
            this.Feedback = new System.Windows.Forms.Button();
            this.panel2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).BeginInit();
            this.panel1.SuspendLayout();
            this.bunifuGradientPanel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // panel2
            // 
            this.panel2.BackColor = System.Drawing.SystemColors.Control;
            this.panel2.Controls.Add(this.pictureBox2);
            this.panel2.Controls.Add(this.label4);
            this.panel2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel2.Location = new System.Drawing.Point(244, 54);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(818, 612);
            this.panel2.TabIndex = 6;
            this.panel2.Paint += new System.Windows.Forms.PaintEventHandler(this.panel2_Paint);
            // 
            // pictureBox2
            // 
            this.pictureBox2.BackColor = System.Drawing.SystemColors.Control;
            this.pictureBox2.Image = global::Admin1.Properties.Resources.download__2_1;
            this.pictureBox2.Location = new System.Drawing.Point(307, 95);
            this.pictureBox2.Margin = new System.Windows.Forms.Padding(4);
            this.pictureBox2.Name = "pictureBox2";
            this.pictureBox2.Size = new System.Drawing.Size(225, 225);
            this.pictureBox2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.AutoSize;
            this.pictureBox2.TabIndex = 5;
            this.pictureBox2.TabStop = false;
            this.pictureBox2.Click += new System.EventHandler(this.pictureBox2_Click);
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F);
            this.label4.Location = new System.Drawing.Point(1, 319);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(894, 145);
            this.label4.TabIndex = 3;
            this.label4.Text = resources.GetString("label4.Text");
            this.label4.Click += new System.EventHandler(this.label4_Click);
            // 
            // panel1
            // 
            this.panel1.BackColor = System.Drawing.Color.Black;
            this.panel1.Controls.Add(this.label2);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Top;
            this.panel1.Location = new System.Drawing.Point(244, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(818, 54);
            this.panel1.TabIndex = 5;
            this.panel1.Paint += new System.Windows.Forms.PaintEventHandler(this.panel1_Paint);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 19.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.ForeColor = System.Drawing.Color.White;
            this.label2.Location = new System.Drawing.Point(312, 9);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(402, 38);
            this.label2.TabIndex = 4;
            this.label2.Text = "Welcome, passenger!     ";
            this.label2.Click += new System.EventHandler(this.label2_Click);
            // 
            // bunifuGradientPanel1
            // 
            this.bunifuGradientPanel1.BackColor = System.Drawing.Color.Transparent;
            this.bunifuGradientPanel1.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("bunifuGradientPanel1.BackgroundImage")));
            this.bunifuGradientPanel1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.bunifuGradientPanel1.BorderRadius = 1;
            this.bunifuGradientPanel1.Controls.Add(this.pictureBox3);
            this.bunifuGradientPanel1.Controls.Add(this.PFeedback);
            this.bunifuGradientPanel1.Controls.Add(this.button2);
            this.bunifuGradientPanel1.Controls.Add(this.label1);
            this.bunifuGradientPanel1.Controls.Add(this.pictureBox1);
            this.bunifuGradientPanel1.Controls.Add(this.panel3);
            this.bunifuGradientPanel1.Controls.Add(this.Home);
            this.bunifuGradientPanel1.Controls.Add(this.Complaint);
            this.bunifuGradientPanel1.Controls.Add(this.BookingInfo);
            this.bunifuGradientPanel1.Controls.Add(this.Book_Train);
            this.bunifuGradientPanel1.Dock = System.Windows.Forms.DockStyle.Left;
            this.bunifuGradientPanel1.GradientBottomLeft = System.Drawing.Color.Gray;
            this.bunifuGradientPanel1.GradientBottomRight = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(255)))), ((int)(((byte)(128)))));
            this.bunifuGradientPanel1.GradientTopLeft = System.Drawing.Color.FromArgb(((int)(((byte)(64)))), ((int)(((byte)(64)))), ((int)(((byte)(64)))));
            this.bunifuGradientPanel1.GradientTopRight = System.Drawing.Color.Green;
            this.bunifuGradientPanel1.Location = new System.Drawing.Point(0, 0);
            this.bunifuGradientPanel1.Name = "bunifuGradientPanel1";
            this.bunifuGradientPanel1.Quality = 10;
            this.bunifuGradientPanel1.Size = new System.Drawing.Size(244, 666);
            this.bunifuGradientPanel1.TabIndex = 3;
            this.bunifuGradientPanel1.Click += new System.EventHandler(this.bunifuGradientPanel1_Click);
            // 
            // pictureBox3
            // 
            this.pictureBox3.Image = global::Admin1.Properties.Resources.download__4_;
            this.pictureBox3.Location = new System.Drawing.Point(12, 610);
            this.pictureBox3.Name = "pictureBox3";
            this.pictureBox3.Size = new System.Drawing.Size(57, 53);
            this.pictureBox3.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBox3.TabIndex = 20;
            this.pictureBox3.TabStop = false;
            this.pictureBox3.Click += new System.EventHandler(this.pictureBox3_Click);
            // 
            // PFeedback
            // 
            this.PFeedback.BackColor = System.Drawing.Color.Transparent;
            this.PFeedback.FlatAppearance.BorderSize = 0;
            this.PFeedback.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.PFeedback.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.PFeedback.Location = new System.Drawing.Point(10, 495);
            this.PFeedback.Name = "PFeedback";
            this.PFeedback.Size = new System.Drawing.Size(234, 55);
            this.PFeedback.TabIndex = 4;
            this.PFeedback.Text = "FEEDBACK";
            this.PFeedback.UseVisualStyleBackColor = false;
            this.PFeedback.Click += new System.EventHandler(this.PFeedback_Click);
            // 
            // button2
            // 
            this.button2.BackColor = System.Drawing.Color.Black;
            this.button2.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button2.ForeColor = System.Drawing.Color.White;
            this.button2.Location = new System.Drawing.Point(67, 611);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(177, 53);
            this.button2.TabIndex = 21;
            this.button2.Text = "LOG OUT";
            this.button2.UseVisualStyleBackColor = false;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(43, 146);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(195, 31);
            this.label1.TabIndex = 0;
            this.label1.Text = "---PASSENGER---";
            this.label1.Click += new System.EventHandler(this.label1_Click);
            // 
            // pictureBox1
            // 
            this.pictureBox1.BackgroundImage = global::Admin1.Properties.Resources.WhatsApp_Image_2022_12_19_at_01_53_58_removebg_preview;
            this.pictureBox1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Zoom;
            this.pictureBox1.Location = new System.Drawing.Point(78, 43);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(100, 100);
            this.pictureBox1.TabIndex = 0;
            this.pictureBox1.TabStop = false;
            this.pictureBox1.Click += new System.EventHandler(this.pictureBox1_Click);
            // 
            // panel3
            // 
            this.panel3.BackColor = System.Drawing.Color.Aqua;
            this.panel3.Location = new System.Drawing.Point(0, 197);
            this.panel3.Name = "panel3";
            this.panel3.Size = new System.Drawing.Size(10, 55);
            this.panel3.TabIndex = 0;
            this.panel3.Paint += new System.Windows.Forms.PaintEventHandler(this.panel3_Paint);
            // 
            // Home
            // 
            this.Home.FlatAppearance.BorderSize = 0;
            this.Home.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Home.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Home.Location = new System.Drawing.Point(11, 197);
            this.Home.Name = "Home";
            this.Home.Size = new System.Drawing.Size(247, 55);
            this.Home.TabIndex = 3;
            this.Home.Text = "HOME";
            this.Home.UseVisualStyleBackColor = true;
            this.Home.Click += new System.EventHandler(this.Home_Click);
            // 
            // Complaint
            // 
            this.Complaint.FlatAppearance.BorderSize = 0;
            this.Complaint.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Complaint.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Complaint.Location = new System.Drawing.Point(3, 434);
            this.Complaint.Name = "Complaint";
            this.Complaint.Size = new System.Drawing.Size(247, 55);
            this.Complaint.TabIndex = 2;
            this.Complaint.Text = "COMPLAINT";
            this.Complaint.UseVisualStyleBackColor = true;
            this.Complaint.Click += new System.EventHandler(this.Complaint_Click);
            // 
            // BookingInfo
            // 
            this.BookingInfo.FlatAppearance.BorderSize = 0;
            this.BookingInfo.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.BookingInfo.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.BookingInfo.Location = new System.Drawing.Point(11, 357);
            this.BookingInfo.Name = "BookingInfo";
            this.BookingInfo.Size = new System.Drawing.Size(247, 71);
            this.BookingInfo.TabIndex = 1;
            this.BookingInfo.Text = "BOOKING INFORMATION";
            this.BookingInfo.UseVisualStyleBackColor = true;
            this.BookingInfo.Click += new System.EventHandler(this.BookingInfo_Click);
            // 
            // Book_Train
            // 
            this.Book_Train.FlatAppearance.BorderSize = 0;
            this.Book_Train.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Book_Train.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Book_Train.Location = new System.Drawing.Point(11, 279);
            this.Book_Train.Name = "Book_Train";
            this.Book_Train.Size = new System.Drawing.Size(247, 55);
            this.Book_Train.TabIndex = 0;
            this.Book_Train.Text = "BOOK TRAIN";
            this.Book_Train.UseVisualStyleBackColor = true;
            this.Book_Train.Click += new System.EventHandler(this.Book_Train_Click);
            // 
            // Feedback
            // 
            this.Feedback.Location = new System.Drawing.Point(0, 0);
            this.Feedback.Name = "Feedback";
            this.Feedback.Size = new System.Drawing.Size(75, 23);
            this.Feedback.TabIndex = 4;
            this.Feedback.Click += new System.EventHandler(this.Feedback_Click);
            // 
            // PHome
            // 
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Inherit;
            this.ClientSize = new System.Drawing.Size(1062, 666);
            this.Controls.Add(this.panel2);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.bunifuGradientPanel1);
            this.Controls.Add(this.Feedback);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "PHome";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form5";
            this.panel2.ResumeLayout(false);
            this.panel2.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).EndInit();
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.bunifuGradientPanel1.ResumeLayout(false);
            this.bunifuGradientPanel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Panel panel1;
        private Bunifu.UI.WinForms.BunifuGradientPanel bunifuGradientPanel1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Panel panel3;
        private System.Windows.Forms.Button Home;
        private System.Windows.Forms.Button Complaint;
        private System.Windows.Forms.Button BookingInfo;
        private System.Windows.Forms.Button Book_Train;
        private System.Windows.Forms.Button Feedback;
        private System.Windows.Forms.Button PFeedback;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.PictureBox pictureBox2;
        private System.Windows.Forms.PictureBox pictureBox3;
        private System.Windows.Forms.Button button2;
    }
}