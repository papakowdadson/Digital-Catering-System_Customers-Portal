import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import OrderItem from "../components/OrderItem";
import CheckoutFooter from "../features/checkout/CheckoutFooter";

const CheckoutPage = () => {
  const { items } = useContext(CartContext);
  if(items.length<1){
    return (
        <div className="p-2">
            <p>No Orders Found</p>
        </div>
    )
  }
  else{
    return ( 
    <div className="p-2">
      <p className="font-semibold mb-2">Your Orders</p>
      <div className="flex flex-col justify-between">
        <div>
          {items.map((item,index) => (
            <OrderItem key={index} item={item} />
          ))}
        </div>
        <div>
          <CheckoutFooter />
        </div>
      </div>
    </div>
  );
}
  
};

export default CheckoutPage;
