import useCartStore from "../store";
import products from "../constants";

const ProductList = () => {
    const addToCart = useCartStore((state) => state.addToCart);

  return (
    <>
    <div className="grid grid-cols-3 gap-4 p-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <h2 className="font-semibold">{product.name}</h2>
          <p>₹{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
    </>
  )
}

export default ProductList