import type { Product } from "../types/Poducts.ts"

// The Home component displays the products, but App owns the "selected-product" state. So pass fn in props.
type HomeProps = {
    products: Product[];
    onSelectProduct: (product: Product) => void;
};

// Home page: displays all products in a grid.
function Home({ products, onSelectProduct }: HomeProps) {
    return (
        <section className="home-section">
            <div className="home-heading">
                <div>
                    <p className="eyebrow">THE COLLECTION / 2026</p>
                    <h1>Everyday essentials.</h1>
                    <p>Good products. No unnecessary extras.</p>
                </div>
                <span>{products.length} PRODUCTS</span>
            </div>

            <div className="home-grid">
                {products.map((product) => (
                    <button
                        className="home-card"
                        key={product.id}
                        onClick={() => onSelectProduct(product)}    // user clicks card, home calls fn from App
                    >
                        <div className="home-image">
                            <img src={product.image} alt={product.name} />
                        </div>

                        <div className="home-card-info">
                            <div>
                                <h2>{product.name}</h2>
                                <p>{product.category}</p>
                            </div>
                            <span>
                ${product.price.toLocaleString("en-IN")}
              </span>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Home;
