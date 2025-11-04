import {configureStore} from "@reduxjs/toolkit";
import {productsApi} from "./features/products/productsApi";


export const store = configureStore({
    reducer: {
        // Add your reducers here
[productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware)            

}); 