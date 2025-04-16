import { useState } from "react";
import map from "../../assets/images/map.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    subject: "",
    fullName: "",
    email: "",
    country: "",
    phoneNumber: "",
    city: "",
    companyName: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log(formData);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-50 p-6 md:p-12">
      <div className="md:w-1/2 space-y-6 md:space-y-8">
        <div>
          <h2 className="text-5xl font-bold">Get in touch</h2>
          <p className="text-gray-600 text-2xl">
            Lorem Ipsum Dolor Sit Amet Consectetur. Mi Ipsum Diam
          </p>
        </div>
        <div className="flex flex-col space-y-4 w-3/4">
          <div className="flex gap-6 justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                <i className="fas fa-envelope text-xl"></i>
              </div>
              <div>
                <p className="font-semibold">EMAIL FOR ADVERTISING</p>
                <p>info@golio.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                <i className="fas fa-phone text-xl"></i>
              </div>
              <div>
                <p className="font-semibold">PHONE NUMBER (CHINA)</p>
                <p>+1-202-555-0138</p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                <i className="fas fa-envelope text-xl"></i>
              </div>
              <div>
                <p className="font-semibold">EMAIL FOR SOLAR PRODUCT</p>
                <p>info@golio.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                <i className="fas fa-phone text-xl"></i>
              </div>
              <div>
                <p className="font-semibold">PHONE NUMBER (UK)</p>
                <p>+1-202-555-0138</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={map} alt="Map" className="w-full rounded-md" />
          <p className="flex items-center mt-4 space-x-2">
            <i className="fas fa-map-marker-alt text-green-500"></i>
            <span>901 N Pitt Str., Suite 170 Alexandria, VA 22314, USA</span>
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="text-gray-600">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="#" className="text-gray-600">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" className="text-gray-600">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
        </div>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-4xl font-bold mb-4">Contact US</h2>
          <p className="text-gray-600 mb-6 text-xl">Get in contact with us</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="w-full">
                <h1 className="text-lg pb-2">Subject</h1>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              <div className="w-full">
                <h1 className="text-lg pb-2">Full Name</h1>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <h1 className="text-lg pb-2">Business Email</h1>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="w-full">
                <h1 className="text-lg pb-2">Country</h1>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              <div className="w-full">
                <h1 className="text-lg pb-2">Phone Number</h1>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="w-full">
                <h1 className="text-lg pb-2">City</h1>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              <div className="w-full">
                <h1 className="text-lg pb-2">Company Name</h1>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <h1 className="text-lg"> Write A message</h1>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border h-36 border-gray-300 rounded-md"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600"
            >
              <h1 className="text-lg">Send</h1>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
