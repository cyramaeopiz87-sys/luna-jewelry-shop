import { useState, useEffect } from 'react'
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfGSPFWAhbAX7ypucl6JLgxZwKO1VVufy7czC4lA0C6A&s=10',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_vzKPqUAkfmtBRBE53j2AcJE_r6geDbLLr6uI5o2cSw&s=10',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVdCRg2fO0mUEcGvUHiUxNHDSUSAoxWCuzfvzb-q4Hw&s=10',
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

  // MORE EARRINGS
  {
    id: 5,
    name: 'Crystal Stud Earrings',
    category: 'Earrings',
    price: 220,
    quantity: 14,
    rating: 4.8,
    description: 'Small sparkling studs that add a subtle touch of elegance.',
    specification: 'Crystal-style stones, silver-tone setting, stud backs',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800',
  },
  {
    id: 6,
    name: 'Golden Hoop Earrings',
    category: 'Earrings',
    price: 280,
    quantity: 10,
    rating: 4.9,
    description: 'Classic hoops that complement casual and formal outfits.',
    specification: 'Gold-tone finish, hoop design, lightweight style',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mcRp_Dz98dggveX5J90ZkNxta28HKOgobCY6avNkLw&s=10',
  },
  {
    id: 7,
    name: 'Heart Pearl Earrings',
    category: 'Earrings',
    price: 320,
    quantity: 9,
    rating: 4.9,
    description: 'Romantic pearl earrings with a delicate heart-inspired design.',
    specification: 'Pearl accents, heart-inspired details, gold-tone finish',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoONolEoQmLrgBFjAtG4tbgmMa25uWhdI_IQ9yLA_3Aw&s=10',
  },

  // MORE NECKLACES
  {
    id: 8,
    name: 'Heart Pendant Necklace',
    category: 'Necklaces',
    price: 399,
    quantity: 11,
    rating: 4.9,
    description: 'A sweet heart pendant on a delicate gold-tone chain.',
    specification: 'Heart pendant, gold-tone chain, adjustable clasp',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jzvy5bQiA1fVoNLXnrg8SwP3GYIKBW_imJrqPngsCw&s=10',
  },
  {
    id: 9,
    name: 'Layered Chain Necklace',
    category: 'Necklaces',
    price: 520,
    quantity: 7,
    rating: 4.8,
    description: 'A layered necklace look for an effortlessly stylish outfit.',
    specification: 'Layered chain style, gold-tone finish, clasp closure',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800',
  },
  {
    id: 10,
    name: 'Pearl Pendant Necklace',
    category: 'Necklaces',
    price: 480,
    quantity: 8,
    rating: 4.9,
    description: 'A graceful pearl-inspired pendant for a timeless look.',
    specification: 'Pearl-style pendant, delicate chain, gold-tone setting',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOzdS916gxh7CufZuFQB00qtxSJMZFbjPbovo3l1AjCg&s=10',
  },

  // MORE RINGS
  {
    id: 11,
    name: 'Rose Gold Band Ring',
    category: 'Rings',
    price: 290,
    quantity: 12,
    rating: 4.8,
    description: 'A simple rose gold-tone band for a soft, elegant style.',
    specification: 'Rose gold-tone finish, smooth band, minimalist design',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXMPsFdgz0oPLqPQfm2b0FxvriuB_lK3Y1hjP36U7oA&s=10',
  },
  {
    id: 12,
    name: 'Crystal Flower Ring',
    category: 'Rings',
    price: 380,
    quantity: 6,
    rating: 4.9,
    description: 'A flower-inspired ring with delicate crystal-style details.',
    specification: 'Flower-inspired setting, crystal-style accents',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaDbNXCRaBNO8Dz1OwSLGjTZkY1BaNJ7LLXqWxRFGm3w&s=10',
  },
  {
    id: 13,
    name: 'Twisted Gold Ring',
    category: 'Rings',
    price: 330,
    quantity: 10,
    rating: 4.7,
    description: 'A twisted band design that adds texture to your jewelry look.',
    specification: 'Gold-tone finish, twisted band, polished surface',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800',
  },
  {
    id: 14,
    name: 'Pearl Accent Ring',
    category: 'Rings',
    price: 360,
    quantity: 7,
    rating: 4.8,
    description: 'A delicate ring featuring a pearl-inspired centerpiece.',
    specification: 'Pearl-style centerpiece, slim band, gold-tone finish',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyo_CwSz78ei6xkDFzzR_QHp0vudqWuDr9Sg3Cd29Sw&s=10',
  },

  // PIERCING JEWELRY
  {
    id: 15,
    name: 'Gold Nose Stud',
    category: 'Piercing Jewelry',
    price: 150,
    quantity: 15,
    rating: 4.7,
    description: 'A tiny gold-tone nose stud for a subtle everyday accent.',
    specification: 'Gold-tone finish, minimalist stud, small design',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBmG4GkqZjhzQgpd_1Yxme6kK9hQPyKCk07ygPUYH4g&s=100',
  },
  {
    id: 16,
    name: 'Crystal Nose Stud',
    category: 'Piercing Jewelry',
    price: 180,
    quantity: 12,
    rating: 4.9,
    description: 'A sparkling crystal-style stud with a delicate appearance.',
    specification: 'Crystal-style accent, compact design, silver-tone finish',
    image: 'https://www.rockyournose.com/cdn/shop/products/Amethyst_Lotus_Flower_1b.jpg?v=1615047448',
  },
  {
    id: 17,
    name: 'Gold Ear Cuff',
    category: 'Piercing Jewelry',
    price: 230,
    quantity: 9,
    rating: 4.8,
    description: 'A gold-tone ear cuff for a modern layered-ear look.',
    specification: 'Gold-tone finish, cuff style, no-piercing design',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyoKClcASAKzeT3U-4jXhhL1CIsDPn3OnneAgNYjb_w&s=10',
  },
  {
    id: 18,
    name: 'Star Cartilage Stud',
    category: 'Piercing Jewelry',
    price: 200,
    quantity: 10, 
    rating: 4.8,
    description: 'A tiny star-inspired stud for a playful jewelry accent.',
    specification: 'Star-inspired design, small stud, gold-tone finish',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3lpibJ2jStvCgA0G4nmxhI_IUimjB1XwWKLwZcX_hw&s=10',
  },

  // MORE BRACELETS
  {
    id: 19,
    name: 'Twisted Gold Bracelet',
    category: 'Bracelets',
    price: 390,
    quantity: 10,
    rating: 4.8,
    description: 'A twisted chain bracelet that layers beautifully with other pieces.',
    specification: 'Twisted chain, gold-tone finish, adjustable clasp',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOiLJussBueCUjMByw9TzcYZUXCNqnjs1zt0nWfMCLg&s=10',
  },
  {
    id: 20,
    name: 'Pearl Charm Bracelet',
    category: 'Bracelets',
    price: 420,
    quantity: 7,
    rating: 4.9,
    description: 'A delicate bracelet with pearl-style accents and a golden chain.',
    specification: 'Pearl-style accents, gold-tone chain, clasp closure',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEzgq_j_B4hD2edZK-wh2EbIY4fZh1yzYSqoNZYrXkQ&s=10',
  },
  {
    id: 21,
    name: 'Crystal Tennis Bracelet',
    category: 'Bracelets',
    price: 550,
    quantity: 5,
    rating: 5.0,
    description: 'A sparkling bracelet inspired by classic tennis jewelry.',
    specification: 'Crystal-style stones, polished setting, secure clasp',
    image: 'https://i.etsystatic.com/10204022/r/il/df07ab/8330167091/il_570xN.8330167091_12u7.jpg',
  },
  {
    id: 22,
    name: 'Heart Link Bracelet',
    category: 'Bracelets',
    price: 370,
    quantity: 11,
    rating: 4.8,
    description: 'A charming heart-link bracelet with a delicate gold-tone finish.',
    specification: 'Heart-link design, gold-tone chain, adjustable clasp',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6-jDRcJZoYtAfhdPGRwFAPxeWSXhJn1Fcs6qY6PhEA&s=10',
  },

  // ANKLETS
  {
    id: 23,
    name: 'Golden Charm Anklet',
    category: 'Anklets',
    price: 280,
    quantity: 12,
    rating: 4.8,
    description: 'A dainty gold-tone anklet with tiny decorative charms.',
    specification: 'Gold-tone chain, small charms, adjustable clasp',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1PS3Qz4ZyKpkCerBGiiWzpSkKcrRVibT6dWD3j02CQ&s=10',
  },
  {
    id: 24,
    name: 'Pearl Detail Anklet',
    category: 'Anklets',
    price: 320,
    quantity: 9,
    rating: 4.9,
    description: 'A delicate anklet with pearl-style accents for a graceful finish.',
    specification: 'Pearl-style details, gold-tone chain, adjustable fit',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSyvYpFrW7AYuti6i6eMC8Y4wJrKCICqWIaDsWLhTrEQ&s=10',
  },
  {
    id: 25,
    name: 'Heart Chain Anklet',
    category: 'Anklets',
    price: 300,
    quantity: 10,
    rating: 4.8,
    description: 'A pretty heart-detail anklet for everyday outfits.',
    specification: 'Heart accents, gold-tone chain, adjustable clasp',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3-gvnGZL8huoN-Z751F2wl18UQ_FV20JYHn0xoeQvQ&s=10',
  },
  {
    id: 26,
    name: 'Layered Chain Anklet',
    category: 'Anklets',
    price: 350,
    quantity: 8,
    rating: 4.9,
    description: 'A layered chain design that adds a subtle statement to your look.',
    specification: 'Layered chain style, gold-tone finish, adjustable length',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZj1FyeG02xDkyA3ysudEyn6-binBCDlWnGmbaZTCqw&s=10',
  },

  // JEWELRY SETS
  {
    id: 27,
    name: 'Blush Pearl Jewelry Set',
    category: 'Jewelry Sets',
    price: 650,
    quantity: 6,
    rating: 5.0,
    description: 'A coordinated pearl-inspired set for gifting and special occasions.',
    specification: 'Matching necklace and earrings, pearl-style details',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54EJ5hGmPA9bKJdsRCCPMjtSIJwxyKIwKVgJfHFFCYw&s=10',
  },
  {
    id: 28,
    name: 'Golden Elegance Set',
    category: 'Jewelry Sets',
    price: 790,
    quantity: 5,
    rating: 4.9,
    description: 'A matching gold-tone jewelry set with a timeless polished finish.',
    specification: 'Matching necklace and bracelet, gold-tone finish',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2Q1enFvSSyTO0locxlEwu2zdfo459jDT3ncWytPwCQ&s=10',
  },
  {
    id: 29,
    name: 'Crystal Evening Set',
    category: 'Jewelry Sets',
    price: 950,
    quantity: 4,
    rating: 4.9,
    description: 'A sparkling coordinated set for celebrations and evening events.',  
    specification: 'Matching necklace and earrings, crystal-style accents',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKczhFEncDIlfQCwoIUOuEG23Oc4qw4i4fNWJ8I79xMw&s=10',
  },
  {
    id: 30,
    name: 'Rose Gold Gift Set',
    category: 'Jewelry Sets',
    price: 850,
    quantity: 6,
    rating: 4.8,
    description: 'A romantic rose gold-tone set ready for a thoughtful gift.',  
    specification: 'Matching necklace and earrings, rose gold-tone finish',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6NU4atKlb5SolFJvsY9FzVIJGMpsZnZJdTF7M52b8FA&s=10',
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
  const [activeView, setActiveView] = useState('shop')
  const [adminSection, setAdminSection] = useState('dashboard')
  const [favorites, setFavorites] = useState([])
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showProductForm, setShowProductForm] = useState(false)
  const [editingProductId, setEditingProductId] = useState(null)
  const [productSearch, setProductSearch] = useState('')
const [adminCategoryFilter, setAdminCategoryFilter] = useState('All Jewelry')


const [newProduct, setNewProduct] = useState({
  name: '',
  category: 'Earrings',
  price: '',
  quantity: '',
  specification: '',
  description: '',
  image: '',
})

  const filteredProducts =
    selectedCategory === 'All Jewelry'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )
  const adminFilteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(productSearch.toLowerCase())

  const matchesCategory =
    adminCategoryFilter === 'All Jewelry' ||
    product.category === adminCategoryFilter

  return matchesSearch && matchesCategory
})

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id],
    )
  }
  function handleAddProduct(event) {
  event.preventDefault()

  const product = {
    id: editingProductId ?? Date.now(),
    name: newProduct.name,
    category: newProduct.category,
    price: Number(newProduct.price),
    quantity: Number(newProduct.quantity),
    rating: 5.0,
    description: newProduct.description,
    specification: newProduct.specification,
    image: newProduct.image,
  }

setProducts((current) =>
  editingProductId !== null
    ? current.map((item) =>
        item.id === editingProductId ? product : item,
      )
    : [...current, product],
)

  setNewProduct({
    name: '',
    category: 'Earrings',
    price: '',
    quantity: '',
    specification: '',
    description: '',
    image: '',
  })

setShowProductForm(false)
setEditingProductId(null)

alert(
  editingProductId !== null
    ? 'Product updated successfully!'
    : 'Product added successfully!',
)
}

function handleStartEdit(product) {
  setEditingProductId(product.id)

  setNewProduct({
    name: product.name,
    category: product.category,
    price: product.price,
    quantity: product.quantity,
    specification: product.specification,
    description: product.description,
    image: product.image,
  })

  setShowProductForm(true)
}
function handleDeleteProduct(id) {
  const confirmed = window.confirm(
    'Are you sure you want to delete this product?',
  )

  if (!confirmed) return

  setProducts((current) =>
    current.filter((product) => product.id !== id),
  )

  alert('Product deleted successfully!')
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

  
  if (activeView === 'admin') {
  const totalStock = products.reduce(
    (total, product) => total + product.quantity,
    0,
  )

  const lowStockProducts = products.filter(
    (product) => product.quantity < 5,
  ).length

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <h2>Luna <span>Jewelry</span></h2>
          <p>Management Panel</p>
        </div>
<nav className="admin-menu">
  <button
    className={adminSection === 'dashboard' ? 'admin-menu-active' : ''}
    onClick={() => setAdminSection('dashboard')}
  >
    <span>⌂</span> Dashboard
  </button>

  <button
    className={adminSection === 'products' ? 'admin-menu-active' : ''}
    onClick={() => setAdminSection('products')}
  >
    <span>◇</span> Products
  </button>

  <button
    className={adminSection === 'inventory' ? 'admin-menu-active' : ''}
    onClick={() => setAdminSection('inventory')}
  >
    <span>▤</span> Inventory
  </button>
</nav>
        <button
          className="back-to-shop"
          onClick={() => setActiveView('shop')}
        >
          ← Back to Shop
        </button>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div>
            <p className="admin-eyebrow">WELCOME TO LUNA JEWELRY</p>
          
            <p>Here's an overview of your jewelry shop.</p>
          </div>

          <span className="admin-avatar">L</span>
        </header>

    {adminSection === 'dashboard' && (
  <>
    <section className="admin-stats">
      <article className="admin-stat-card">
        <span>Total Products</span>
        <h2>{products.length}</h2>
        <p>Jewelry items listed</p>
      </article>

      <article className="admin-stat-card">
        <span>Total Stock</span>
        <h2>{totalStock}</h2>
        <p>Available pieces</p>
      </article>

      <article className="admin-stat-card">
        <span>Low Stock</span>
        <h2>{lowStockProducts}</h2>
        <p>Products with fewer than 5 pieces</p>
      </article>

      <article className="admin-stat-card">
        <span>Categories</span>
        <h2>{categories.length - 1}</h2>
        <p>Jewelry categories</p>
      </article>
    </section>

    <section className="admin-welcome">
      <p className="admin-eyebrow">YOUR STORE AT A GLANCE</p>
      <h2>Every little detail matters. ♡</h2>
      <p>
        Manage your jewelry collection, keep track of your inventory,
        and make sure every piece is ready for your customers.
      </p>
    </section>
  </>
)}

{adminSection === 'products' && (
  <section className="admin-table-section">
    <div className="admin-products-header">
      <div className="admin-product-filters">
  <input
    type="text"
    placeholder="Search product name..."
    value={productSearch}
    onChange={(event) => setProductSearch(event.target.value)}
  />

  <select
    value={adminCategoryFilter}
    onChange={(event) => setAdminCategoryFilter(event.target.value)}
  >
    {categories.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
</div>
      <div>
        <h2>All Products</h2>
        <p>View and manage the jewelry items available in your store.</p>
      </div>

     <button
  className="add-product-button"
  onClick={() => {
    setEditingProductId(null)
    setNewProduct({
      name: '',
      category: 'Earrings',
      price: '',
      quantity: '',
      specification: '',
      description: '',
      image: '',
    })
    setShowProductForm(true)
  }}
>
  + Add Product
</button>
    </div>

    {showProductForm && (
      <div className="product-form-overlay">
        <div className="product-form-modal">
        <h2>
  {editingProductId !== null ? 'Edit Product' : 'Add New Product'}
</h2>

<p>
  {editingProductId !== null
    ? 'Update the details of this jewelry piece.'
    : 'Enter the details of your new jewelry piece.'}
</p>

         <form onSubmit={handleAddProduct} className="product-form">

  <label>Product Name</label>
  <input
    type="text"
    value={newProduct.name}
    onChange={(event) =>
      setNewProduct({ ...newProduct, name: event.target.value })
    }
    placeholder="Enter product name"
    required
  />

  <label>Category</label>
  <select
    value={newProduct.category}
    onChange={(event) =>
      setNewProduct({ ...newProduct, category: event.target.value })
    }
  >
    {categories.slice(1).map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>

  <label>Price (₱)</label>
  <input
    type="number"
    min="0.01"
    step="0.01"
    value={newProduct.price}
    onChange={(event) =>
      setNewProduct({ ...newProduct, price: event.target.value })
    }
    placeholder="Enter price"
    required
  />

  <label>Stock Quantity</label>
  <input
    type="number"
    min="0"
    step="1"
    value={newProduct.quantity}
    onChange={(event) =>
      setNewProduct({ ...newProduct, quantity: event.target.value })
    }
    placeholder="Enter stock quantity"
    required
  />

  <label>Specification</label>
  <input
    type="text"
    value={newProduct.specification}
    onChange={(event) =>
      setNewProduct({ ...newProduct, specification: event.target.value })
    }
    placeholder="e.g. Gold-tone finish"
    required
  />

  <label>Short Description</label>
  <textarea
    value={newProduct.description}
    onChange={(event) =>
      setNewProduct({ ...newProduct, description: event.target.value })
    }
    placeholder="Describe your jewelry piece"
    required
  />
<label>Upload Product Image from PC</label>
<input
  type="file"
  accept="image/png,image/jpeg,image/webp"
  onChange={(event) => {
    const file = event.target.files[0]

    if (!file) return

    const reader = new FileReader()

    reader.onloadend = () => {
      setNewProduct((current) => ({
        ...current,
        image: reader.result,
      }))
    }

    reader.readAsDataURL(file)
  }}
/>

<label>Or use an Image URL</label>
<input
  type="url"
  value={newProduct.image.startsWith('data:') ? '' : newProduct.image}
  onChange={(event) =>
    setNewProduct((current) => ({
      ...current,
      image: event.target.value,
    }))
  }
  placeholder="Paste image URL"
  required={!newProduct.image}
/>

{newProduct.image && (
  <div className="product-image-preview">
    <p>Image Preview</p>
    <img src={newProduct.image} alt="Product preview" />
  </div>
)}
  
  <div className="product-form-actions">
   <button
  type="button"
  onClick={() => {
    setShowProductForm(false)
    setEditingProductId(null)
    setNewProduct({
      name: '',
      category: 'Earrings',
      price: '',
      quantity: '',
      specification: '',
      description: '',
      image: '',
    })
  }}
>
  Cancel
</button>

   <button type="submit">
  {editingProductId !== null ? 'Save Changes' : 'Save Product'}
</button>
  </div>

</form>
        </div>
      </div>
    )}


    

    <div className="admin-table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
<tbody>
  {adminFilteredProducts.length === 0 ? (
    <tr>
      <td colSpan="5" className="no-products-found">
        No products found. Try a different search or category.
      </td>
    </tr>
  ) : (
    adminFilteredProducts.map((product) => (
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>₱{product.price.toLocaleString()}</td>

        <td>
          <div className="stock-controls">
            <button
              onClick={() => {
                setProducts((current) =>
                  current.map((item) =>
                    item.id === product.id
                      ? { ...item, quantity: Math.max(0, item.quantity - 1) }
                      : item,
                  ),
                )
              }}
            >
              −
            </button>

            <span>{product.quantity}</span>

            <button
              onClick={() => {
                setProducts((current) =>
                  current.map((item) =>
                    item.id === product.id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item,
                  ),
                )
              }}
            >
              +
            </button>
          </div>
        </td>

        <td>
          

          <button
            className="delete-product-button"
            onClick={() => handleDeleteProduct(product.id)}
          >
            Delete
          </button>
        </td>
      </tr> 
    ))
    )}
</tbody>
      </table>
    </div>
  </section>
)}

{adminSection === 'inventory' && (
  <section className="admin-table-section">
    <h2>Inventory Overview</h2>
    <p>Monitor available stock for every jewelry item.</p>

    <div className="admin-table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Available Stock</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>
                {product.quantity < 5 ? 'Low Stock' : 'In Stock'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
)}

      </main>
    </div>
  )
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
<div className="nav-actions">
  <button
    className="admin-button"
    onClick={() => setActiveView('admin')}
  >
    Admin Dashboard
  </button>

  <button className="cart-button" onClick={() => setCartOpen(true)}>
    ♥ My Cart
    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
  </button>
</div>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3r7Xrk4bf0rwsRTSBU87GnIWbNHnTvkRWynMkckLD6g&s=10"
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
