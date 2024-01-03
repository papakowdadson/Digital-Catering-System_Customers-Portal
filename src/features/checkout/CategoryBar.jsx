import { useState } from "react";
import Categories from "../../components/Categories";
import { catergories } from "../../data";


const CategoryBar = () => {
    const [cartSelected,setCartSelected] = useState('Breakfast')
    return (
        <div className="flex justify-evenly sticky top-1 bg-white bg-opacity-20 p-2 rounded-lg backdrop-filter backdrop-blur-lg">
        {catergories.map((category,index)=><Categories key={index} name={category} cartSelected={cartSelected} setCartSelected={setCartSelected}/>)}
    </div>
    )
}
export default CategoryBar;