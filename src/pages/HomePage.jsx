import {useEffect,useState } from "react";
import DishItem from "../components/DishItem";
import Footer from "../components/Footer";
import CategoryBar from "../features/checkout/CategoryBar";
import { toast } from "react-toastify";
import axios from "axios";


const HomePage = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartSelected,setCartSelected] = useState('Breakfast')



  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log("fetching data");
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/products/`
        );
        console.log("beforeresdata", response.data);
        if (response.status === 200) {
          const data = await response.data;
          // console.log("resdata", data);     
          console.log("alldata", allData);
          let newData = data.filter((data) => data.categories[0].toLowerCase() === 'Breakfast'.toLowerCase());
          setFilteredData(newData); 
          setAllData(data);
          // filter("BreaKfast");
        } else {
          console.log("vvresdata", response.data);
          toast("Error Loading Product",{
            position: toast.POSITION.TOP_RIGHT,
          })
          console.log(response);  
        }
        setLoading(false);
      } catch (error) {
        console.log(error, error);
        toast("Error Loading Product",{
          position: toast.POSITION.TOP_RIGHT,
        })
        setLoading(false);
      }
    };
  
    fetchData()
  },[])

  return (
    <div className="pt-2 pl-2 pr-2 flex flex-col justify-between h-screen">
      <div>
        <p className="text-center font-semibold mb-6">Welcome to K-Foods</p>
        <CategoryBar cartSelected={cartSelected} setCartSelected={setCartSelected} setFilteredData={setFilteredData} allData={allData} />
        {loading ? (
          <p className="text-center">Loading.......</p>
        ) : (
          <div className="flex flex-wrap justify-evenly mb-3">
            {filteredData.map((product, index) => (
              <DishItem key={index} product={product} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
