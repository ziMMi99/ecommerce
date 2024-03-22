import './ProductPage.css'

function ProductPage() {
  return (
    <div className='productpage' id='scrolltotarget1'>
      <div className="productpagetitle">
        <h1>
          Explore our topsellers
        </h1>
        <div className='cat-btn'>
          <button>Mice</button>
          <button>Chairs</button>
          <button>Keyboards</button>
          <button>Wrist rests</button>
          <button>Desks</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;