import './ProductPage.css'

function ProductPage() {

  const handleClick=(e)=>{
    e.preventDefault();
    fecth('http://localhost:8080/products/addtocart', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: ({product: e.target.value})
      })

  return (
    <div className='productpage'>
  <div className='product-titles'>
        <h1>Mouses</h1>
    <div className='mouse-products'>
      <div className='product-container' id='mouse-title'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>Lift</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>MXMaster 3S</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>M720</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>MX Ergo</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
      <h1>Keyboards</h1>
      <div className='mouse-products' id='keyboard-title'>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>Lift</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>MXMaster 3S</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>M720</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>MX Ergo</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
      <h1>Chairs</h1>
      <div className='mouse-products' id='chair-title'>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>Lift</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>MXMaster 3S</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>M720</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>MX Ergo</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
      <h1>Wrist Rests</h1>
      <div className='mouse-products' id='wristrest-title'>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>Lift</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>MXMaster 3S</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>M720</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>MX Ergo</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
      <h1>Desks</h1>
      <div className='mouse-products' id='desk-title'>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>Lift</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>MXMaster 3S</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>M720</p>
          <button>Add to cart</button>
        </div>
      </div>
      <div className='product-container'>
        <img src="https://placehold.co/200x150" alt="Logitech" />
        <div className='product-details'>
          <p>MX Ergo</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
    </div>
  </div>
  );
}

export default ProductPage;
