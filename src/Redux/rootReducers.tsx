import { combineReducers } from "redux";
import CustomAttributeReduce from "./CustomAttributeReduce";

const rootReducer = combineReducers({
    home:CustomAttributeReduce
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;