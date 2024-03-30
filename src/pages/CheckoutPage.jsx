import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import OrderItem from "../components/OrderItem";
import CheckoutFooter from "../features/checkout/CheckoutFooter";
import noOrder from '../assets/noOrders.svg'

const CheckoutPage = () => {
  const { items } = useContext(CartContext);
  if (items.length < 1) {
    return (
      <div className="py-2 px-4 h-svh">
        <p className="font-semibold mb-2">Your Orders</p>
        <div className="flex justify-center flex-col items-center place-items-center h-full">
        <img src={noOrder} alt="no orders" className="h-3/5" />

             <p className=" text-center">No Orders Found</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="py-2 px-4 flex flex-col justify-between h-svh">
        <div className="">
          <p className="font-semibold mb-2">Your Orders</p>
          <div>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
          </div>
        </div>

        <div>
          <CheckoutFooter />
        </div>
      </div>
    );
  }
};

export default CheckoutPage;
