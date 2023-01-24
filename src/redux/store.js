import { createStoreHook } from "react-redux";
import cakeReducer from "./cakes/cakeReducer";

const store = createStoreHook(cakeReducer)

export default store