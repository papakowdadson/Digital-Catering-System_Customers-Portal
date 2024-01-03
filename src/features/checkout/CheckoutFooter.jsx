import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const CheckoutFooter = () => {
  const navigate = useNavigate();
  const { getTotalPrice,setItems } = useContext(CartContext);

  const handleCheckout = () => {
    //TODO: Write Api call here if successful clear cart and navigate to home , Kindly use Axios I already have it imported
    navigate("/")
  }


  return (
    <div className="flex justify-between items-center sticky bottom-0 pb-2">
      <p className="font-semibold">GHS {getTotalPrice()}</p>
      <div>
        <button
          className="p-2 rounded-full bg-rose-500 text-white"
          type="button"
          onClick={handleCheckout}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};
export default CheckoutFooter;
