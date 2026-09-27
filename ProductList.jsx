import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";
import { plantCategories } from "../data/plants";
import { addToCart, selectCartItems } from "../store/cartSlice";

export function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addedIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="page-wrap">
      <header className="page-heading">
        <span className="eyebrow">Find your green</span>
        <h1>Plants for every space</h1>
        <p>Explore our collection of easy-care favorites and leafy statement plants. Choose a category and find your next plant companion.</p>
      </header>
      {plantCategories.map((category) => (
        <section key={category.name} aria-labelledby={category.name.replaceAll(" ", "-")}>
          <h2 className="category-title" id={category.name.replaceAll(" ", "-")}>{category.name}</h2>
          <div className="product-grid">
            {category.plants.map((plant) => (
              <ProductCard
                key={plant.id}
                plant={plant}
                isAdded={addedIds.has(plant.id)}
                onAdd={(selectedPlant) => dispatch(addToCart(selectedPlant))}
              />
            ))}
          </div>
        </section>
      ))}
      <button className="continue-button" onClick={() => onNavigate("cart")}>View shopping cart →</button>
    </main>
  );
}