import React, { createContext, useState,useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const ProductContext = createContext();
export function ProductProvider(props) {
  const [items, setItems] = useState([]);

  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState([]);

const fetchData =useCallback(async()=>{ 
    setLoading(true);
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
        setLoading(false);
      } else {
        toast("Error Loading Product",{
          position: toast.POSITION.TOP_RIGHT,
        })
        console.log(response);
        setLoading(false);
      }
    } catch (error) {
      console.log(error, error);
      toast("Error Loading Product",{
        position: toast.POSITION.TOP_RIGHT,
      })
      setLoading(false);
    }
  },[]) 

  useEffect(() => {
    fetchData();
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
