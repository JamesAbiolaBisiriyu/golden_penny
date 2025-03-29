import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import { StoreContext } from "./StoreContext"; 


const StoreContextProvider = (props) => {

  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token,setToken] = useState("");
  const [food_list, setFoodlist] = useState([]);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(url + "/api/cart/add", { itemId }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    }
    
    const removeFromCart = async (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    
      if (token) {
        await axios.post(url + "/api/cart/remove", 
          { itemId }, 
          { headers: { Authorization: `Bearer ${token}` } } // Corrected header
        );
      }
    };
    

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

    const fetchFoodList = async () => {
      const response = await axios.get(url+"/api/food/list");
      setFoodlist(response.data.data);
    }

  useEffect(()=>{
   
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    }
    loadData();
  },[]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is provided and can be any valid React node
};


export default StoreContextProvider;
