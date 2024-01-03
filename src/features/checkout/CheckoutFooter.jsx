import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const CheckoutFooter = () => {
  const navigate = useNavigate();
  const { getTotalPrice,setItems,items } = useContext(CartContext);

  const handleCheckout = async() => {
    let newProductList = items.map((item)=>{
      return {'productId':item._id,'quatity':item.qty,'productName':item.name,'productImageUrl':item.image}
    })

    const newData = { 
    "userId":"643121ec1cb74a068e38625d",
    "products":newProductList,
    "amount":getTotalPrice(),
    "address":{"city":"Accra"},
    "Status":"pending"

}
    //TODO: Write Api call here if successful clear cart and navigate to home , Kindly use Axios I already have it imported
    try {
      const response = await axios.post(`${REACT_APP_BASE_URL}/api/orders/create`,newData);
      if(response.status === 200){
            navigate("/")
      }
    } catch (error) {
      console.log('error')
    }
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
