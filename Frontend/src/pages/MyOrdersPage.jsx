import React, { useEffect, useState } from "react";

const MyOrdersPage = () => {
  //make a mock order
  //make a order variable, set order

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: { City: "Adelaide", country: "Australia" },
          orderItems: [
            {
              name: "product 1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },

        {
          _id: "34567",
          createdAt: new Date(),
          shippingAddress: { City: "New York", country: "USA" },
          orderItems: [
            {
              name: "product 2",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 50,
          isPaid: false,
        },
      ];

      setOrders(mockOrders);
    }, 2000);
  }, []);
  return (
    <div className="p-4 mx-auto max-w-7xl sm:p-6">
      <h2 className="font-bold mb-6 text-xl sm:text-2xl">My Orders</h2>
      <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="uppercase text-xs text-gray-700 bg-gray-100">
            <tr>
              <th className="px-4 py-2 sm:py-3">Image</th>
              <th className="px-4 py-2 sm:py-3">Order ID</th>
              <th className="px-4 py-2 sm:py-3">Created</th>
              <th className="px-4 py-2 sm:py-3">Shipping adderss</th>
              <th className="px-4 py-2 sm:py-3">items</th>
              <th className="px-4 py-2 sm:py-3">Price</th>
              <th className="px-4 py-2 sm:py-3">status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => [
                <tr
                  key={order._id}
                  className="border-b cursor-pointer hover:border-gray-50"
                >
                  <td className="px-2 py-2 sm:p-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="object-cover w-10 h-10 rounded-lg sm:w-12 sm:h-12"
                    />
                  </td>
                  <td className="px-2 py-2 font-medium text-gray-900 sm:py-4 sm:px-4 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="px-2 py-2 sm:py-4 sm:px-4">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="px-2 py-2 sm:py-4 sm:px-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.City}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="px-2 py-2 sm:py-4 sm:px-4">
                    {order.orderItems.length}
                  </td>
                  <td className="px-2 py-2 sm:py-4 sm:px-4">
                    {order.totalPrice}
                  </td>
                  <td className="px-2 py-2 sm:py-4 sm:px-4">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-180 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ])
            ) : (
              <tr>
                <td colSpan={7} className="px-4 py-4 text-center text-gray-500">
                  {" "}
                  You have no orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
