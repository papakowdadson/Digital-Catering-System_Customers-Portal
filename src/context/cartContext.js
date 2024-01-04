import React, { createContext, useState } from "react";
export const CartContext = createContext();
export function CartProvider(props) {
  // useEffect(async()=>{
  //     fetchCartItems();
  // },[items])

  // const fetchCartItems=async()=>{
  //     try {
  //         await AsyncStorage.setItem('cartItems',JSON.stringify(items));

  //     } catch (error) {

  //     }
  // }

  // const [fav,setFav]=useState([
  //   {
  //     id: "1",
  //     name: "Jollof and Chicken",
  //     vendor: "Adepa Foods",
  //     price: 57.0,
  //     qty: 1,
  //     totalPrice: 57.0,
  //     image: require("../../assets/adepafoods1.jpg"),
  //     rating:1.2,
  //     location:'Jean Nelson'
  //   },
  //   {
  //     id: "2",
  //     name: "Fries and Chicken Breast",
  //     vendor: "Adepa Foods",
  //     price: 43.0,
  //     qty: 1,
  //     totalPrice: 43.0,
  //     image: require("../../assets/adepafoods2.jpg"),
  //     rating:1.2,
  //     location:'Jean Nelson'
  //   },
  //   {
  //     id: "3",
  //     name: "Taki-Taki",
  //     vendor: "Orchid Signatures",
  //     price: 120.1,
  //     qty: 1,
  //     totalPrice: 120.1,
  //     image: require("../../assets/dress1.png"),
  //     rating:1.2,
  //     location:'Jean Nelson'
  //   },
  //   {
  //     id: "4",
  //     name: "iPhone 13 Pro",
  //     vendor: "XnX Electronics",
  //     price: 12492.55,
  //     qty: 1,
  //     totalPrice: 12492.55,
  //     image: require("../../assets/phone1.jpg"),
  //     rating:4.2,
  //     location:'Jean Nelson'
  //   },
  // ])

  const [items, setItems] = useState([
    // {
    //   _id: "1",
    //   name: "Jollof and Chicken",
    //   vendor: "Adepa Foods",
    //   price: 57.0,
    //   qty: 1,
    //   totalPrice: 57.0,
    //   image: "https://eatwellabi.com/wp-content/uploads/2022/11/Jollof-rice-16-720x560.jpg",
    // },
    // {
    //   _id: "2",
    //   name: "Fries and Chicken Breast",
    //   vendor: "Adepa Foods",
    //   price: 43.0,
    //   qty: 1,
    //   totalPrice: 43.0,
    //   image: "https://eatwellabi.com/wp-content/uploads/2022/11/Jollof-rice-16-720x560.jpg",
    // },
  ]);

  // function addRemoveFav(product){
  //   setFav((prevItem)=>{
  //     const item = prevItem.find((item) => item.id === product.id);
  //     if(item){
  //       return prevItem.filter((item)=>item.id!=product.id)
  //     }
  //     return[...prevItem,product]


  //   })
  // }

  function addItemToCart(_id, product) {
    console.log('====adding Item');
    //   const product = getProduct(_id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => item._id === _id);
      if (!item) {
        return [
          ...prevItems,
          {
            _id,
            qty: 1,
            name: product.title,
            vendor: product.vendor,
            price: product.price,
            image: product.img,
            totalPrice: product.price,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item._id === _id) {
            // return{...item,'qyt':item.qty++,'totalPrice':item.totalPrice +product.price}
            item.qty++;
            item.totalPrice += product.price;
          }
          return item;
        });
      }
    });
  }
  const removeItem=(_id, product)=> {
    setItems((prevItems) => {
      const item = prevItems.find((item) => item._id === _id);
      if (item.qty <= 1) {
        return prevItems
          .map((item) => {
            if (item._id === _id) {
              // return {...item,'q':item.qty--,'totalPrice':item.totalPrice -product.price}
              item.qty--;
              item.totalPrice -= product.price;
            }
            return item;
          })
          .filter((item) => item._id !== _id);

        // return prevItems.filter((item)=>item._id!=_id)
      } else {
        return prevItems.map((item) => {
          if (item._id === _id) {
            item.qty--;
            item.totalPrice -= product.price;
          }
          return item;
        });
      }
    });
  }
  const getItemsCount=() =>{
    let itemcount=  items.reduce((sum, item) => sum + item.qty, 0);
    console.log('Total items',itemcount)
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  const getTotalPrice=()=>{
    let itemTotal=items.reduce((sum, item) => sum + item.totalPrice, 0);
    console.log('Item total',itemTotal)
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }


  return (
    <CartContext.Provider
      value={{
        // fav,
        // setFav,
        items,
        setItems,
        getItemsCount,
        addItemToCart,
        getTotalPrice,
        removeItem,
        // addRemoveFav,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
