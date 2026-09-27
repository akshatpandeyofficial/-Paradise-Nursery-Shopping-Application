import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../store/cartSlice";
import { Trash2 } from "lucide-react";

export function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <div className="unit-price">${item.price.toFixed(2)} each</div>
        <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
          <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity <= 1} aria-label="Decrease quantity">−</button>
          <strong>{item.quantity}</strong>
          <button onClick={() => dispatch(increaseQuantity(item.id))} aria-label="Increase quantity">+</button>
        </div>
      </div>
      <div className="item-total">
        ${(item.price * item.quantity).toFixed(2)}
        <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>
          <Trash2 size={14} style={{ verticalAlign: "middle", marginRight: 4 }} /> Remove
        </button>
      </div>
    </article>
  );
}