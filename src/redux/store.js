import {configureStore} from "@reduxjs/toolkit";
import {allReducers} from "./reducers/rootReducer";


export const store = configureStore({
    reducer: allReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['SET/SNAPSHOT'],
                // Ignore these field paths in all actions
                ignoredActionPaths: [],
                // Ignore these paths in the state
                ignoredPaths: [],
            },
        }),
})


