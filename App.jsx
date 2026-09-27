import { useState } from "react";
import { AboutUs } from "./pages/AboutUs";
import { Welcome } from "./pages/Welcome";
import { ProductList } from "./pages/ProductList";
import { CartPage } from "./pages/CartPage";
import { Navbar } from "./components/Navbar";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      {page === "home" ? (
        <Welcome onGetStarted={() => navigate("plants")} />
      ) : (
        <>
          <Navbar currentPage={page} onNavigate={navigate} />
          {page === "plants" && <ProductList onNavigate={navigate} />}
          {page === "cart" && <CartPage onNavigate={navigate} />}
          {page === "about" && <AboutUs />}
        </>
      )}
      {page !== "home" && (
        <footer className="site-footer">
          <span>🌱 Paradise Nursery</span>
          <span>Grow a little happiness every day.</span>
        </footer>
      )}
    </div>
  );
}