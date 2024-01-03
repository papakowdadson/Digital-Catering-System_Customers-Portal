import { useEffect, useState } from "react";
import { products } from "../data";
import axios from "axios";

const useProduct = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    fetchData();
    // return (()=>{fetchData()})
  }, []);

  const filter = (category) => {
    let newData = allData.filter((data) => data.categories[0]==category);
    console.log("newData", newData);
    setFilteredData(newData);
  };

  const fetchData = async () => {
    setLoading(true);
    console.log("product", products);
    //TODO write Api call function here, kindly use axios, I alredy have it imported
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/products/`
      );
      if (response.status == 200) {
        console.log('resdata',response.data);
        setAllData(response.data);
        console.log("alldata", allData);
        filter("Breakfast");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, filteredData, filter };
};
export default useProduct;
