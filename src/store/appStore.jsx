import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import reducers from "../reducer/combineReducer";
import thunk from "redux-thunk";

const history = createHistory();
const middleWare = routerMiddleware(history);

export const AppStore = {
	store: createStore(reducers, applyMiddleware(middleWare, thunk)),
	history: history
};
