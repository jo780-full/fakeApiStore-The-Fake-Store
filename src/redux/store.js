import { legacy_createStore as createStore } from 'redux';
import reducers from "./reducer/index";
const store = createStore(reducers);
export default store;
