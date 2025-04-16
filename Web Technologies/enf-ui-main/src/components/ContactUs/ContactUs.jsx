import { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { MdOutlineEmail, MdOutlinePhoneInTalk } from 'react-icons/md';
import { ImFacebook } from 'react-icons/im';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
  "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
  "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala",
  "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
  "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
  "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
  "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
  "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay",
  "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
  "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
  "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
  "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
  "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
  "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];


export default function ContactForm() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Ensure animations run only once when scrolled into view
    });
  }, []);

  return (
    <div className="container mx-auto p-8 min-h-screen bg-gray-100">
      <style jsx>{`
        .icon-background {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          background-color: #f0f0f0; // Adjust this color to match the background color in the image
          border-radius: 50%;
          margin-right: 8px;
        }
      `}</style>
      <div className="flex flex-col md:flex-row h-full">
        <div 
          className="md:w-1/2 p-4 flex flex-col justify-between"
          data-aos="fade-right"
        >
          <div>
            <h2 className="text-5xl font-bold mb-2">Get in touch</h2>
            <p className="mb-8 text-gray-600 text-xl">Lorem Ipsum Dolor Sit Amet Consectetur. Mi Ipsum Diam</p>

            <div className="flex flex-col lg:flex-row lg:space-x-4 mb-4">
              <div className="flex-1 mb-4" data-aos="fade-up">
                <div className="flex items-center mb-2">
                  <div className="p-2 mr-1 bg-gray-200 rounded-full">
                    <MdOutlineEmail className="text-3xl" />
                  </div>
                  <span className="font-bold text-lg">EMAIL FOR ADVERTISING</span>
                </div>
                <span className="ml-8 text-lg">info@golio.com</span>
              </div>

              <div className="flex-1 mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center mb-2">
                  <div className="p-2 mr-1 bg-gray-200 rounded-full">
                    <MdOutlineEmail className="text-3xl" />
                  </div>
                  <span className="font-bold text-lg">EMAIL FOR SOLAR PRODUCT</span>
                </div>
                <span className="ml-8 text-lg">info@golio.com</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-4 mb-4">
              <div className="flex-1 mb-4" data-aos="fade-up">
                <div className="flex items-center mb-2">
                  <div className="p-2 mr-1 bg-gray-200 rounded-full">
                    <MdOutlinePhoneInTalk className="text-3xl" />
                  </div>
                  <span className="font-bold text-lg">PHONE NUMBER (CHINA)</span>
                </div>
                <span className="ml-8 text-lg">+1-202-555-0138</span>
              </div>

              <div className="flex-1 mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center mb-2">
                  <div className="p-2 mr-1 bg-gray-200 rounded-full">
                    <MdOutlinePhoneInTalk className="text-3xl" />
                  </div>
                  <span className="font-bold text-lg">PHONE NUMBER (UK)</span>
                </div>
                <span className="ml-8 text-lg">+1-202-555-0138</span>
              </div>
            </div>

            <iframe
              src="https://maps.google.com/maps?q=901 N Pitt Str., Suite 170 Alexandria, VA 22314, USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="150"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              className="rounded-lg mt-4 mb-0"
              data-aos="fade-up"
              data-aos-delay="400"
            ></iframe>

            <div className="mt-4" data-aos="fade-up" data-aos-delay="600">
              <h3 className="text-2xl font-bold mb-4">Connect with us</h3>
              <div className="flex space-x-4">
                <div className="icon-background"><FaInstagram className="text-4xl" /></div>
                <div className="icon-background"><FaLinkedinIn className="text-4xl" /></div>
                <div className="icon-background"><BsTwitter className="text-4xl" /></div>
                <div className="icon-background"><ImFacebook className="text-4xl" /></div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="md:w-1/2 p-4 bg-white rounded-lg shadow-lg flex flex-col justify-between"
          data-aos="fade-left"
        >
          <div>
            <h2 className="text-5xl font-bold mb-4">Contact US</h2>
            <p className="mb-8 text-gray-600 text-xl">Get in contact with us</p>
            <form className="space-y-4">
              <div className="flex flex-col mb-4">
                <label htmlFor="fullName" className="text-gray-600 text-lg">Full Name</label>
                <input type="text" id="fullName" className="border border-gray-300 p-2 rounded-lg text-lg" required />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="companyName" className="text-gray-600 text-lg">Company Name</label>
                <input type="text" id="companyName" className="border border-gray-300 p-2 rounded-lg text-lg" required />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="businessEmail" className="text-gray-600 text-lg">Business Email</label>
                <input type="email" id="businessEmail" className="border border-gray-300 p-2 rounded-lg text-lg" required />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="phoneNumber" className="text-gray-600 text-lg">Phone Number</label>
                <input type="text" id="phoneNumber" className="border border-gray-300 p-2 rounded-lg text-lg" required />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="country" className="text-gray-600 text-lg">Country</label>
                <select id="country" className="border border-gray-300 p-2 rounded-lg text-lg" required>
                  <option value="" disabled>Select a country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="subject" className="text-gray-600 text-lg">Subject</label>
                <input type="text" id="subject" className="border border-gray-300 p-2 rounded-lg text-lg" required />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="message" className="text-gray-600 text-lg">Write A Message</label>
                <textarea id="message" className="border border-gray-300 p-2 rounded-lg text-lg h-32 overflow-auto" required></textarea>
              </div>
              <button type="submit" className="bg-green-500 text-white p-2 rounded-full text-lg w-full mb-4">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
