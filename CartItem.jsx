import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus, Trash2 } from "lucide-react";
import { removeItem, updateQuantity } from "../store/CartSlice";

/**
 * A single shopping-cart row.
 * Displays the item subtotal and the dynamically calculated cart-wide total.
 */
export function CartItem({ item }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items ?? []);

  const quantity = Math.max(1, Number(item.quantity) || 1);
  const unitPrice = Math.max(0, Number(item.price) || 0);
  const itemTotal = unitPrice * quantity;

  // Recalculate the full cart total from the latest Redux state on every update.
  const cartTotal = cartItems.reduce((sum, cartItem) => {
    const price = Math.max(0, Number(cartItem.price) || 0);
    const qty = Math.max(0, Number(cartItem.quantity) || 0);
    return sum + price * qty;
  }, 0);

  const changeQuantity = (nextQuantity) => {
    dispatch(updateQuantity({ id: item.id, quantity: nextQuantity }));
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="unit-price">${unitPrice.toFixed(2)} each</p>

        <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
          <button
            type="button"
            onClick={() => changeQuantity(quantity - 1)}
            disabled={quantity <= 1}
            aria-label={`Decrease ${item.name} quantity`}
          >
            <Minus size={16} />
          </button>
          <strong aria-live="polite">{quantity}</strong>
          <button
            type="button"
            onClick={() => changeQuantity(quantity + 1)}
            aria-label={`Increase ${item.name} quantity`}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="item-total">
        <span className="item-subtotal-label">Item total</span>
        <strong>${itemTotal.toFixed(2)}</strong>
        <button
          type="button"
          className="remove-button"
          onClick={handleRemove}
          aria-label={`Remove ${item.name} from cart`}
        >
          <Trash2 size={15} /> Remove
        </button>
      </div>

      <div className="cart-total-row" aria-live="polite">
        <span>Total cart amount</span>
        <strong>${cartTotal.toFixed(2)}</strong>
      </div>
    </article>
  );
}

export default CartItem;
