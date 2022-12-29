import '../styles/globals.css'
import { wrapper } from "../redux/store/store";
import axios from "axios";
import { Toaster } from "react-hot-toast";
if(typeof window !== 'undefined') {
// set the address of server
if (window.location.origin === "http://localhost:3000") {
  axios.defaults.baseURL = "http://127.0.0.1:8000"; // development server address
} else {
  axios.defaults.baseURL = window.location.origin; // production serevr address
}
}
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Toaster/>
  <Component {...pageProps} />
  </>
  )
}

export default wrapper.withRedux(MyApp);
