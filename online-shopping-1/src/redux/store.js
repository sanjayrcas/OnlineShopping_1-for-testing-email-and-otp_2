import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './cartSlice';
import WishlistReducer from './wishlistSlice';

export const store = configureStore({
    reducer:{
        Cart: CartReducer,
        Wishlist: WishlistReducer
    },
    devTools:true
})