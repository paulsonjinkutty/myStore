import { useState } from "react";
import products from "../data/products.json";
import type { Product } from "./types/Poducts.ts";
import { useCart } from "./hooks/userCart.ts";

import Header from "./components/Header";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Home from "./pages/Home";

import "./App.css";

// This tells TypeScript to treat the imported data as an array of Product objects.
const productList = products as Product[];

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);   // No selected product means the home page is displayed

  const [search, setSearch] = useState(""); // stores the users search text
  const [showCart, setShowCart] = useState(false);

  const { cart, addToCart, clearCart, total } = useCart();    // Get cart state {4 properties} returned by our custom hook

  // Find products whose names match the user search text
  const searchResults = productList.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Find three products from the same category.
  const relatedProducts = selectedProduct
      ? productList
          .filter(
              (product) =>
                  product.category === selectedProduct.category &&
                  product.id !== selectedProduct.id
          )
          .slice(0, 3)
      : [];

  // Return home and clear the search and cart panel visibility.
  function goHome() {
    setSelectedProduct(null);
    setSearch("");
    setShowCart(false);
  }

  // Select a product and close the cart if it is open.
  function selectProduct(product: Product) {
    setSelectedProduct(product);
    setSearch("");
    setShowCart(false);
  }

  return (
      <div className="store">
        <Header
            search={search}
            setSearch={setSearch}
            searchResults={searchResults}
            cartCount={cart.length}
            onHome={goHome}
            onSelectProduct={selectProduct}
            onToggleCart={() => setShowCart(!showCart)}
        />

        {/* Render the cart only when the cart button is clicked. */}
        {showCart && (
            <Cart
                cart={cart}
                total={total}
                onClose={() => setShowCart(false)}
                onClear={clearCart}
            />
        )}

          {/* App passes two props to Home */}
        <main>
          {selectedProduct === null ? (
              <Home
                  products={productList}
                  onSelectProduct={selectProduct}
              />
          ) : (
              <ProductDetails
                  product={selectedProduct}
                  relatedProducts={relatedProducts}
                  onAddToCart={addToCart}
                  onSelectProduct={selectProduct}
                  onBack={goHome}
              />
          )}
        </main>

        <footer>
          <span>myStore.</span>
          <span>LESS, BUT BETTER.</span>
        </footer>
      </div>
  );
}

export default App;
