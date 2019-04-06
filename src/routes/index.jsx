import React from "react";
import { Route } from "react-router-dom";
import routingData from "./routes";

export const routes = (
	<div>
		{
			routingData.map(
				(route) =>  
					<Route key={route} exact path={route.path} component={route.component} />
			)
		}
	</div>
);

