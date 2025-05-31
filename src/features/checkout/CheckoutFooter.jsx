import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

import { CartContext } from "../../context/cartContext";


export const CheckoutFooter = ({table}) => {
  const navigate = useNavigate();
  const { getTotalPrice,setItems,items,user } = useContext(CartContext);
  console.log("======checkout user====",user.userId)

  const handleCheckout = async() => {
    console.log('checking out orders...')
    let newProductList = items.map((item)=>{
      return {'productId':item._id,'quatity':item.qty,'productName':item.name,'productImageUrl':item.image}
    })

    const newData = { 
    "userId":user.userId,
    "products":newProductList,
    "amount":getTotalPrice(),
    "address":{"city":table?`Table ${table}`:"In-house"},
    "Status":"pending"
}

console.log("======checkout item====",newData)

    //TODO: Write Api call here if successful clear cart and navigate to home , Kindly use Axios I already have it imported
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/orders/create`,newData);
      if(response.status === 200){
        console.log(response.status)
        setItems([])
        toast.success("Order Sent ", {
          position: toast.POSITION.TOP_RIGHT,
        });
        table?navigate(`/?table=${table}`):navigate("/");
      }
    } catch (error) {
      console.log('error with checkout',error);
      toast.failure("Error Sending order ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }


  return (
    <div className="flex justify-between items-center sticky bottom-0 pb-2">
      <p className="font-semibold">GHS {getTotalPrice()}</p>
      <div>
        <button
          className="py-2 px-4 rounded-full bg-rose-500 text-white"
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
