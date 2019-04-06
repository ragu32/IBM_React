import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import { AppStore as appStore } from "./store/appStore";
// import { ConnectedRouter as Router } from 'react-router-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./layout/index";

// const Application = () => (
// 	<Provider store={appStore.store}>
// 		<Router>
// 			<Layout/>
// 		</Router>
// 	</Provider>
// );

class Application extends React.Component {
	
	render() {
		return (
			<Provider store={appStore.store}>
				<Router history={appStore.history}>
					<Layout />
				</Router>
			</Provider>
		);
	}
}

export {Application};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
