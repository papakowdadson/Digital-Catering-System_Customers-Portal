import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export default function DishItem({ product }) {
  const { addItemToCart } = useContext(CartContext);
  return (
    <div className="border m-2 w-6/12 max-w-40 h-384px flex flex-col justify-between rounded-2xl md:max-w-60">
      <div>
        <div
          className="h-40 overflow-hidden rounded-2xl"
          style={{
            backgroundImage: `url(${product.img})`,
            backgroundSize: "cover",
          }}
        />
        <div className="p-1">
          <p className="font-semibold">{product.title}</p>
          <p className="text-gray-600">{product.desc}</p>
        </div>
      </div>

      <div className="flex justify-between items-center p-1 ">
        <p className="font-medium">GHS {product.price}</p>
        <button
          className="py-2 px-4 rounded-lg bg-rose-500 text-white"
          type="button"
          onClick={() => addItemToCart(product._id, product)}
        >
          Add
        </button>
      </div>
    </div>
  );
}
