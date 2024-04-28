import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import FAQ from "../Pages/Faq";
import Gallery from "../Pages/Gallery";
import Privacy from "../Pages/Privacy";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/privacy-policy" element={<Privacy />} />
    </Route>
  )
);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
