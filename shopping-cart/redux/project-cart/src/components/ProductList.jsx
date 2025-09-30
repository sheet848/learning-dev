import { useDispatch } from "react-redux";
import { addToCart } from "../store/slice";

const products = [
  { id: 1, name: "Laptop", price: 70000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Keyboard", price: 1500 },
];

const ProductList = () => {

    const dispatch = useDispatch();

  return (
    <>
    <div className="grid grid-cols-3 gap-4 p-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <h2 className="font-semibold">{product.name}</h2>
          <p>₹{product.price}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
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