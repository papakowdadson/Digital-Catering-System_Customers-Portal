import { useEffect, useState } from "react";
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
    let newData = allData.filter((data) => data.categories[0] == category);
    console.log("newData", newData);
    setFilteredData(newData);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      console.log("fetching data");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/products/`
      );
      if (response.status == 200) {
        const data = await response.data;
        console.log("resdata", data);
        setAllData(data);
        console.log("alldata", allData);
        filter("BreaKfast");
        setLoading(false);
      } else {
        console.log(response);
        setLoading(false);
      }
    } catch (error) {
      console.log(error, error);
      setLoading(false);
    }
  };

  return { loading, filteredData, filter };
};
export default useProduct;
