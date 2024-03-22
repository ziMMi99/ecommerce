import './ProductPage.css'

function ProductPage() {

  return (
    <div className='productpage'>
      <div className="productpagetitle" id='scrolltotarget1'>
        <h1>
          Explore our topsellers
        </h1>
        <div className='cat-btn'>
          <button onClick={() => document.getElementById('mouse-title').scrollIntoView({block:'center', behavior: 'smooth'})}>Mouse</button>
          <button onClick={() => document.getElementById('keyboard-title').scrollIntoView({block:'center', behavior: 'smooth'})}>Keyboards</button>
          <button onClick={() => document.getElementById('chair-title').scrollIntoView({block:'center', behavior: 'smooth'})}>Chairs</button>
          <button onClick={() => document.getElementById('wristrest-title').scrollIntoView({block:'center', behavior: 'smooth'})}>Wrist Rest</button>
          <button onClick={() => document.getElementById('desk-title').scrollIntoView({block:'center', behavior: 'smooth'})}>Desks</button>
        </div>
      </div>
  <div className='product-titles'>
        <h1>Mouse</h1>
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