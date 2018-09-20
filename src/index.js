import ReactDOM from "react-dom";
//
// import { Provider } from "react-redux";
// import configureStore from "./store";

//Routes info
import routes from "./routes.jsx";

import "./index.css";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(routes, document.getElementById("root"));
registerServiceWorker();
