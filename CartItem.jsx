import { useDispatch } from "react-redux";
import { Minus, Plus, Trash2 } from "lucide-react";
import { removeItem, updateQuantity } from "../store/CartSlice";

export function CartItem({ item }) {
  const dispatch = useDispatch();
  const quantity = Number(item.quantity) || 1;
  const unitPrice = Number(item.price) || 0;
  const itemTotal = unitPrice * quantity;

  const changeQuantity = (nextQuantity) => {
    dispatch(updateQuantity({ id: item.id, quantity: nextQuantity }));
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
        <span>${itemTotal.toFixed(2)}</span>
        <button
          type="button"
          className="remove-button"
          onClick={() => dispatch(removeItem(item.id))}
          aria-label={`Remove ${item.name} from cart`}
        >
          <Trash2 size={15} /> Remove
        </button>
      </div>
    </article>
  );
}

export default CartItem;
