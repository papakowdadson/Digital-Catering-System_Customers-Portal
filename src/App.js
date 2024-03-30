import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import { CartProvider } from "./context/cartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrdersPage from "./pages/orders";

function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <CartProvider>
          <ToastContainer />
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/orders" element={<OrdersPage/>}/>
            </Routes>
          </Router>
      </CartProvider>
    </div>
  );
}

export default App;
