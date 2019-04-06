import React from "react";
import { routes as loadComponent } from "../routes/index";
import "../assets/styles/Common.css";
import "react-toastify/dist/ReactToastify.css";
import "../assets/styles/toastify.css";
import { ToastContainer } from "react-toastify";
import "../assets/styles/Common.css";
import {NavBar} from "../Components/index";

class Layout extends React.Component {
	render() {
		return (
			<div className="center">
				{
					window.location && 
					window.location.pathname !== "/" && 
					<NavBar/>
				}
				<div style={{marginTop:"10px"}}>
					{
						loadComponent
					}
				</div>
				<ToastContainer hideProgressBar={true} closeOnClick={true} autoClose={2500} />
			</div>
			// <div>
			//     <Navigation />
			//     <div class="d-flex justify-content-center contentPart">
			//         <div className="w-90">
			//             {
			//                 //content area (will render every page content based on routes.)
			//                 loadComponent
			//             }
			//         </div>
			//     </div>
			//     <div className="clearfix">&nbsp;</div>
			//     <FooterComponent />
			//     <ToastContainer hideProgressBar={true} closeOnClick={true} autoClose={2500} />
			// </div>
		);
	}
}

export default Layout;
