import { createContext, useState } from "react";
import { travel_list } from "../Data/Data";
import { package_list } from "../Data/DataPackage";
import { toast } from "react-toastify";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setcartItem] = useState({});

  const add = (e) => {
    console.log(e);
    if (!cartItem[e]) {
      setcartItem((prev) => ({ ...prev, [e]: 1 }));
      toast.success("Added SuccessFully")
    } else {
      setcartItem((prev) => ({ ...prev, [e]: prev[e] + 1 }));
    }
  };

  const removecart = (e) => {
    setcartItem((prev) => {
      const newCartItem = { ...prev };
      if (newCartItem[e] > 1) {
        newCartItem[e] = newCartItem[e] - 1;
      } else {
        delete newCartItem[e];
      }
      return newCartItem;
    });
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let iteminfo = travel_list.find((product) => product._id == item);
        let packageInfo = package_list.find((product) => product._id == item);
        if (iteminfo) {
          const itemPrice = parseFloat(iteminfo.price.replace(/[^\d.-]/g, ''));
          if (!isNaN(itemPrice)) {
            totalAmount += itemPrice * parseInt(cartItem[item]);
          } else {
            console.log(`Invalid price for item ${iteminfo._id}: ${iteminfo.price}`);
          }
        } else {
          console.log(`Item with _id ${item} not found in travel_list`);
        } if (packageInfo) {
          const itemPrice = parseFloat(packageInfo.price.replace(/[^\d.-]/g, ''));
          if (!isNaN(itemPrice)) {
            totalAmount += itemPrice * parseInt(cartItem[item]);
          } else {
            console.log(`Invalid price for item ${packageInfo._id}: ${packageInfo.price}`);
          }
        } else {
          console.log(`Item with _id ${item} not found in travel_list`);
        }
      }
    }
    console.log(`Total Amount: ${totalAmount}`);
    return totalAmount.toFixed(2);
  };
  
  // cart message
  const cartIconCount = () => {
    let cartQuantity = 0;
    for (const item in cartItem){
      if (cartItem [item] > 0) {
        cartQuantity += cartItem[item];
      }  
    }
    return cartQuantity;
  }
  

  const contextValue = {
    cartItem,
    add,
    removecart,
    getTotalAmount,
    cartIconCount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
