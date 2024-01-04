import React, { createContext, useState,useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const ProductContext = createContext();
export function ProductProvider(props) {
  const [items, setItems] = useState([]);

  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

const fetchData =useCallback(async()=>{ 
    
    try {
      console.log("fetching data");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/products/`
      );
      if (response.status === 200) {
        const data = await response.data;
        console.log("resdata", data);
        setAllData(data);
        setItems(()=>data.filter((data) => data.categories[0].toLowerCase() === 'Breakfast'.toLowerCase()));
      } else {
        toast("Error Loading Product",{
          position: toast.POSITION.TOP_RIGHT,
        })
        console.log(response);
      }
    } catch (error) {
      console.log(error, error);
      toast("Error Loading Product",{
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  },[]) 

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
    return () => {
      fetchData();
    };
  }, [fetchData]);

  const filter = (category) => {
    let newData = allData.filter((data) => data.categories[0].toLowerCase() === category.toLowerCase());
    console.log("newData", newData);
    setItems(newData)

  };

  return (
    <ProductContext.Provider
      value={{
        items,
        setItems,
        loading,filter,fetchData
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
