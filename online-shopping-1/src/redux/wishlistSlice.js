import { createSlice } from "@reduxjs/toolkit";

const storedItems = localStorage.getItem("wishlistItems");

const initialState = {
    wishlistItems:storedItems ? JSON.parse(storedItems):[]
};

const WishlistSlice = createSlice({
    name: 'Wishlist',
    initialState,
    reducers:{
        addToWishlist: (state, action)=>{
            const newItem = action.payload
            const existingItems = state.wishlistItems.find((item)=>item._id === newItem._id)
            if(!existingItems){
                state.wishlistItems.push({
                    _id:newItem._id,
                    productsImg:newItem.productsImg,
                    productsName:newItem.productsName,
                    // productsOffPrice:newItem.productsOffPrice,
                    productsOriginalPrice:newItem.productsOriginalPrice,
                });
            }
            localStorage.setItem('wishlistItems',JSON.stringify(state.wishlistItems))
        },
        deleteFromWishlist:(state,action)=>{
            state.wishlistItems = state.wishlistItems.filter((items)=>items._id !== action.payload._id)
            localStorage.setItem("wishlistItems",JSON.stringify(state.wishlistItems));
        },
    }
})

export default WishlistSlice.reducer;
export const { addToWishlist, deleteFromWishlist } = WishlistSlice.actions