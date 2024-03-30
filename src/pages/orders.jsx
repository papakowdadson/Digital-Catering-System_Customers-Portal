import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import MyOrder from "../features/orders/myOrders";
import { CartContext } from "../context/cartContext";
import noOrder from '../assets/noOrders.svg'

function OrdersPage() {
  const {user} =useContext(CartContext)
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  const FetchOrders = async () => {
    setLoading(true);
    try {
      console.log("fetching orders");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/orders/${user.userId}`
      );
      console.log("beforeresdata", response.data);
      if (response.status === 200) {
        const data = await response.data;
        setAllData(data);
      } else {
        console.log("vvresdata", response.data);
        toast("Error Loading Orders", {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log(response);
      }
      setLoading(false);
    } catch (error) {
      console.log(error, error);
      toast("Error Loading Orders", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchOrders();
  }, []);

  if (loading) {
    return <p className="m-8 text-center">Loading........</p>;
  } else {
    return (
      <div className="p-4 flex flex-col h-svh">
        <div>
          <p className="text-left font-semibold mb-6 text-2xl">
            My <span className="text-rose-500">Orders</span>
          </p>
        </div>
        {allData.length > 0 && !loading ? (
          <div>
            {allData.map((item, index) => (
              <MyOrder key={index} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center flex-col items-center place-items-center h-full">
            <img src={noOrder} alt="no orders" className="h-3/5" />
            <p>You have no orders</p>
          </div>
        )}
      </div>
    );
  }
}

export default OrdersPage;
