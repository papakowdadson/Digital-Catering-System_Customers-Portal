import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import { CartProvider } from "./context/cartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductProvider } from "./context/productContext";

function App() {
  return (
    <>
      <CartProvider>
        <ProductProvider>
          <ToastContainer />
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </Router>
        </ProductProvider>
      </CartProvider>
    </>
  );
}

export default App;
