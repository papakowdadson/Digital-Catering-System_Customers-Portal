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
    <div className="p-2 flex flex-col justify-between h-svh">  
      <div className="">
        <p className="font-semibold mb-2">Your Orders</p>
          <div>
            {items.map((item,index) => (
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
