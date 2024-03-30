import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const OrderItem = ({ item }) => {
  const { addItemToCart, removeItem } = useContext(CartContext);
  return (
    <div className="flex items-center mb-2">
      <img src={item.image} alt="Order" className="rounded-xl w-3/12 h-16 md:h-24" />
      <p className="ml-1 mr-1 w-4/12">{item.name}</p>
      <p className="ml-1 mr-1 w-1/12">{item.price}</p>

      <div className="flex items-center w-3/12 justify-end">
        <div className="w-5 h-5 flex rounded-full border-rose-300 items-center border justify-center">
          <button type="button" onClick={() => removeItem(item._id, item)}>
            -
          </button>
        </div>
        <p className="m-1">{item.qty}</p>
        <div className="w-5 h-5 flex rounded-full border-rose-300 items-center border justify-center">
          <button type="button" onClick={() => addItemToCart(item._id, item)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
