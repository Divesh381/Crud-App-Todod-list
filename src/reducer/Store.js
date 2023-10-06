import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootIndex";
const store = configureStore({
    reducer: rootReducer,
})
export default store;