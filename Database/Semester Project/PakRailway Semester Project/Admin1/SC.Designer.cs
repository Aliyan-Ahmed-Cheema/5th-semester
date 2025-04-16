namespace Admin1
{
    partial class SC
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
            this.components = new System.ComponentModel.Container();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle1 = new System.Windows.Forms.DataGridViewCellStyle();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(SC));
            this.passengersTableAdapter = new Admin1.RailwayComplaintSystem7DataSet6TableAdapters.PassengersTableAdapter();
            this.railwayComplaintSystem7DataSet6 = new Admin1.RailwayComplaintSystem7DataSet6();
            this.complaintTableAdapter1 = new Admin1.RailwayComplaintSystem7DataSet1TableAdapters.ComplaintTableAdapter();
            this.complaintBindingSource1 = new System.Windows.Forms.BindingSource(this.components);
            this.railwayComplaintSystem7DataSet1 = new Admin1.RailwayComplaintSystem7DataSet1();
            this.complaintTableAdapter = new Admin1.RailwayComplaintSystem7DataSetTableAdapters.ComplaintTableAdapter();
            this.complaintBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.railwayComplaintSystem7DataSet = new Admin1.RailwayComplaintSystem7DataSet();
            this.passengersBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.comboBox1 = new System.Windows.Forms.ComboBox();
            this.grid1 = new System.Windows.Forms.DataGridView();
            this.button1 = new System.Windows.Forms.Button();
            this.ComplaintId = new System.Windows.Forms.TextBox();
            this.label4 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.panel2 = new System.Windows.Forms.Panel();
            this.bunifuGradientPanel1 = new Bunifu.UI.WinForms.BunifuGradientPanel();
            this.pictureBox3 = new System.Windows.Forms.PictureBox();
            this.label1 = new System.Windows.Forms.Label();
            this.button2 = new System.Windows.Forms.Button();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.panel3 = new System.Windows.Forms.Panel();
            this.Home = new System.Windows.Forms.Button();
            this.See_Feedback = new System.Windows.Forms.Button();
            this.See_Complaint = new System.Windows.Forms.Button();
            this.Add_Train = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem7DataSet6)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem7DataSet1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem7DataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.passengersBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.grid1)).BeginInit();
            this.panel2.SuspendLayout();
            this.bunifuGradientPanel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // passengersTableAdapter
            // 
            this.passengersTableAdapter.ClearBeforeFill = true;
            // 
            // railwayComplaintSystem7DataSet6
            // 
            this.railwayComplaintSystem7DataSet6.DataSetName = "RailwayComplaintSystem7DataSet6";
            this.railwayComplaintSystem7DataSet6.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // complaintTableAdapter1
            // 
            this.complaintTableAdapter1.ClearBeforeFill = true;
            // 
            // complaintBindingSource1
            // 
            this.complaintBindingSource1.DataMember = "Complaint";
            this.complaintBindingSource1.DataSource = this.railwayComplaintSystem7DataSet1;
            // 
            // railwayComplaintSystem7DataSet1
            // 
            this.railwayComplaintSystem7DataSet1.DataSetName = "RailwayComplaintSystem7DataSet1";
            this.railwayComplaintSystem7DataSet1.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // complaintTableAdapter
            // 
            this.complaintTableAdapter.ClearBeforeFill = true;
            // 
            // complaintBindingSource
            // 
            this.complaintBindingSource.DataMember = "Complaint";
            this.complaintBindingSource.DataSource = this.railwayComplaintSystem7DataSet;
            // 
            // railwayComplaintSystem7DataSet
            // 
            this.railwayComplaintSystem7DataSet.DataSetName = "RailwayComplaintSystem7DataSet";
            this.railwayComplaintSystem7DataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // passengersBindingSource
            // 
            this.passengersBindingSource.DataMember = "Passengers";
            this.passengersBindingSource.DataSource = this.railwayComplaintSystem7DataSet6;
            // 
            // comboBox1
            // 
            this.comboBox1.BackColor = System.Drawing.Color.Silver;
            this.comboBox1.Cursor = System.Windows.Forms.Cursors.Hand;
            this.comboBox1.FormattingEnabled = true;
            this.comboBox1.Items.AddRange(new object[] {
            "Technical",
            "IT",
            "Cleaning"});
            this.comboBox1.Location = new System.Drawing.Point(622, 375);
            this.comboBox1.Name = "comboBox1";
            this.comboBox1.Size = new System.Drawing.Size(121, 24);
            this.comboBox1.TabIndex = 19;
            this.comboBox1.SelectedIndexChanged += new System.EventHandler(this.comboBox1_SelectedIndexChanged);
            // 
            // grid1
            // 
            this.grid1.AllowUserToDeleteRows = false;
            dataGridViewCellStyle1.ForeColor = System.Drawing.Color.Black;
            this.grid1.AlternatingRowsDefaultCellStyle = dataGridViewCellStyle1;
            this.grid1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.grid1.Location = new System.Drawing.Point(0, 0);
            this.grid1.Name = "grid1";
            this.grid1.RowHeadersWidth = 51;
            this.grid1.RowTemplate.Height = 24;
            this.grid1.Size = new System.Drawing.Size(797, 334);
            this.grid1.TabIndex = 18;
            this.grid1.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.grid1_CellContentClick);
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.Color.Black;
            this.button1.Font = new System.Drawing.Font("Nirmala UI", 16.2F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button1.ForeColor = System.Drawing.Color.White;
            this.button1.Location = new System.Drawing.Point(268, 509);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(273, 53);
            this.button1.TabIndex = 17;
            this.button1.Text = "SUBMIT";
            this.button1.UseVisualStyleBackColor = false;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // ComplaintId
            // 
            this.ComplaintId.BackColor = System.Drawing.Color.Silver;
            this.ComplaintId.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.ComplaintId.Location = new System.Drawing.Point(196, 365);
            this.ComplaintId.Multiline = true;
            this.ComplaintId.Name = "ComplaintId";
            this.ComplaintId.Size = new System.Drawing.Size(197, 34);
            this.ComplaintId.TabIndex = 14;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label4.Location = new System.Drawing.Point(46, 371);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(141, 25);
            this.label4.TabIndex = 3;
            this.label4.Text = "Complaint No#";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(476, 371);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(113, 25);
            this.label3.TabIndex = 2;
            this.label3.Text = "Department";
            // 
            // panel2
            // 
            this.panel2.BackColor = System.Drawing.Color.White;
            this.panel2.Controls.Add(this.comboBox1);
            this.panel2.Controls.Add(this.grid1);
            this.panel2.Controls.Add(this.button1);
            this.panel2.Controls.Add(this.ComplaintId);
            this.panel2.Controls.Add(this.label4);
            this.panel2.Controls.Add(this.label3);
            this.panel2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel2.Location = new System.Drawing.Point(244, 0);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(800, 619);
            this.panel2.TabIndex = 7;
            // 
            // bunifuGradientPanel1
            // 
            this.bunifuGradientPanel1.BackColor = System.Drawing.Color.Transparent;
            this.bunifuGradientPanel1.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("bunifuGradientPanel1.BackgroundImage")));
            this.bunifuGradientPanel1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.bunifuGradientPanel1.BorderRadius = 1;
            this.bunifuGradientPanel1.Controls.Add(this.pictureBox3);
            this.bunifuGradientPanel1.Controls.Add(this.label1);
            this.bunifuGradientPanel1.Controls.Add(this.button2);
            this.bunifuGradientPanel1.Controls.Add(this.pictureBox1);
            this.bunifuGradientPanel1.Controls.Add(this.panel3);
            this.bunifuGradientPanel1.Controls.Add(this.Home);
            this.bunifuGradientPanel1.Controls.Add(this.See_Feedback);
            this.bunifuGradientPanel1.Controls.Add(this.See_Complaint);
            this.bunifuGradientPanel1.Controls.Add(this.Add_Train);
            this.bunifuGradientPanel1.Dock = System.Windows.Forms.DockStyle.Left;
            this.bunifuGradientPanel1.GradientBottomLeft = System.Drawing.Color.Gray;
            this.bunifuGradientPanel1.GradientBottomRight = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(255)))), ((int)(((byte)(128)))));
            this.bunifuGradientPanel1.GradientTopLeft = System.Drawing.Color.FromArgb(((int)(((byte)(64)))), ((int)(((byte)(64)))), ((int)(((byte)(64)))));
            this.bunifuGradientPanel1.GradientTopRight = System.Drawing.Color.Green;
            this.bunifuGradientPanel1.Location = new System.Drawing.Point(0, 0);
            this.bunifuGradientPanel1.Name = "bunifuGradientPanel1";
            this.bunifuGradientPanel1.Quality = 10;
            this.bunifuGradientPanel1.Size = new System.Drawing.Size(244, 619);
            this.bunifuGradientPanel1.TabIndex = 6;
            // 
            // pictureBox3
            // 
            this.pictureBox3.BackColor = System.Drawing.Color.White;
            this.pictureBox3.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.pictureBox3.Image = global::Admin1.Properties.Resources.download__4_;
            this.pictureBox3.Location = new System.Drawing.Point(23, 566);
            this.pictureBox3.Name = "pictureBox3";
            this.pictureBox3.Size = new System.Drawing.Size(61, 53);
            this.pictureBox3.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBox3.TabIndex = 18;
            this.pictureBox3.TabStop = false;
            this.pictureBox3.Click += new System.EventHandler(this.pictureBox3_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(76, 146);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(148, 31);
            this.label1.TabIndex = 0;
            this.label1.Text = "---ADMIN---";
            // 
            // button2
            // 
            this.button2.BackColor = System.Drawing.Color.Black;
            this.button2.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button2.ForeColor = System.Drawing.Color.White;
            this.button2.Location = new System.Drawing.Point(67, 566);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(177, 53);
            this.button2.TabIndex = 19;
            this.button2.Text = "LOG OUT";
            this.button2.UseVisualStyleBackColor = false;
            this.button2.Click += new System.EventHandler(this.button2_Click);
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
            // 
            // panel3
            // 
            this.panel3.BackColor = System.Drawing.Color.Aqua;
            this.panel3.Location = new System.Drawing.Point(0, 356);
            this.panel3.Name = "panel3";
            this.panel3.Size = new System.Drawing.Size(10, 55);
            this.panel3.TabIndex = 0;
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
            this.Home.Text = "Home";
            this.Home.UseVisualStyleBackColor = true;
            this.Home.Click += new System.EventHandler(this.Home_Click);
            // 
            // See_Feedback
            // 
            this.See_Feedback.FlatAppearance.BorderSize = 0;
            this.See_Feedback.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.See_Feedback.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.See_Feedback.Location = new System.Drawing.Point(11, 439);
            this.See_Feedback.Name = "See_Feedback";
            this.See_Feedback.Size = new System.Drawing.Size(247, 55);
            this.See_Feedback.TabIndex = 2;
            this.See_Feedback.Text = "SEE FEEDBACKS";
            this.See_Feedback.UseVisualStyleBackColor = true;
            this.See_Feedback.Click += new System.EventHandler(this.See_Feedback_Click);
            // 
            // See_Complaint
            // 
            this.See_Complaint.FlatAppearance.BorderSize = 0;
            this.See_Complaint.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.See_Complaint.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.See_Complaint.Location = new System.Drawing.Point(11, 357);
            this.See_Complaint.Name = "See_Complaint";
            this.See_Complaint.Size = new System.Drawing.Size(247, 55);
            this.See_Complaint.TabIndex = 1;
            this.See_Complaint.Text = "SEE COMPLAINTS";
            this.See_Complaint.UseVisualStyleBackColor = true;
            this.See_Complaint.Click += new System.EventHandler(this.See_Complaint_Click);
            // 
            // Add_Train
            // 
            this.Add_Train.FlatAppearance.BorderSize = 0;
            this.Add_Train.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Add_Train.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Add_Train.Location = new System.Drawing.Point(11, 279);
            this.Add_Train.Name = "Add_Train";
            this.Add_Train.Size = new System.Drawing.Size(247, 55);
            this.Add_Train.TabIndex = 0;
            this.Add_Train.Text = "Add Train";
            this.Add_Train.UseVisualStyleBackColor = true;
            this.Add_Train.Click += new System.EventHandler(this.Add_Train_Click);
            // 
            // SC
            // 
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Inherit;
            this.ClientSize = new System.Drawing.Size(1044, 619);
            this.Controls.Add(this.panel2);
            this.Controls.Add(this.bunifuGradientPanel1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "SC";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "SC";
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem7DataSet6)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem7DataSet1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem7DataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.passengersBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.grid1)).EndInit();
            this.panel2.ResumeLayout(false);
            this.panel2.PerformLayout();
            this.bunifuGradientPanel1.ResumeLayout(false);
            this.bunifuGradientPanel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private RailwayComplaintSystem7DataSet6TableAdapters.PassengersTableAdapter passengersTableAdapter;
        private RailwayComplaintSystem7DataSet6 railwayComplaintSystem7DataSet6;
        private RailwayComplaintSystem7DataSet1TableAdapters.ComplaintTableAdapter complaintTableAdapter1;
        private System.Windows.Forms.BindingSource complaintBindingSource1;
        private RailwayComplaintSystem7DataSet1 railwayComplaintSystem7DataSet1;
        private RailwayComplaintSystem7DataSetTableAdapters.ComplaintTableAdapter complaintTableAdapter;
        private System.Windows.Forms.BindingSource complaintBindingSource;
        private RailwayComplaintSystem7DataSet railwayComplaintSystem7DataSet;
        private System.Windows.Forms.BindingSource passengersBindingSource;
        private System.Windows.Forms.PictureBox pictureBox3;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Panel panel3;
        private System.Windows.Forms.Button Home;
        private System.Windows.Forms.Button See_Feedback;
        private System.Windows.Forms.Button See_Complaint;
        private System.Windows.Forms.Button Add_Train;
        private System.Windows.Forms.ComboBox comboBox1;
        private System.Windows.Forms.DataGridView grid1;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.TextBox ComplaintId;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Panel panel2;
        private Bunifu.UI.WinForms.BunifuGradientPanel bunifuGradientPanel1;
    }
}