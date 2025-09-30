import useCartStore from "../store";

const Navbar = () => {
    const cart = useCartStore((state) => state.cart);

    const numOfItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="font-bold text-xl">🛒 Shopping Cart</h1>
      <div>Items: {numOfItems}</div>
    </nav>
    </>
  )
}

export default Navbar