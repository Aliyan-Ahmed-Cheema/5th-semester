import { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

function ShopCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'PNGNH54-B8 415-440W Full Black',
      image: 'path_to_image_1', // Replace with the actual image path
      pricePerUnit: 580.0,
      wpPrice: 0.131,
      quantity: 1,
    },
    {
      id: 2,
      name: 'PNGNH54-B8 415-440W Full Black',
      image: 'path_to_image_2', // Replace with the actual image path
      pricePerUnit: 580.0,
      wpPrice: 0.131,
      quantity: 1,
    },
  ]);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.pricePerUnit * item.quantity, 0);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleEmptyCart = () => {
    setShowConfirmation(true);
  };

  const confirmEmptyCart = () => {
    setCartItems([]);
    setShowConfirmation(false);
  };

  const cancelEmptyCart = () => {
    setShowConfirmation(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    AOS.refresh(); // Refresh AOS after scrolling to the top
  };

  useEffect(() => {
    if (showConfirmation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showConfirmation]);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-gray-50 py-12 px-6" data-aos="fade-up">
      <div className="text-left mb-8">
        <h3 className="text-green-600 font-semibold text-lg">MY CART</h3>
        <h2 className="text-4xl font-bold text-gray-900">Selected Products</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4" data-aos="fade-up">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-gray-600">From ${item.wpPrice} / WP</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    className="px-3 py-1"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={item.quantity}
                    readOnly
                    className="w-8 text-center border-l border-r border-gray-300"
                  />
                  <button
                    className="px-3 py-1"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <div className="ml-4 text-xl font-semibold text-gray-900">
                  ${((item.pricePerUnit * item.quantity).toFixed(2))}
                </div>
                <button
                  className="ml-4 text-red-600 hover:text-red-800"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  ×
                </button>
              </div>
            </div>
          ))}
          <button
            className="text-red-600 hover:text-red-800 mt-4"
            onClick={handleEmptyCart}
          >
            EMPTY CART
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-gray-900">CART TOTALS</h3>
          <div className="mt-4">
            <div className="flex justify-between text-gray-600 mb-2">
              <span>SUBTOTAL</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>SHIPPING</span>
              <span>Free shipping</span>
            </div>
            <div className="text-gray-400 text-sm">
              <span>SHIPPING TO IL</span>
              <button className="ml-2 text-green-600">CHANGE ADDRESS</button>
            </div>
            <div className="flex justify-between text-gray-900 text-lg font-semibold mt-4">
              <span>TOTAL</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" data-aos="fade-in">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Confirm Empty Cart</h3>
            <p className="text-gray-700 mb-6">Are you sure you want to empty the cart? This action cannot be undone.</p>
            <div className="flex justify-end">
              <button
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 mr-4"
                onClick={confirmEmptyCart}
              >
                Yes, Empty Cart
              </button>
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                onClick={cancelEmptyCart}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopCart;
