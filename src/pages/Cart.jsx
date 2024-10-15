import { Link } from "react-router-dom";
import CartCard from "../components/CartCard";

import useTitle from "../hooks/useTitle";
import { useSelector } from "react-redux";

const Cart = () => {
  useTitle("Cart");

  const products = useSelector((state) => state.cart.cartList);
  const total = useSelector((state) => state.cart.total);

  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {products.length} \ ${total}
        </h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}

        <Link to="/" className="backbutton">
          <button>Back to Home</button>
        </Link>
      </section>
    </main>
  );
};

export default Cart;
