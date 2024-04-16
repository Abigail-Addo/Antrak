import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence wait>
        <Outlet />
      </AnimatePresence>
    </>
  );
}

export default App;
