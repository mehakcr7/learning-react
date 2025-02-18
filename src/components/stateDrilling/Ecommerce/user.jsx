import React, { useEffect, useState } from "react";
import { supabase } from "../../Context/supabaseClient";
const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    contact: "+1 234 567 890",
    dob: "1995-06-15",
    address: "123 Street, City, Country",
  };

  // Fetch cart items from Supabase
  const [fetchdata, setFetchData] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const { data, error } = await supabase.from("addToCart").select("*"); // Select all columns

      if (error) {
        console.error("Error fetching cart items:", error.message);
      } else {
        setFetchData(data);
        console.log(fetchdata);
        console.log(fetchdata);
      }
    };

    fetchCartItems();
  }, [2]);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          User Profile
        </h1>

        {/* User Info Section */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-700">User Details</h2>
          <p className="text-gray-600 mt-2">
            <strong>Name:</strong> {user.name}
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-600">
            <strong>Contact:</strong> {user.contact}
          </p>
          <p className="text-gray-600">
            <strong>DOB:</strong> {user.dob}
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> {user.address}
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Order History
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 text-left">Items</th>
                  <th className="py-2 px-4 text-left">Quantity</th>
                  <th className="py-2 px-4 text-left">Total</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Date & time</th>
                </tr>
              </thead>
              <tbody>
                {fetchdata.map((order) => (
                  <tr key={order.id}>
                    <td className="py-2 px-4">
                      {order.name.map((item, index) => (
                        <p key={index}>
                          {item.Name} (x{item.quantity})
                        </p>
                      ))}
                    </td>
                    <td className="py-2 px-4">
                      {order.name.reduce((sum, item) => sum + item.quantity, 0)}
                    </td>
                    <td className="py-2 px-4">
                      $
                      {order.name
                        .reduce(
                          (total, item) => total + item.Price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </td>
                    <td className="py-2 px-4 font-semibold text-green-600">
                      Delivered
                    </td>
                    <td className="py-2 px-4 text-gray-600">
                      {new Date(order.created_at).toLocaleDateString()} <br />
                      {new Date(order.created_at).toLocaleTimeString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
