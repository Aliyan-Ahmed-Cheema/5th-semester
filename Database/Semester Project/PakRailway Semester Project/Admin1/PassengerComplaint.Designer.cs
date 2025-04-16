namespace Admin1
{
    partial class PassengerComplaint
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(PassengerComplaint));
            Bunifu.UI.WinForms.BunifuButton.BunifuButton.BorderEdges borderEdges5 = new Bunifu.UI.WinForms.BunifuButton.BunifuButton.BorderEdges();
            this.panel2 = new System.Windows.Forms.Panel();
            this.label3 = new System.Windows.Forms.Label();
            this.Email = new System.Windows.Forms.TextBox();
            this.label5 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.ComplaintDetails = new System.Windows.Forms.TextBox();
            this.Feedback = new System.Windows.Forms.Button();
            this.bunifuButton1 = new Bunifu.UI.WinForms.BunifuButton.BunifuButton();
            this.bunifuGradientPanel1 = new Bunifu.UI.WinForms.BunifuGradientPanel();
            this.button3 = new System.Windows.Forms.Button();
            this.pictureBox3 = new System.Windows.Forms.PictureBox();
            this.button1 = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.panel3 = new System.Windows.Forms.Panel();
            this.Home = new System.Windows.Forms.Button();
            this.Complaint = new System.Windows.Forms.Button();
            this.BookingInfo = new System.Windows.Forms.Button();
            this.Book_Train = new System.Windows.Forms.Button();
            this.ComplaintList = new System.Windows.Forms.DataGridView();
            this.railwayComplaintSystem15DataSet = new Admin1.RailwayComplaintSystem15DataSet();
            this.complaintBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.complaintTableAdapter = new Admin1.RailwayComplaintSystem15DataSetTableAdapters.ComplaintTableAdapter();
            this.railwayComplaintSystem15DataSet1 = new Admin1.RailwayComplaintSystem15DataSet1();
            this.complaintBindingSource1 = new System.Windows.Forms.BindingSource(this.components);
            this.complaintTableAdapter1 = new Admin1.RailwayComplaintSystem15DataSet1TableAdapters.ComplaintTableAdapter();
            this.complaintNoDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.detailsDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.statusDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.panel2.SuspendLayout();
            this.bunifuGradientPanel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.ComplaintList)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem15DataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem15DataSet1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource1)).BeginInit();
            this.SuspendLayout();
            // 
            // panel2
            // 
            this.panel2.Controls.Add(this.ComplaintList);
            this.panel2.Controls.Add(this.label3);
            this.panel2.Controls.Add(this.bunifuButton1);
            this.panel2.Controls.Add(this.Email);
            this.panel2.Controls.Add(this.label5);
            this.panel2.Controls.Add(this.label2);
            this.panel2.Controls.Add(this.ComplaintDetails);
            this.panel2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel2.Location = new System.Drawing.Point(244, 0);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(818, 666);
            this.panel2.TabIndex = 14;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Nirmala UI", 19.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(239, 9);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(319, 45);
            this.label3.TabIndex = 25;
            this.label3.Text = "COMPLAINT FORM";
            // 
            // Email
            // 
            this.Email.BackColor = System.Drawing.Color.Silver;
            this.Email.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.Email.Location = new System.Drawing.Point(232, 314);
            this.Email.Multiline = true;
            this.Email.Name = "Email";
            this.Email.Size = new System.Drawing.Size(335, 35);
            this.Email.TabIndex = 23;
            this.Email.TextChanged += new System.EventHandler(this.Email_TextChanged_1);
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.Location = new System.Drawing.Point(166, 314);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(60, 25);
            this.label5.TabIndex = 22;
            this.label5.Text = "Email";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(65, 413);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(161, 25);
            this.label2.TabIndex = 18;
            this.label2.Text = "Complaint details";
            // 
            // ComplaintDetails
            // 
            this.ComplaintDetails.BackColor = System.Drawing.Color.Silver;
            this.ComplaintDetails.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.ComplaintDetails.Location = new System.Drawing.Point(232, 405);
            this.ComplaintDetails.Multiline = true;
            this.ComplaintDetails.Name = "ComplaintDetails";
            this.ComplaintDetails.Size = new System.Drawing.Size(386, 154);
            this.ComplaintDetails.TabIndex = 17;
            // 
            // Feedback
            // 
            this.Feedback.Location = new System.Drawing.Point(0, 0);
            this.Feedback.Name = "Feedback";
            this.Feedback.Size = new System.Drawing.Size(75, 23);
            this.Feedback.TabIndex = 12;
            // 
            // bunifuButton1
            // 
            this.bunifuButton1.AllowAnimations = true;
            this.bunifuButton1.AllowMouseEffects = true;
            this.bunifuButton1.AllowToggling = false;
            this.bunifuButton1.AnimationSpeed = 200;
            this.bunifuButton1.AutoGenerateColors = false;
            this.bunifuButton1.AutoRoundBorders = false;
            this.bunifuButton1.AutoSizeLeftIcon = true;
            this.bunifuButton1.AutoSizeRightIcon = true;
            this.bunifuButton1.BackColor = System.Drawing.Color.Transparent;
            this.bunifuButton1.BackColor1 = System.Drawing.Color.Black;
            this.bunifuButton1.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("bunifuButton1.BackgroundImage")));
            this.bunifuButton1.BorderStyle = Bunifu.UI.WinForms.BunifuButton.BunifuButton.BorderStyles.Solid;
            this.bunifuButton1.ButtonText = "SUBMIT";
            this.bunifuButton1.ButtonTextMarginLeft = 0;
            this.bunifuButton1.ColorContrastOnClick = 45;
            this.bunifuButton1.ColorContrastOnHover = 45;
            this.bunifuButton1.Cursor = System.Windows.Forms.Cursors.Default;
            borderEdges5.BottomLeft = true;
            borderEdges5.BottomRight = true;
            borderEdges5.TopLeft = true;
            borderEdges5.TopRight = true;
            this.bunifuButton1.CustomizableEdges = borderEdges5;
            this.bunifuButton1.DialogResult = System.Windows.Forms.DialogResult.None;
            this.bunifuButton1.DisabledBorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(191)))), ((int)(((byte)(191)))), ((int)(((byte)(191)))));
            this.bunifuButton1.DisabledFillColor = System.Drawing.Color.Black;
            this.bunifuButton1.DisabledForecolor = System.Drawing.Color.FromArgb(((int)(((byte)(168)))), ((int)(((byte)(160)))), ((int)(((byte)(168)))));
            this.bunifuButton1.FocusState = Bunifu.UI.WinForms.BunifuButton.BunifuButton.ButtonStates.Pressed;
            this.bunifuButton1.Font = new System.Drawing.Font("Segoe UI", 9F);
            this.bunifuButton1.ForeColor = System.Drawing.Color.White;
            this.bunifuButton1.IconLeftAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.bunifuButton1.IconLeftCursor = System.Windows.Forms.Cursors.Default;
            this.bunifuButton1.IconLeftPadding = new System.Windows.Forms.Padding(11, 3, 3, 3);
            this.bunifuButton1.IconMarginLeft = 11;
            this.bunifuButton1.IconPadding = 10;
            this.bunifuButton1.IconRightAlign = System.Drawing.ContentAlignment.MiddleRight;
            this.bunifuButton1.IconRightCursor = System.Windows.Forms.Cursors.Default;
            this.bunifuButton1.IconRightPadding = new System.Windows.Forms.Padding(3, 3, 7, 3);
            this.bunifuButton1.IconSize = 25;
            this.bunifuButton1.IdleBorderColor = System.Drawing.Color.DodgerBlue;
            this.bunifuButton1.IdleBorderRadius = 1;
            this.bunifuButton1.IdleBorderThickness = 1;
            this.bunifuButton1.IdleFillColor = System.Drawing.Color.Black;
            this.bunifuButton1.IdleIconLeftImage = null;
            this.bunifuButton1.IdleIconRightImage = null;
            this.bunifuButton1.IndicateFocus = false;
            this.bunifuButton1.Location = new System.Drawing.Point(334, 583);
            this.bunifuButton1.Name = "bunifuButton1";
            this.bunifuButton1.OnDisabledState.BorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(191)))), ((int)(((byte)(191)))), ((int)(((byte)(191)))));
            this.bunifuButton1.OnDisabledState.BorderRadius = 1;
            this.bunifuButton1.OnDisabledState.BorderStyle = Bunifu.UI.WinForms.BunifuButton.BunifuButton.BorderStyles.Solid;
            this.bunifuButton1.OnDisabledState.BorderThickness = 1;
            this.bunifuButton1.OnDisabledState.FillColor = System.Drawing.Color.Black;
            this.bunifuButton1.OnDisabledState.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(168)))), ((int)(((byte)(160)))), ((int)(((byte)(168)))));
            this.bunifuButton1.OnDisabledState.IconLeftImage = null;
            this.bunifuButton1.OnDisabledState.IconRightImage = null;
            this.bunifuButton1.onHoverState.BorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(105)))), ((int)(((byte)(181)))), ((int)(((byte)(255)))));
            this.bunifuButton1.onHoverState.BorderRadius = 1;
            this.bunifuButton1.onHoverState.BorderStyle = Bunifu.UI.WinForms.BunifuButton.BunifuButton.BorderStyles.Solid;
            this.bunifuButton1.onHoverState.BorderThickness = 1;
            this.bunifuButton1.onHoverState.FillColor = System.Drawing.Color.FromArgb(((int)(((byte)(105)))), ((int)(((byte)(181)))), ((int)(((byte)(255)))));
            this.bunifuButton1.onHoverState.ForeColor = System.Drawing.Color.White;
            this.bunifuButton1.onHoverState.IconLeftImage = null;
            this.bunifuButton1.onHoverState.IconRightImage = null;
            this.bunifuButton1.OnIdleState.BorderColor = System.Drawing.Color.DodgerBlue;
            this.bunifuButton1.OnIdleState.BorderRadius = 1;
            this.bunifuButton1.OnIdleState.BorderStyle = Bunifu.UI.WinForms.BunifuButton.BunifuButton.BorderStyles.Solid;
            this.bunifuButton1.OnIdleState.BorderThickness = 1;
            this.bunifuButton1.OnIdleState.FillColor = System.Drawing.Color.Black;
            this.bunifuButton1.OnIdleState.ForeColor = System.Drawing.Color.White;
            this.bunifuButton1.OnIdleState.IconLeftImage = null;
            this.bunifuButton1.OnIdleState.IconRightImage = null;
            this.bunifuButton1.OnPressedState.BorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(40)))), ((int)(((byte)(96)))), ((int)(((byte)(144)))));
            this.bunifuButton1.OnPressedState.BorderRadius = 1;
            this.bunifuButton1.OnPressedState.BorderStyle = Bunifu.UI.WinForms.BunifuButton.BunifuButton.BorderStyles.Solid;
            this.bunifuButton1.OnPressedState.BorderThickness = 1;
            this.bunifuButton1.OnPressedState.FillColor = System.Drawing.Color.FromArgb(((int)(((byte)(40)))), ((int)(((byte)(96)))), ((int)(((byte)(144)))));
            this.bunifuButton1.OnPressedState.ForeColor = System.Drawing.Color.White;
            this.bunifuButton1.OnPressedState.IconLeftImage = null;
            this.bunifuButton1.OnPressedState.IconRightImage = null;
            this.bunifuButton1.Size = new System.Drawing.Size(150, 39);
            this.bunifuButton1.TabIndex = 24;
            this.bunifuButton1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.bunifuButton1.TextAlignment = System.Windows.Forms.HorizontalAlignment.Center;
            this.bunifuButton1.TextMarginLeft = 0;
            this.bunifuButton1.TextPadding = new System.Windows.Forms.Padding(0);
            this.bunifuButton1.UseDefaultRadiusAndThickness = true;
            this.bunifuButton1.Click += new System.EventHandler(this.bunifuButton1_Click_1);
            // 
            // bunifuGradientPanel1
            // 
            this.bunifuGradientPanel1.BackColor = System.Drawing.Color.Transparent;
            this.bunifuGradientPanel1.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("bunifuGradientPanel1.BackgroundImage")));
            this.bunifuGradientPanel1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.bunifuGradientPanel1.BorderRadius = 1;
            this.bunifuGradientPanel1.Controls.Add(this.button3);
            this.bunifuGradientPanel1.Controls.Add(this.pictureBox3);
            this.bunifuGradientPanel1.Controls.Add(this.button1);
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
            this.bunifuGradientPanel1.TabIndex = 11;
            // 
            // button3
            // 
            this.button3.BackColor = System.Drawing.Color.Black;
            this.button3.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button3.ForeColor = System.Drawing.Color.White;
            this.button3.Location = new System.Drawing.Point(75, 614);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(177, 53);
            this.button3.TabIndex = 25;
            this.button3.Text = "LOG OUT";
            this.button3.UseVisualStyleBackColor = false;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // pictureBox3
            // 
            this.pictureBox3.BackColor = System.Drawing.Color.White;
            this.pictureBox3.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.pictureBox3.Image = global::Admin1.Properties.Resources.download__4_;
            this.pictureBox3.Location = new System.Drawing.Point(19, 611);
            this.pictureBox3.Name = "pictureBox3";
            this.pictureBox3.Size = new System.Drawing.Size(61, 53);
            this.pictureBox3.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBox3.TabIndex = 26;
            this.pictureBox3.TabStop = false;
            // 
            // button1
            // 
            this.button1.FlatAppearance.BorderSize = 0;
            this.button1.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button1.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button1.Location = new System.Drawing.Point(-3, 518);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(247, 55);
            this.button1.TabIndex = 20;
            this.button1.Text = "FEEDBACK";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(64, 143);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(172, 31);
            this.label1.TabIndex = 0;
            this.label1.Text = "---passenger---";
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
            this.panel3.Location = new System.Drawing.Point(0, 439);
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
            // Complaint
            // 
            this.Complaint.FlatAppearance.BorderSize = 0;
            this.Complaint.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Complaint.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Complaint.Location = new System.Drawing.Point(11, 439);
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
            this.BookingInfo.Size = new System.Drawing.Size(247, 76);
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
            // ComplaintList
            // 
            this.ComplaintList.AutoGenerateColumns = false;
            this.ComplaintList.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.ComplaintList.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.complaintNoDataGridViewTextBoxColumn,
            this.detailsDataGridViewTextBoxColumn,
            this.statusDataGridViewTextBoxColumn});
            this.ComplaintList.DataSource = this.complaintBindingSource1;
            this.ComplaintList.Location = new System.Drawing.Point(0, 57);
            this.ComplaintList.Name = "ComplaintList";
            this.ComplaintList.RowHeadersWidth = 51;
            this.ComplaintList.RowTemplate.Height = 24;
            this.ComplaintList.Size = new System.Drawing.Size(818, 227);
            this.ComplaintList.TabIndex = 26;
            this.ComplaintList.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dataGridView1_CellContentClick);
            // 
            // railwayComplaintSystem15DataSet
            // 
            this.railwayComplaintSystem15DataSet.DataSetName = "RailwayComplaintSystem15DataSet";
            this.railwayComplaintSystem15DataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // complaintBindingSource
            // 
            this.complaintBindingSource.DataMember = "Complaint";
            this.complaintBindingSource.DataSource = this.railwayComplaintSystem15DataSet;
            // 
            // complaintTableAdapter
            // 
            this.complaintTableAdapter.ClearBeforeFill = true;
            // 
            // railwayComplaintSystem15DataSet1
            // 
            this.railwayComplaintSystem15DataSet1.DataSetName = "RailwayComplaintSystem15DataSet1";
            this.railwayComplaintSystem15DataSet1.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // complaintBindingSource1
            // 
            this.complaintBindingSource1.DataMember = "Complaint";
            this.complaintBindingSource1.DataSource = this.railwayComplaintSystem15DataSet1;
            // 
            // complaintTableAdapter1
            // 
            this.complaintTableAdapter1.ClearBeforeFill = true;
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
            // detailsDataGridViewTextBoxColumn
            // 
            this.detailsDataGridViewTextBoxColumn.DataPropertyName = "Details";
            this.detailsDataGridViewTextBoxColumn.HeaderText = "Details";
            this.detailsDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.detailsDataGridViewTextBoxColumn.Name = "detailsDataGridViewTextBoxColumn";
            this.detailsDataGridViewTextBoxColumn.Width = 350;
            // 
            // statusDataGridViewTextBoxColumn
            // 
            this.statusDataGridViewTextBoxColumn.DataPropertyName = "Status";
            this.statusDataGridViewTextBoxColumn.HeaderText = "Status";
            this.statusDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.statusDataGridViewTextBoxColumn.Name = "statusDataGridViewTextBoxColumn";
            this.statusDataGridViewTextBoxColumn.Width = 285;
            // 
            // PassengerComplaint
            // 
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Inherit;
            this.ClientSize = new System.Drawing.Size(1062, 666);
            this.Controls.Add(this.panel2);
            this.Controls.Add(this.bunifuGradientPanel1);
            this.Controls.Add(this.Feedback);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "PassengerComplaint";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form8";
            this.Load += new System.EventHandler(this.PassengerComplaint_Load);
            this.panel2.ResumeLayout(false);
            this.panel2.PerformLayout();
            this.bunifuGradientPanel1.ResumeLayout(false);
            this.bunifuGradientPanel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.ComplaintList)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem15DataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem15DataSet1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource1)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel panel2;
        private Bunifu.UI.WinForms.BunifuGradientPanel bunifuGradientPanel1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Panel panel3;
        private System.Windows.Forms.Button Home;
        private System.Windows.Forms.Button Complaint;
        private System.Windows.Forms.Button BookingInfo;
        private System.Windows.Forms.Button Book_Train;
        private System.Windows.Forms.Button Feedback;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox ComplaintDetails;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.TextBox Email;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.PictureBox pictureBox3;
        private Bunifu.UI.WinForms.BunifuButton.BunifuButton bunifuButton1;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.DataGridView ComplaintList;
        private RailwayComplaintSystem15DataSet railwayComplaintSystem15DataSet;
        private System.Windows.Forms.BindingSource complaintBindingSource;
        private RailwayComplaintSystem15DataSetTableAdapters.ComplaintTableAdapter complaintTableAdapter;
        private RailwayComplaintSystem15DataSet1 railwayComplaintSystem15DataSet1;
        private System.Windows.Forms.BindingSource complaintBindingSource1;
        private RailwayComplaintSystem15DataSet1TableAdapters.ComplaintTableAdapter complaintTableAdapter1;
        private System.Windows.Forms.DataGridViewTextBoxColumn complaintNoDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn detailsDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn statusDataGridViewTextBoxColumn;
    }
}