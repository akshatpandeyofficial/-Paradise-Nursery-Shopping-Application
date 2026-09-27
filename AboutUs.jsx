import { Leaf } from "lucide-react";

export function AboutUs() {
  return (
    <main className="page-wrap">
      <header className="page-heading">
        <span className="eyebrow">Our story</span>
        <h1>About Paradise Nursery</h1>
        <p>We believe every home deserves a little more life.</p>
      </header>
      <section className="about-card">
        <h2><Leaf size={23} style={{ verticalAlign: "middle", marginRight: 8 }} /> Plants make a place feel like home.</h2>
        <p>
          Paradise Nursery is a plant shop created for curious beginners and
          lifelong plant lovers alike. We bring together beautiful, easy-care
          houseplants that help make everyday spaces feel warmer and more alive.
        </p>
        <p>
          From low-maintenance favorites to leafy statement plants, our goal is
          to make choosing and caring for greenery simple, joyful, and accessible.
          Pick a plant, find its sunny spot, and let your little indoor garden grow.
        </p>
      </section>
    </main>
  );
}