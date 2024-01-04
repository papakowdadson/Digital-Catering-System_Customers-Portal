import useProduct from "../hooks/useProducts"


const Categories = ({name,cartSelected,setCartSelected} ) => {
    const {filter} = useProduct();
    const handlechange = () =>{
        filter(name);
        setCartSelected(name)
    }

    return (
        <button className={cartSelected==name?"rounded bg-rose-500 pt-1 pb-1 pr-3 pl-3 text-white":""} type="button" onClick={()=>handlechange()}><p>{name}</p></button>
        
    )

}
export default Categories