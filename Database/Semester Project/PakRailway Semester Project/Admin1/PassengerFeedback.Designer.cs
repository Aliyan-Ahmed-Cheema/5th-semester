namespace Admin1
{
    partial class PassengerFeedback
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(PassengerFeedback));
            Bunifu.UI.WinForms.BunifuButton.BunifuButton.BorderEdges borderEdges3 = new Bunifu.UI.WinForms.BunifuButton.BunifuButton.BorderEdges();
            this.panel2 = new System.Windows.Forms.Panel();
            this.grid2 = new System.Windows.Forms.DataGridView();
            this.label5 = new System.Windows.Forms.Label();
            this.Feed = new System.Windows.Forms.TextBox();
            this.CID = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.bunifuButton1 = new Bunifu.UI.WinForms.BunifuButton.BunifuButton();
            this.bunifuGradientPanel1 = new Bunifu.UI.WinForms.BunifuGradientPanel();
            this.pictureBox3 = new System.Windows.Forms.PictureBox();
            this.button2 = new System.Windows.Forms.Button();
            this.button1 = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.panel3 = new System.Windows.Forms.Panel();
            this.Home = new System.Windows.Forms.Button();
            this.Complaint = new System.Windows.Forms.Button();
            this.BookingInfo = new System.Windows.Forms.Button();
            this.Book_Train = new System.Windows.Forms.Button();
            this.complaintBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.railwayComplaintSystem7DataSet12 = new Admin1.RailwayComplaintSystem7DataSet12();
            this.railwayComplaintSystem7DataSet11 = new Admin1.RailwayComplaintSystem7DataSet11();
            this.feedbackBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.feedbackTableAdapter = new Admin1.RailwayComplaintSystem7DataSet11TableAdapters.feedbackTableAdapter();
            this.complaintTableAdapter = new Admin1.RailwayComplaintSystem7DataSet12TableAdapters.ComplaintTableAdapter();
            this.railwayComplaintSystem15DataSet4 = new Admin1.RailwayComplaintSystem15DataSet4();
            this.complaintBindingSource1 = new System.Windows.Forms.BindingSource(this.components);
            this.complaintTableAdapter1 = new Admin1.RailwayComplaintSystem15DataSet4TableAdapters.ComplaintTableAdapter();
            this.complaintNoDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.departmentDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.detailsDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.statusDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.panel2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.grid2)).BeginInit();
            this.bunifuGradientPanel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem7DataSet12)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem7DataSet11)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.feedbackBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem15DataSet4)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource1)).BeginInit();
            this.SuspendLayout();
            // 
            // panel2
            // 
            this.panel2.Controls.Add(this.grid2);
            this.panel2.Controls.Add(this.bunifuButton1);
            this.panel2.Controls.Add(this.label5);
            this.panel2.Controls.Add(this.Feed);
            this.panel2.Controls.Add(this.CID);
            this.panel2.Controls.Add(this.label2);
            this.panel2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel2.Location = new System.Drawing.Point(244, 0);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(818, 666);
            this.panel2.TabIndex = 18;
            this.panel2.Paint += new System.Windows.Forms.PaintEventHandler(this.panel2_Paint);
            // 
            // grid2
            // 
            this.grid2.AutoGenerateColumns = false;
            this.grid2.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.grid2.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.complaintNoDataGridViewTextBoxColumn,
            this.departmentDataGridViewTextBoxColumn,
            this.detailsDataGridViewTextBoxColumn,
            this.statusDataGridViewTextBoxColumn});
            this.grid2.DataSource = this.complaintBindingSource1;
            this.grid2.Location = new System.Drawing.Point(0, 69);
            this.grid2.Name = "grid2";
            this.grid2.RowHeadersWidth = 51;
            this.grid2.RowTemplate.Height = 24;
            this.grid2.Size = new System.Drawing.Size(818, 183);
            this.grid2.TabIndex = 31;
            this.grid2.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.grid2_CellContentClick);
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.Location = new System.Drawing.Point(65, 439);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(101, 25);
            this.label5.TabIndex = 29;
            this.label5.Text = "FeedBack";
            // 
            // Feed
            // 
            this.Feed.BackColor = System.Drawing.Color.Silver;
            this.Feed.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.Feed.Location = new System.Drawing.Point(183, 401);
            this.Feed.Multiline = true;
            this.Feed.Name = "Feed";
            this.Feed.Size = new System.Drawing.Size(386, 154);
            this.Feed.TabIndex = 28;
            // 
            // CID
            // 
            this.CID.BackColor = System.Drawing.Color.Silver;
            this.CID.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.CID.Location = new System.Drawing.Point(204, 312);
            this.CID.Multiline = true;
            this.CID.Name = "CID";
            this.CID.Size = new System.Drawing.Size(204, 35);
            this.CID.TabIndex = 27;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(42, 312);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(124, 25);
            this.label2.TabIndex = 26;
            this.label2.Text = "Complaint ID";
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
            this.bunifuButton1.ButtonText = "Submit";
            this.bunifuButton1.ButtonTextMarginLeft = 0;
            this.bunifuButton1.ColorContrastOnClick = 45;
            this.bunifuButton1.ColorContrastOnHover = 45;
            this.bunifuButton1.Cursor = System.Windows.Forms.Cursors.Default;
            borderEdges3.BottomLeft = true;
            borderEdges3.BottomRight = true;
            borderEdges3.TopLeft = true;
            borderEdges3.TopRight = true;
            this.bunifuButton1.CustomizableEdges = borderEdges3;
            this.bunifuButton1.DialogResult = System.Windows.Forms.DialogResult.None;
            this.bunifuButton1.DisabledBorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(191)))), ((int)(((byte)(191)))), ((int)(((byte)(191)))));
            this.bunifuButton1.DisabledFillColor = System.Drawing.Color.FromArgb(((int)(((byte)(204)))), ((int)(((byte)(204)))), ((int)(((byte)(204)))));
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
            this.bunifuButton1.Location = new System.Drawing.Point(292, 596);
            this.bunifuButton1.Name = "bunifuButton1";
            this.bunifuButton1.OnDisabledState.BorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(191)))), ((int)(((byte)(191)))), ((int)(((byte)(191)))));
            this.bunifuButton1.OnDisabledState.BorderRadius = 1;
            this.bunifuButton1.OnDisabledState.BorderStyle = Bunifu.UI.WinForms.BunifuButton.BunifuButton.BorderStyles.Solid;
            this.bunifuButton1.OnDisabledState.BorderThickness = 1;
            this.bunifuButton1.OnDisabledState.FillColor = System.Drawing.Color.FromArgb(((int)(((byte)(204)))), ((int)(((byte)(204)))), ((int)(((byte)(204)))));
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
            this.bunifuButton1.TabIndex = 30;
            this.bunifuButton1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.bunifuButton1.TextAlignment = System.Windows.Forms.HorizontalAlignment.Center;
            this.bunifuButton1.TextMarginLeft = 0;
            this.bunifuButton1.TextPadding = new System.Windows.Forms.Padding(0);
            this.bunifuButton1.UseDefaultRadiusAndThickness = true;
            this.bunifuButton1.Click += new System.EventHandler(this.bunifuButton1_Click);
            // 
            // bunifuGradientPanel1
            // 
            this.bunifuGradientPanel1.BackColor = System.Drawing.Color.Transparent;
            this.bunifuGradientPanel1.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("bunifuGradientPanel1.BackgroundImage")));
            this.bunifuGradientPanel1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.bunifuGradientPanel1.BorderRadius = 1;
            this.bunifuGradientPanel1.Controls.Add(this.pictureBox3);
            this.bunifuGradientPanel1.Controls.Add(this.button2);
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
            this.bunifuGradientPanel1.TabIndex = 15;
            this.bunifuGradientPanel1.Click += new System.EventHandler(this.bunifuGradientPanel1_Click);
            // 
            // pictureBox3
            // 
            this.pictureBox3.BackColor = System.Drawing.Color.White;
            this.pictureBox3.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.pictureBox3.Image = global::Admin1.Properties.Resources.download__4_;
            this.pictureBox3.Location = new System.Drawing.Point(16, 613);
            this.pictureBox3.Name = "pictureBox3";
            this.pictureBox3.Size = new System.Drawing.Size(61, 53);
            this.pictureBox3.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBox3.TabIndex = 23;
            this.pictureBox3.TabStop = false;
            // 
            // button2
            // 
            this.button2.BackColor = System.Drawing.Color.Black;
            this.button2.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button2.ForeColor = System.Drawing.Color.White;
            this.button2.Location = new System.Drawing.Point(74, 614);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(177, 53);
            this.button2.TabIndex = 22;
            this.button2.Text = "LOG OUT";
            this.button2.UseVisualStyleBackColor = false;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // button1
            // 
            this.button1.FlatAppearance.BorderSize = 0;
            this.button1.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button1.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button1.Location = new System.Drawing.Point(14, 500);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(230, 55);
            this.button1.TabIndex = 21;
            this.button1.Text = "FEEDBACK";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Nirmala UI", 13.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(22, 146);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(195, 31);
            this.label1.TabIndex = 0;
            this.label1.Text = "---PASSENGER---";
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
            this.panel3.Location = new System.Drawing.Point(3, 500);
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
            // complaintBindingSource
            // 
            this.complaintBindingSource.DataMember = "Complaint";
            this.complaintBindingSource.DataSource = this.railwayComplaintSystem7DataSet12;
            // 
            // railwayComplaintSystem7DataSet12
            // 
            this.railwayComplaintSystem7DataSet12.DataSetName = "RailwayComplaintSystem7DataSet12";
            this.railwayComplaintSystem7DataSet12.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // railwayComplaintSystem7DataSet11
            // 
            this.railwayComplaintSystem7DataSet11.DataSetName = "RailwayComplaintSystem7DataSet11";
            this.railwayComplaintSystem7DataSet11.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // feedbackBindingSource
            // 
            this.feedbackBindingSource.DataMember = "feedback";
            this.feedbackBindingSource.DataSource = this.railwayComplaintSystem7DataSet11;
            // 
            // feedbackTableAdapter
            // 
            this.feedbackTableAdapter.ClearBeforeFill = true;
            // 
            // complaintTableAdapter
            // 
            this.complaintTableAdapter.ClearBeforeFill = true;
            // 
            // railwayComplaintSystem15DataSet4
            // 
            this.railwayComplaintSystem15DataSet4.DataSetName = "RailwayComplaintSystem15DataSet4";
            this.railwayComplaintSystem15DataSet4.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // complaintBindingSource1
            // 
            this.complaintBindingSource1.DataMember = "Complaint";
            this.complaintBindingSource1.DataSource = this.railwayComplaintSystem15DataSet4;
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
            this.detailsDataGridViewTextBoxColumn.Width = 125;
            // 
            // statusDataGridViewTextBoxColumn
            // 
            this.statusDataGridViewTextBoxColumn.DataPropertyName = "Status";
            this.statusDataGridViewTextBoxColumn.HeaderText = "Status";
            this.statusDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.statusDataGridViewTextBoxColumn.Name = "statusDataGridViewTextBoxColumn";
            this.statusDataGridViewTextBoxColumn.Width = 125;
            // 
            // PassengerFeedback
            // 
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Inherit;
            this.ClientSize = new System.Drawing.Size(1062, 666);
            this.Controls.Add(this.panel2);
            this.Controls.Add(this.bunifuGradientPanel1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.Name = "PassengerFeedback";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form12";
            this.Load += new System.EventHandler(this.Form12_Load);
            this.panel2.ResumeLayout(false);
            this.panel2.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.grid2)).EndInit();
            this.bunifuGradientPanel1.ResumeLayout(false);
            this.bunifuGradientPanel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem7DataSet12)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem7DataSet11)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.feedbackBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.railwayComplaintSystem15DataSet4)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.complaintBindingSource1)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Panel panel3;
        private System.Windows.Forms.Button Home;
        private System.Windows.Forms.Button Complaint;
        private System.Windows.Forms.Button BookingInfo;
        private System.Windows.Forms.Button Book_Train;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.TextBox Feed;
        private System.Windows.Forms.TextBox CID;
        private System.Windows.Forms.Label label2;
        private Bunifu.UI.WinForms.BunifuGradientPanel bunifuGradientPanel1;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.PictureBox pictureBox3;
        private Bunifu.UI.WinForms.BunifuButton.BunifuButton bunifuButton1;
        private System.Windows.Forms.DataGridView grid2;
        private RailwayComplaintSystem7DataSet11 railwayComplaintSystem7DataSet11;
        private System.Windows.Forms.BindingSource feedbackBindingSource;
        private RailwayComplaintSystem7DataSet11TableAdapters.feedbackTableAdapter feedbackTableAdapter;
        private RailwayComplaintSystem7DataSet12 railwayComplaintSystem7DataSet12;
        private System.Windows.Forms.BindingSource complaintBindingSource;
        private RailwayComplaintSystem7DataSet12TableAdapters.ComplaintTableAdapter complaintTableAdapter;
        private RailwayComplaintSystem15DataSet4 railwayComplaintSystem15DataSet4;
        private System.Windows.Forms.BindingSource complaintBindingSource1;
        private RailwayComplaintSystem15DataSet4TableAdapters.ComplaintTableAdapter complaintTableAdapter1;
        private System.Windows.Forms.DataGridViewTextBoxColumn complaintNoDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn departmentDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn detailsDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn statusDataGridViewTextBoxColumn;
    }
}