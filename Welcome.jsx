import { Leaf, ArrowRight } from "lucide-react";

export function Welcome({ onGetStarted }) {
  return (
    <main className="welcome-page background-image">
      <section className="welcome-content">
        <div className="welcome-kicker"><Leaf size={16} /> Welcome to Paradise Nursery</div>
        <h1>Make room<br />for a little green.</h1>
        <p>
          Thoughtfully chosen houseplants to bring calm, color, and a breath of
          fresh air into your home. Find the perfect plant for your space.
        </p>
        <button className="get-started" onClick={onGetStarted}>
          Get Started <ArrowRight size={18} />
        </button>
      </section>
      <div className="welcome-note">A greener home starts with one plant.</div>
    </main>
  );
}