import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrdersDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "Paypal",
      shippingMethod: "Standard",
      shippingAddress: {
        city: "Adelaide",
        country: "Australia",
      },
      orderItems: [
        {
          productId: "1",
          name: "Product 1",
          price: 100,
          quantity: 1,
          image: "https://picsum.photos/150?random=1,",
        },
        {
          productId: "2",
          name: "Product 2",
          price: 150,
          quantity: 4,
          image: "https://picsum.photos/150?random=2,",
        },
      ],
    };
    setOrderDetails(mockOrdersDetails);
  }, [id]);

  return (
    <div className="p-4 mx-auto max-w-7xl sm:p-6">
      <h2 className="mb-6 text-2xl font-bold md:text-3xl">Order Details</h2>
      {!orderDetails ? (
        <p>No Order Details Found</p>
      ) : (
        <div className="p-4 border rounded-lg sm:p-6">
          {/**Order information */}
          <div className="flex flex-col  justify-between  mb-8 sm:flex-row">
            <div>
              <h3 className="text-lg font-semibold md:text-xl">
                {" "}
                Order Id: #{orderDetails._id}
              </h3>
              <p className="text-gray-600">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start mt-4 sm:items-end sm-mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700 "
                    : "bg-red-700 text-red-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700 "
                    : "bg-red-100 text-red-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending"}
              </span>
            </div>
          </div>

          {/**Customer, payment, shipping Info */}
          <div className="grid grid-cols-1 gap-8 mb-8 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h4 className="mb-2 text-lg font-semibold ">Payment Info</h4>
              <p>Payment Method: {orderDetails.paymentMethod}</p>
              <p>Status:{orderDetails.isPaid ? "Paid" : "UnPaid"}</p>
            </div>

            <div>
              <h4 className="mb-2 text-lg font-semibold ">Shipping Info</h4>
              <p>Shipping Method: {orderDetails.paymentMethod}</p>
              <p>Address:{`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
