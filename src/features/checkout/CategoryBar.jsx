import Categories from "../../components/Categories";
import { catergories } from "../../data";


const CategoryBar = ({cartSelected,setCartSelected,setFilteredData,allData}) => {
    return (
        <div className="flex justify-evenly sticky top-1 bg-white bg-opacity-20 p-2 rounded-lg backdrop-filter backdrop-blur-lg max-w-lg m-auto">
        {catergories.map((category,index)=><Categories key={index} name={category} cartSelected={cartSelected} setCartSelected={setCartSelected} allData={allData} setFilteredData={setFilteredData}/>)}
    </div>
    )
}
export default CategoryBar;