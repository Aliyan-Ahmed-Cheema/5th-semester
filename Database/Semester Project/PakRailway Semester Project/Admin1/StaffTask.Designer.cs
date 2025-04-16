namespace Admin1
{
    partial class StaffTask
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(StaffTask));
            this.dataGridView1 = new System.Windows.Forms.DataGridView();
            this.button2 = new System.Windows.Forms.Button();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.ComplaintId = new System.Windows.Forms.TextBox();
            this.Status = new System.Windows.Forms.ComboBox();
            this.bunifuGradientPanel1 = new Bunifu.UI.WinForms.BunifuGradientPanel();
            this.pictureBox3 = new System.Windows.Forms.PictureBox();
            this.label1 = new System.Windows.Forms.Label();
            this.button1 = new System.Windows.Forms.Button();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.panel3 = new System.Windows.Forms.Panel();
            this.Home = new System.Windows.Forms.Button();
            this.Add_Train = new System.Windows.Forms.Button();
            this.complaintBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.railwayComplaintSystem7DataSet13 = new Admin1.RailwayComplaintSystem7DataSet13();
            this.complaintTableAdapter = new Admin1.RailwayComplaintSystem7DataSet13TableAdapters.ComplaintTableAdapter();
            this.railwayComplaintSystem15DataSet2 = new Admin1.RailwayComplaintSystem15DataSet2();
            this.complaintBindingSource1 = new System.Windows.Forms.BindingSource(this.components);
            this.complaintTableAdapter1 = new Admin1.RailwayComplaintSystem15DataSet2TableAdapters.ComplaintTableAdapter();
            this.railwayComplaintSystem15DataSet3 = new Admin1.RailwayComplaintSystem15DataSet3();
            this.complaintBindingSource2 = new System.Windows.Forms.BindingSource(this.components);
            this.complaintTableAdapter2 = new Admin1.RailwayComplaintSystem15DataSet3TableAdapters.ComplaintTableAdapter();
            this.complaintNoDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.departmentDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.detailsDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.statusDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            this.bunifuGradientPanel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem7DataSet13)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem15DataSet2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem15DataSet3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource2)).BeginInit();
            this.SuspendLayout();
            // 
            // dataGridView1
            // 
            this.dataGridView1.AutoGenerateColumns = false;
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.complaintNoDataGridViewTextBoxColumn,
            this.departmentDataGridViewTextBoxColumn,
            this.detailsDataGridViewTextBoxColumn,
            this.statusDataGridViewTextBoxColumn});
            this.dataGridView1.DataSource = this.complaintBindingSource1;
            this.dataGridView1.Location = new System.Drawing.Point(244, 0);
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.RowHeadersWidth = 51;
            this.dataGridView1.RowTemplate.Height = 24;
            this.dataGridView1.Size = new System.Drawing.Size(818, 271);
            this.dataGridView1.TabIndex = 10;
            // 
            // button2
            // 
            this.button2.BackColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.button2.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button2.Font = new System.Drawing.Font("Nirmala UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button2.ForeColor = System.Drawing.Color.White;
            this.button2.Location = new System.Drawing.Point(744, 383);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(197, 46);
            this.button2.TabIndex = 11;
            this.button2.Text = "UPDATE";
            this.button2.UseVisualStyleBackColor = false;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(399, 361);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(125, 25);
            this.label2.TabIndex = 12;
            this.label2.Text = "ComplaintNo";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(410, 435);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(128, 25);
            this.label3.TabIndex = 13;
            this.label3.Text = "Select Status";
            // 
            // ComplaintId
            // 
            this.ComplaintId.BackColor = System.Drawing.Color.DarkGray;
            this.ComplaintId.Location = new System.Drawing.Point(544, 361);
            this.ComplaintId.Multiline = true;
            this.ComplaintId.Name = "ComplaintId";
            this.ComplaintId.Size = new System.Drawing.Size(121, 34);
            this.ComplaintId.TabIndex = 14;
            // 
            // Status
            // 
            this.Status.FormattingEnabled = true;
            this.Status.Items.AddRange(new object[] {
            "In Progress",
            "Completed"});
            this.Status.Location = new System.Drawing.Point(544, 435);
            this.Status.Name = "Status";
            this.Status.Size = new System.Drawing.Size(121, 24);
            this.Status.TabIndex = 16;
            // 
            // bunifuGradientPanel1
            // 
            this.bunifuGradientPanel1.BackColor = System.Drawing.Color.Transparent;
            this.bunifuGradientPanel1.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("bunifuGradientPanel1.BackgroundImage")));
            this.bunifuGradientPanel1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.bunifuGradientPanel1.BorderRadius = 1;
            this.bunifuGradientPanel1.Controls.Add(this.pictureBox3);
            this.bunifuGradientPanel1.Controls.Add(this.label1);
            this.bunifuGradientPanel1.Controls.Add(this.button1);
            this.bunifuGradientPanel1.Controls.Add(this.pictureBox1);
            this.bunifuGradientPanel1.Controls.Add(this.panel3);
            this.bunifuGradientPanel1.Controls.Add(this.Home);
            this.bunifuGradientPanel1.Controls.Add(this.Add_Train);
            this.bunifuGradientPanel1.Dock = System.Windows.Forms.DockStyle.Left;
            this.bunifuGradientPanel1.GradientBottomLeft = System.Drawing.Color.Gray;
            this.bunifuGradientPanel1.GradientBottomRight = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(255)))), ((int)(((byte)(128)))));
            this.bunifuGradientPanel1.GradientTopLeft = System.Drawing.Color.FromArgb(((int)(((byte)(64)))), ((int)(((byte)(64)))), ((int)(((byte)(64)))));
            this.bunifuGradientPanel1.GradientTopRight = System.Drawing.Color.Green;
            this.bunifuGradientPanel1.Location = new System.Drawing.Point(0, 0);
            this.bunifuGradientPanel1.Name = "bunifuGradientPanel1";
            this.bunifuGradientPanel1.Quality = 10;
            this.bunifuGradientPanel1.Size = new System.Drawing.Size(244, 666);
            this.bunifuGradientPanel1.TabIndex = 9;
            // 
            // pictureBox3
            // 
            this.pictureBox3.Image = global::Admin1.Properties.Resources.download__4_;
            this.pictureBox3.Location = new System.Drawing.Point(12, 613);
            this.pictureBox3.Name = "pictureBox3";
            this.pictureBox3.Size = new System.Drawing.Size(57, 53);
            this.pictureBox3.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBox3.TabIndex = 4;
            this.pictureBox3.TabStop = false;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(76, 146);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(182, 31);
            this.label1.TabIndex = 0;
            this.label1.Text = "---EMPLOYEE---";
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.Color.Black;
            this.button1.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button1.ForeColor = System.Drawing.Color.White;
            this.button1.Location = new System.Drawing.Point(67, 613);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(177, 53);
            this.button1.TabIndex = 5;
            this.button1.Text = "LOG OUT";
            this.button1.UseVisualStyleBackColor = false;
            this.button1.Click += new System.EventHandler(this.button1_Click);
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
            this.panel3.Location = new System.Drawing.Point(0, 278);
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
            this.Home.Text = "HOME";
            this.Home.UseVisualStyleBackColor = true;
            this.Home.Click += new System.EventHandler(this.Home_Click);
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
            this.Add_Train.Text = "TASKS";
            this.Add_Train.UseVisualStyleBackColor = true;
            // 
            // complaintBindingSource
            // 
            this.complaintBindingSource.DataMember = "Complaint";
            this.complaintBindingSource.DataSource = this.railwayComplaintSystem7DataSet13;
            // 
            // railwayComplaintSystem7DataSet13
            // 
            this.railwayComplaintSystem7DataSet13.DataSetName = "RailwayComplaintSystem7DataSet13";
            this.railwayComplaintSystem7DataSet13.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // complaintTableAdapter
            // 
            this.complaintTableAdapter.ClearBeforeFill = true;
            // 
            // railwayComplaintSystem15DataSet2
            // 
            this.railwayComplaintSystem15DataSet2.DataSetName = "RailwayComplaintSystem15DataSet2";
            this.railwayComplaintSystem15DataSet2.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // complaintBindingSource1
            // 
            this.complaintBindingSource1.DataMember = "Complaint";
            this.complaintBindingSource1.DataSource = this.railwayComplaintSystem15DataSet2;
            // 
            // complaintTableAdapter1
            // 
            this.complaintTableAdapter1.ClearBeforeFill = true;
            // 
            // railwayComplaintSystem15DataSet3
            // 
            this.railwayComplaintSystem15DataSet3.DataSetName = "RailwayComplaintSystem15DataSet3";
            this.railwayComplaintSystem15DataSet3.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // complaintBindingSource2
            // 
            this.complaintBindingSource2.DataMember = "Complaint";
            this.complaintBindingSource2.DataSource = this.railwayComplaintSystem15DataSet3;
            // 
            // complaintTableAdapter2
            // 
            this.complaintTableAdapter2.ClearBeforeFill = true;
            // 
            // complaintNoDataGridViewTextBoxColumn
            // 
            this.complaintNoDataGridViewTextBoxColumn.DataPropertyName = "ComplaintNo";
            this.complaintNoDataGridViewTextBoxColumn.HeaderText = "ComplaintNo";
            this.complaintNoDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.complaintNoDataGridViewTextBoxColumn.Name = "complaintNoDataGridViewTextBoxColumn";
            this.complaintNoDataGridViewTextBoxColumn.ReadOnly = true;
            this.complaintNoDataGridViewTextBoxColumn.Width = 125;
            // 
            // departmentDataGridViewTextBoxColumn
            // 
            this.departmentDataGridViewTextBoxColumn.DataPropertyName = "Department";
            this.departmentDataGridViewTextBoxColumn.HeaderText = "Department";
            this.departmentDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.departmentDataGridViewTextBoxColumn.Name = "departmentDataGridViewTextBoxColumn";
            this.departmentDataGridViewTextBoxColumn.Width = 125;
            // 
            // detailsDataGridViewTextBoxColumn
            // 
            this.detailsDataGridViewTextBoxColumn.DataPropertyName = "Details";
            this.detailsDataGridViewTextBoxColumn.HeaderText = "Details";
            this.detailsDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.detailsDataGridViewTextBoxColumn.Name = "detailsDataGridViewTextBoxColumn";
            this.detailsDataGridViewTextBoxColumn.Width = 400;
            // 
            // statusDataGridViewTextBoxColumn
            // 
            this.statusDataGridViewTextBoxColumn.DataPropertyName = "Status";
            this.statusDataGridViewTextBoxColumn.HeaderText = "Status";
            this.statusDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.statusDataGridViewTextBoxColumn.Name = "statusDataGridViewTextBoxColumn";
            this.statusDataGridViewTextBoxColumn.Width = 125;
            // 
            // StaffTask
            // 
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Inherit;
            this.ClientSize = new System.Drawing.Size(1062, 666);
            this.Controls.Add(this.Status);
            this.Controls.Add(this.ComplaintId);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.dataGridView1);
            this.Controls.Add(this.bunifuGradientPanel1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "StaffTask";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            this.bunifuGradientPanel1.ResumeLayout(false);
            this.bunifuGradientPanel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem7DataSet13)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem15DataSet2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem15DataSet3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource2)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private Bunifu.UI.WinForms.BunifuGradientPanel bunifuGradientPanel1;
        private System.Windows.Forms.PictureBox pictureBox3;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Panel panel3;
        private System.Windows.Forms.Button Home;
        private System.Windows.Forms.Button Add_Train;
        private System.Windows.Forms.DataGridView dataGridView1;
        private RailwayComplaintSystem7DataSet13 railwayComplaintSystem7DataSet13;
        private System.Windows.Forms.BindingSource complaintBindingSource;
        private RailwayComplaintSystem7DataSet13TableAdapters.ComplaintTableAdapter complaintTableAdapter;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox ComplaintId;
        private System.Windows.Forms.ComboBox Status;
        private RailwayComplaintSystem15DataSet2 railwayComplaintSystem15DataSet2;
        private System.Windows.Forms.BindingSource complaintBindingSource1;
        private RailwayComplaintSystem15DataSet2TableAdapters.ComplaintTableAdapter complaintTableAdapter1;
        private RailwayComplaintSystem15DataSet3 railwayComplaintSystem15DataSet3;
        private System.Windows.Forms.BindingSource complaintBindingSource2;
        private RailwayComplaintSystem15DataSet3TableAdapters.ComplaintTableAdapter complaintTableAdapter2;
        private System.Windows.Forms.DataGridViewTextBoxColumn complaintNoDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn departmentDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn detailsDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn statusDataGridViewTextBoxColumn;
    }
}