import type { Product } from "../types/Poducts.ts"

type ProductDetailsProps = {
    product: Product;
    relatedProducts: Product[];
    onAddToCart: (product: Product) => void;
    onSelectProduct: (product: Product) => void;
    onBack: () => void;
};


//Displays one product's details and up to three related products.

function ProductDetails({
                            product,
                            relatedProducts,
                            onAddToCart,
                            onSelectProduct,
                            onBack,
                        }: ProductDetailsProps) {
    return (
        <>
            <button className="back-button" onClick={onBack}>
                ← BACK TO ALL PRODUCTS
            </button>

            <section className="product-section">
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="product-details">
                    <p className="eyebrow">{product.category} / PRODUCT</p>

                    <h1>{product.name}</h1>

                    <p className="price">
                        ${product.price.toLocaleString("en-IN")}
                    </p>

                    <p className="description">{product.description}</p>

                    <button
                        className="add-button"
                        onClick={() => onAddToCart(product)}
                    >
                        ADD TO CART +
                    </button>

                    <p className="product-note">Simple products. No unnecessary extras.</p>
                </div>
            </section>

            <section className="related-section">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">YOU MAY ALSO LIKE</p>
                        <h2>Related Products</h2>
                    </div>

                    <span>
            {String(relatedProducts.length).padStart(2, "0")} ITEMS
          </span>
                </div>

                <div className="related-grid">
                    {relatedProducts.map((related) => (
                        <button
                            className="related-card"
                            key={related.id}
                            onClick={() => onSelectProduct(related)}
                        >
                            <div className="related-image">
                                <img src={related.image} alt={related.name} />
                            </div>

                            <div className="related-info">
                                <h3>{related.name}</h3>
                                <p>${related.price.toLocaleString("en-IN")}</p>
                            </div>

                        </button>
                    ))}
                </div>
            </section>
        </>
    );
}

export default ProductDetails;
