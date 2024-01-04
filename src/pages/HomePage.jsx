import { useContext, useEffect } from "react";
import DishItem from "../components/DishItem";
import Footer from "../components/Footer";
import CategoryBar from "../features/checkout/CategoryBar";
import useProduct from "../hooks/useProducts";
import { ProductContext } from "../context/productContext";

const HomePage = () => {
  const {items,loading} = useContext(ProductContext);
  // const { loading, } = useProduct();

  // useEffect(()=>{
  //   fetchData()
  // },[])

  return (
    <div className="pt-2 pl-2 pr-2">
      <p className="text-center font-semibold">Welcome to K-Foods</p>
      <CategoryBar />
      {loading ? (
        <p className="text-center" >Loading.......</p>
      ) : (
        <div className="flex flex-wrap justify-evenly mb-3">
          {items.map((product, index) => (
            <DishItem key={index} product={product} />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default HomePage;
