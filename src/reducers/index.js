import { combineReducers } from "redux";
import errorResponseReducer from "./errorResponseReducer";
import userReducer from "./userReducer";
import itemReducer from "./itemReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  user: userReducer,
  errorResponse: errorResponseReducer,
  item: itemReducer,
  categories: categoryReducer
});
