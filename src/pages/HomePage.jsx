import DishItem from "../components/DishItem";
import Footer from "../components/Footer";
import CategoryBar from "../features/checkout/CategoryBar";
import useProduct from "../hooks/useProducts";

const HomePage = () => {
  const { loading, filteredData } = useProduct();

  return (
    <div className="pt-2 pl-2 pr-2">
      <p className="text-center font-semibold">Welcome to K-Foods</p>
      <CategoryBar />
      {loading ? (
        <p className="text-center" >Loading.......</p>
      ) : (
        <div className="flex flex-wrap justify-evenly mb-3">
          {filteredData.map((product, index) => (
            <DishItem key={index} product={product} />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default HomePage;
