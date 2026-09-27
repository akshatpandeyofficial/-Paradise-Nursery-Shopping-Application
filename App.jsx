import { useState } from "react";
import { Leaf, ArrowRight } from "lucide-react";
import { AboutUs } from "./pages/AboutUs";
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
        <main className="welcome-page background-image">
          <section className="welcome-content">
            <div className="welcome-kicker">
              <Leaf size={16} aria-hidden="true" /> Welcome to Paradise Nursery
            </div>
            <header>
              <h1>Welcome to Paradise Nursery</h1>
            </header>
            <p>
              Bring nature home with thoughtfully chosen houseplants that add
              calm, color, and a breath of fresh air to every space.
            </p>
            <button
              className="get-started"
              type="button"
              onClick={() => navigate("plants")}
            >
              Get Started <ArrowRight size={18} aria-hidden="true" />
            </button>
          </section>
          <div className="welcome-note">A greener home starts with one plant.</div>
        </main>
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
