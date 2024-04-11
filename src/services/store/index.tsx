import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseApi } from '../apiSlices/baseQuery';
import staticApi from '../apiSlices/staticApi';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        static: staticApi
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;