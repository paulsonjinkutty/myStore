import type { Product } from "../types/Poducts.ts";

type HeaderProps = {
    search: string;
    setSearch: (value: string) => void;
    searchResults: Product[];
    cartCount: number;
    onHome: () => void;
    onSelectProduct: (product: Product) => void;
    onToggleCart: () => void;
};


// Displays the logo, product search and cart button.
// Receives state and event handlers from App.tsx through props.

function Header({
                    search,
                    setSearch,
                    searchResults,
                    cartCount,
                    onHome,
                    onSelectProduct,
                    onToggleCart,
                }: HeaderProps) {
    return (
        <header className="header">
            <button className="logo" onClick={onHome}>
                myStore<span>.</span>
            </button>

            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />

                {search.trim() !== "" && (
                    <div className="search-results">
                        {searchResults.length > 0 ? (
                            searchResults.map((product) => (
                                <button
                                    className="search-result"
                                    key={product.id}
                                    onClick={() => onSelectProduct(product)}
                                >
                                    {product.name}
                                    <span>
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                                </button>
                            ))
                        ) : (
                            <p className="no-results">No products found.</p>
                        )}
                    </div>
                )}
            </div>

            <button className="cart-button" onClick={onToggleCart}>
                CART ({cartCount})
            </button>
        </header>
    );
}

export default Header;
