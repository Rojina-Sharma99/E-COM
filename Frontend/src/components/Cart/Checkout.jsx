import { useState } from "react";
import PayPalButton from "./PayPalButton";
import { useNavigate } from "react-router-dom";

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },

    {
      name: "Casual Sneaker",
      size: "L",
      color: "white",
      price: 75,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 195,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();

    //this will be an async function and this will fetch the api checkout function from backend
    setCheckoutId(123);
  };

  const handlePaymentSuccess = () => {
    console.log("payment sucessful");
    navigate("/order-confirmation");
  };

  return (
    <div className="grid grid-cols-1 gap-8 px-6 py-10 mx-auto tracking-tighter lg:grid-cols-2 max-w-7xl">
      {/**Left section */}
      <div className="p-6 bg-white rounded-lg">
        <h2 className="mb-6 text-2xl uppercase">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="mb-4 text-lg">Contact Details </h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded"
              disabled
            />
          </div>

          <h3 className="mb-4 text-lg">Delivery</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) => {
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  });
                }}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) => {
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  });
                }}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) => {
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                });
              }}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) => {
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  });
                }}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) => {
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  });
                }}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) => {
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                });
              }}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              value={shippingAddress.phone}
              onChange={(e) => {
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                });
              }}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mt-6">
            {!checkoutId ? (
              <button
                className=" w-full py-3 text-white bg-black rounded"
                type="submit"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3>Pay with Paypal</h3>
                <PayPalButton
                  amount={100}
                  onSuccess={handlePaymentSuccess}
                  onError={(error) => alert("Payment failed, please try again")}
                />
              </div>
              //add a paypal button
            )}
          </div>
        </form>
      </div>

      {/**Right section */}
      <div className="p-6 rounded-lg bg-gray-50">
        <h3 className="mb-4 text-lg">Order Summary</h3>
        <div className="py-4 mb-4 border-t">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex py-2 border-b justify-between items-start"
            >
              <div className="flex items-start">
                <img src={product.image} alt={product.name} className="object-cover w-20 h-24 mr-4 " />
                <div>
                    <h3 className="text-lg">{product.name}</h3>
                    <p className="text-gray-500">Sizes: {product.size}</p>
                    <p className="text-gray-500">Color: {product.color}</p>
                </div>
              </div>
              <p>${product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4 text-lg">
            <p>Subtotal</p>
            <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>

        <div className="flex items-center justify-between mb-4 text-lg">
            <p>Shipping</p>
            <p>Free</p>
        </div>
        <div className="flex items-center justify-between mb-4 text-lg border-t pt-4 mt-4">
            <p>Total</p>
            <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
