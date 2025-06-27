import { createContext, useState } from 'react'
import All_products from '../Utils/allProducts'
import New_collections from '../Utils/newCollections'

export const ShopContext = createContext(null);


const DefaultCart = () =>{

    let cart = {};
    for(let index=0; index < All_products.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState(DefaultCart());

    const AddToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const RemoveFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartItem = () =>{
        let totalCartItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalCartItem += cartItems[item]
            }
        }
        return totalCartItem
    }

    const getTotalCartAmount = ()=> {
        let totalCartAmount = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = All_products.find((product)=>product.id === Number(item))
                totalCartAmount += cartItems[item] * itemInfo.new_price;
            }
        }
        return totalCartAmount
    }

    const ContextValue = {All_products, New_collections, cartItems, AddToCart, RemoveFromCart, getTotalCartAmount, getTotalCartItem}

    return(
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider