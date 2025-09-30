import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/slice";

const Cart = () => {

    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <>
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <span>
                  {item.name} x {item.quantity}
                </span>
                <div className="flex items-center gap-2">
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold">Total: ₹{total}</div>
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-gray-700 text-white px-4 py-2 mt-2 rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
    </>
  )
}

export default Cart