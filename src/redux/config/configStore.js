// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "./modules/todos";

// reducer root 만들기
const rootReducer = combineReducers({
  todos,
});

// store 만들기
const store = createStore(rootReducer);

export default store;
