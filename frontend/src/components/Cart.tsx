import type{Product} from "../types/Poducts.ts";

type CartProps = {
    cart: Product[];
    total: number;
    onClose: () => void;    // function
    onClear: () => void;    // function
};


function Cart({ cart, total, onClose, onClear }: CartProps) {
    return (
        <section className="cart-panel">
            <div className="cart-heading">
                <h2>Your Cart</h2>
                <button onClick={onClose}>CLOSE ×</button>
            </div>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((product, index) => (
                        <div
                            className="cart-item"
                            key={`${product.id}-${index}`}
                        >
                            <span>{product.name}</span>
                            <span>
                ${product.price.toLocaleString("en-IN")}
              </span>
                        </div>
                    ))}

                    <h3>Total: ₹{total.toLocaleString("en-IN")}</h3>

                    <button className="clear-cart" onClick={onClear}> CLEAR CART </button>
                </>
            )}
        </section>
    );
}

export default Cart;
