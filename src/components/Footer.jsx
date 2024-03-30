import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { FiShoppingCart } from "react-icons/fi";

export const Footer = () => {
  const navigate = useNavigate();
  const { getItemsCount } = useContext(CartContext);
  return (
    <div className="flex justify-between items-center sticky bottom-0 pb-2">
      <div className="rounded-full bg-white p-4 relative">
        <p className="absolute z-10 top-0 right-0 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">{getItemsCount()}</p>
        <FiShoppingCart size={28} />
      </div>
      <div>
        <button
          className="py-2 px-4 rounded-full bg-rose-500 text-white"
          type="button"
          onClick={() => navigate("/checkout")}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};
export default Footer;
