import { useEffect, useState } from "react"
import { products } from "../data"

const useProduct = () => {
    const [allData,setAllData] = useState([])
    const [filteredData,setFilteredData] = useState([])
    const [loading, setLoading] = useState([])
    useEffect(()=>{
        fetchData();
        // return (()=>{fetchData()})
    },[]);

    const filter=(category)=>{
        let newData = allData.filter((data)=>data.categories.includes(category))
        console.log('newData',newData);
        setFilteredData(newData)
    }

    const fetchData = async( ) => {
            setLoading(true);
            console.log('product',products);
            //TODO write Api call function here, kindly use axios, I alredy have it imported
            setAllData(products)
            console.log('alldata',allData)
            filter('Breakfast');
            setLoading(false);

    }

    return {loading,filteredData,filter}

}
export default useProduct