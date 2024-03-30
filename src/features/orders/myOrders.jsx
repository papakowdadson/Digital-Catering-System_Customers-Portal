const MyOrder = ({ item }) => {
  return (
    <div className="mb-2">
      <p className="font-semibold">Total GHS{item.amount}</p>
      {item.products.map((product,index) => (
        <div key={index} className="flex items-center mb-2">
          <img src={product.productImageUrl} alt="Order" className="rounded-xl w-3/12 h-16 md:h-24" />
          <p className="ml-1 mr-1 w-4/12">{product.productName}</p>
          <p className={item.Status=='pending'?"ml-1 mr-1 w-1/12 text-red-500":"ml-1 mr-1 w-1/12 text-green-500"}>{item.Status}</p>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
