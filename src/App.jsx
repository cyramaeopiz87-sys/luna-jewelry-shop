
import { useState } from 'react'
import './App.css'

const initialProducts = [
  {
    id: 1,
    name: 'Pearl Drop Earrings',
    category: 'Earrings',
    price: 299,
    quantity: 12,
    rating: 4.9,
    description: 'Elegant pearl drop earrings with a delicate gold finish.',
    specification: 'Pearl detail, gold-tone setting, lightweight design',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800',
  },
  {
    id: 2,
    name: 'Golden Pendant Necklace',
    category: 'Necklaces',
    price: 450,
    quantity: 8,
    rating: 4.8,
    description: 'A delicate golden pendant necklace for everyday elegance.',
    specification: 'Gold-tone chain, pendant detail, adjustable length',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800',
  },
  {
    id: 3,
    name: 'Classic Gold Ring',
    category: 'Rings',
    price: 250,
    quantity: 3,
    rating: 4.7,
    description: 'A timeless ring with a graceful, sparkling detail.',
    specification: 'Gold-tone finish, gemstone-style detail',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800',
  },
  {
    id: 4,
    name: 'Minimal Gold Bracelet',
    category: 'Bracelets',
    price: 350,
    quantity: 15,
    rating: 4.8,
    description: 'A simple gold bracelet that pairs beautifully with any look.',
    specification: 'Gold-tone chain, delicate charm, adjustable fit',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800',
  },
]

const categories = [
  'All Jewelry',
  'Earrings',
  'Necklaces',
  'Rings',
  'Piercing Jewelry',
  'Bracelets',
  'Anklets',
  'Jewelry Sets',
]

function App() {
  const [products, setProducts] = useState(initialProducts)
  const [selectedCategory, setSelectedCategory] = useState('All Jewelry')
  const [favorites, setFavorites] = useState([])
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredProducts =
    selectedCategory === 'All Jewelry'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id],
    )
  }

  function addToCart(product) {
    const alreadyInCart = cart.find((item) => item.id === product.id)

    if (alreadyInCart) {
      if (alreadyInCart.quantity >= product.quantity) {
        alert('Sorry, there is no more stock available for this item.')
        return
      }

      setCart((current) =>
        current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      )
    } else {
      if (product.quantity < 1) {
        alert('This product is out of stock.')
        return
      }

      setCart((current) => [...current, { ...product, quantity: 1 }])
    }
  }

  function changeCartQuantity(id, amount) {
    const product = products.find((item) => item.id === id)

    setCart((current) =>
      current
        .map((item) => {
          if (item.id !== id) return item

          const nextQuantity = item.quantity + amount

          if (nextQuantity > product.quantity) {
            return item
          }

          return { ...item, quantity: nextQuantity }
        })
        .filter((item) => item.quantity > 0),
    )
  }

  function purchaseItems() {
    if (cart.length === 0) return

    const confirmed = window.confirm(
      `Confirm your purchase of ${cartCount} item(s) for ₱${grandTotal.toFixed(2)}?`,
    )

    if (!confirmed) return

    setProducts((current) =>
      current.map((product) => {
        const purchasedItem = cart.find(
          (item) => item.id === product.id,
        )

        return purchasedItem
          ? {
              ...product,
              quantity: product.quantity - purchasedItem.quantity,
            }
          : product
      }),
    )

    alert(
      `Purchase successful! Your total is ₱${grandTotal.toFixed(2)}. Thank you for shopping with Luna Jewelry!`,
    )

    setCart([])
    setCartOpen(false)
  }

  return (


    <div className="shop">
      <header className="navbar">
        <a className="logo" href="#home" aria-label="Luna Jewelry home">
          Luna <span>Jewelry</span>
        </a>

        <nav className="nav-links">
          <a className="nav-active" href="#home">Home</a>
          <a href="#products">Collection</a>
          <a href="#about">About</a>
        </nav>

        <button className="cart-button" onClick={() => setCartOpen(true)}>
          ♥ My Cart
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">A LITTLE SPARKLE, A LOT OF LOVE</p>
            <h1>
              Jewelry that feels
              <br />
              <em>like you.</em>
            </h1>
            <p className="hero-description">
              Discover your next favorite piece. Delicate details,
              timeless beauty, and a little everyday magic.
            </p>
            <a href="#products" className="shop-button">
              Explore the Collection ↗
            </a>
          </div>

          <div className="hero-photo">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1400"
              alt="Elegant gold necklace"
            />
          </div>
        </section>

        <section className="collection" id="products">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MADE TO MAKE YOU SHINE</p>
              <h2>Our Collection</h2>
            </div>
            <span>{filteredProducts.length} beautiful pieces</span>
          </div>

          <div className="categories" aria-label="Jewelry categories">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  selectedCategory === category
                    ? 'category active'
                    : 'category'
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <button
                    className="product-image"
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`View ${product.name} details`}
                  >
                    <img src={product.image} alt={product.name} />
                  </button>

                  <button
                    className={
                      favorites.includes(product.id)
                        ? 'favorite is-favorite'
                        : 'favorite'
                    }
                    onClick={() => toggleFavorite(product.id)}
                    aria-label={`Favorite ${product.name}`}
                  >
                    {favorites.includes(product.id) ? '♥' : '♡'}
                  </button>

                  <div className="product-info">
                    <p className="product-category">{product.category}</p>
                    <button
                      className="product-name"
                      onClick={() => setSelectedProduct(product)}
                    >
                      {product.name}
                    </button>
                    <p className="price">₱{product.price.toFixed(2)}</p>
                    <button
                      className="add-button"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart +
                    </button>
                  </div>

                  {product.quantity < 5 && (
                    <p className="stock-warning">Low Stock · {product.quantity} left</p>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-category">
              <span>♡</span>
              <p>More lovely pieces are coming soon.</p>
            </div>
          )}
        </section>

        <section className="about" id="about">
          <span className="sparkle sparkle-left">✧</span>
          <div>
            <p className="eyebrow">A LITTLE SOMETHING SPECIAL</p>
            <h2>
              Every piece tells a <em>story.</em>
            </h2>
            <p>
              Find the little details that make your everyday moments feel extra special.
            </p>
          </div>
          <span className="sparkle sparkle-right">✧</span>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          Luna <span>Jewelry</span>
        </a>
        <p>Made with love ♡</p>
      </footer>

      {selectedProduct && (
        <div className="overlay" onClick={() => setSelectedProduct(null)}>
          <section
            className="detail-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProduct.name} details`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
            >
              ×
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <div className="detail-content">
              <p className="eyebrow">{selectedProduct.category}</p>
              <h2>{selectedProduct.name}</h2>
              <p className="detail-rating">★ {selectedProduct.rating} / 5.0</p>
              <p>{selectedProduct.description}</p>
              <p className="specification">{selectedProduct.specification}</p>
              <h3>₱{selectedProduct.price.toFixed(2)}</h3>
              <p className="stock-text">
                {selectedProduct.quantity < 5
                  ? `Low stock: ${selectedProduct.quantity} available`
                  : `${selectedProduct.quantity} pieces available`}
              </p>
              <button
                className="shop-button"
                onClick={() => {
                  addToCart(selectedProduct)
                  setSelectedProduct(null)
                }}
              >
                Add to Cart +
              </button>
            </div>
          </section>
        </div>
      )}

      {cartOpen && (
        <div className="overlay" onClick={() => setCartOpen(false)}>
          <aside
            className="cart-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="cart-heading">
              <div>
                <p className="eyebrow">YOUR LITTLE TREASURES</p>
                <h2>My Cart</h2>
              </div>
              <button
                className="close-button"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <span>♡</span>
                <h3>Your cart is waiting for a little sparkle.</h3>
                <p>Add your favorite jewelry pieces to get started.</p>
                <button
                  className="shop-button"
                  onClick={() => setCartOpen(false)}
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <p>₱{item.price.toFixed(2)} each</p>
                        <div className="quantity-controls">
                          <button
                            onClick={() => changeCartQuantity(item.id, -1)}
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => changeCartQuantity(item.id, 1)}
                            disabled={
                              item.quantity >=
                              products.find((product) => product.id === item.id).quantity
                            }
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <strong>₱{(item.price * item.quantity).toFixed(2)}</strong>
                    </div>
                  ))}
                </div>

                
<div className="cart-total">
  <span>Grand Total</span>
  <strong>₱{grandTotal.toFixed(2)}</strong>
</div>

<div className="cart-actions">
  <button
    className="purchase-button"
    onClick={purchaseItems}
    disabled={cart.length === 0}
  >
    Purchase →
  </button>
</div>

<p className="cart-note">Your jewelry, beautifully chosen. ♡</p>

              </>
            )}
          </aside>
        </div>
      )}
    </div>
  )
}

export default App
