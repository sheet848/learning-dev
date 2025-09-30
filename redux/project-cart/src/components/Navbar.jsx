import { useSelector } from "react-redux";

const Navbar = () => {
    const cart = useSelector((state) => state.cart.cart);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="font-bold text-xl">🛒 Shopping Cart</h1>
      <div>Items: {itemCount}</div>
    </nav>
    </>
  )
}

export default Navbar