import { createSlice } from "@reduxjs/toolkit";

const storedItems = localStorage.getItem("cartItems");

const initialState = {
    cartItems:storedItems ? JSON.parse(storedItems):[]
};

const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers:{
        addToCart: (state, action)=>{
            const newItem = action.payload
            const existingItems = state.cartItems.find((item)=>item._id === newItem._id)
            if(existingItems){
                existingItems.quantity += newItem.quantity
            }else{
                state.cartItems.push({
                    _id:newItem._id,
                    productsImg:newItem.productsImg,
                    productsName:newItem.productsName,
                    // productsOffPrice:newItem.productsOffPrice,
                    productsOriginalPrice:newItem.productsOriginalPrice,
                    quantity:1,
                });
            }
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        deleteFromCart:(state,action)=>{
            state.cartItems = state.cartItems.filter((items)=>items._id !== action.payload._id)
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        updateQuantity:(state,action)=>{
            const {id,quantity} = action.payload
            const itemToUpdate = state.cartItems.find((items)=>items._id === id) // id comes from useParams hooks
            if(itemToUpdate){
                itemToUpdate.quantity = quantity
            };
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        }
    }
})

export default CartSlice.reducer;
export const { addToCart, updateQuantity, deleteFromCart } = CartSlice.actions