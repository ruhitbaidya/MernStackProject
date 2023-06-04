import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { allRouterSlice } from '../fetcher/allFetcherSlice';

export const store = configureStore({
    reducer : {
        [allRouterSlice.reducerPath] : allRouterSlice.reducer,
    },
    middleware : (defaultMiddleware)=> defaultMiddleware().concat(allRouterSlice.middleware)
});

setupListeners(store.dispatch);