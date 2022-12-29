import { combineReducers } from "redux";
import { History } from "history";
import authSlice from "./slices/auth/authSlice";
export default function createRootReducer(history) {
  return combineReducers({
auth: authSlice,
  });
}