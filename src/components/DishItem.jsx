import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export default function DishItem({ product }) {
  const {addItemToCart} = useContext(CartContext)
  return (
    <div className="rounded border m-2 w-6/12 max-w-36 h-384px">
      <div className="h-40" style={{'backgroundImage':`url(${product.img})`,backgroundSize:'cover'}}/>


      <div className="p-1">
        <p className="font-semibold">{product.title}</p>
        <p className="text-gray-600">
            {product.desc}
        </p>

      </div>
      <div className="flex justify-between items-center p-1">
        <p className="font-medium">
            GHS {product.price}
        </p>
        <button className="p-2 rounded-lg bg-rose-500" type="button" onClick={()=>addItemToCart(product._id,product)}>Add</button>
      </div>
    </div>
  );
}
