import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles
import man from '../../assets/images/th.jpg';

function Testimonials() {
  const testimonials = [
    {
      name: 'W. S. Gilbert',
      image: 'path_to_image_1', // Replace with the actual image path
      feedback: 'Sed ut perspiciatis unde omnis istejksa natus error sit voluptatem accusantium doloremque laudantium, totam rescmoi aperiam, eaque ipsa quae ab illo dfgtgyu inventore veritatis et quasi architectsao beatae vitae.',
      stars: 5,
    },
  ];

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out',
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="text-center mb-8" data-aos="fade-up">
        <h3 className="text-green-600 font-semibold text-lg">TESTIMONIALS</h3>
        <h2 className="text-4xl font-bold text-gray-900">Words From Our Customer</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md w-full md:w-1/3 mx-4"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`} // Stagger animation for each testimonial
          >
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={man}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                />
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white rounded-full px-3 py-1 text-xs">
                  ""
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">{testimonial.name}</h3>
              <div className="flex space-x-1 mt-2">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.21 1.179-5.938 5.784 1.402 8.178L12 18.902l-7.342 3.857 1.402-8.178L.122 9.197l8.21-1.179L12 .587z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-center mt-4">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
