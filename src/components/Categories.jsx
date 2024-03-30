

const Categories = ({name,cartSelected,setCartSelected,setFilteredData,allData} ) => {
    const handlechange = () =>{
        setCartSelected(name)
        setFilteredData(()=>allData.filter((data) => data.categories[0].toLowerCase() === name.toLowerCase()))
    }

    return (
        <button className={cartSelected==name?"rounded bg-rose-500 py-2 px-4 text-white":""} type="button" onClick={()=>handlechange()}><p>{name}</p></button>
        
    )

}
export default Categories