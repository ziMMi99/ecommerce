import './Topsellerbtn.css';

function Topsellerbtn() {
    return (
    <div className="explorebtns" id='scrolltotarget1'>
        <h1>Explore our topsellers</h1>
        <div className='cat-btn'>
            <button>Mouse</button>
            <button >Keyboards</button>
            <button >Chairs</button>
            <button >Wrist Rest</button>
            <button >Desks</button>
        </div>

        <div className='product-title'>
            <h2>Welcome to our collection of ergonomic products!
            Click on any category above to discover our range of items designed for comfort and efficiency:</h2>
        </div>
         <div className='product-text'>
            <p>Find the perfect mouse and keyboard for comfort and support.
            Upgrade to ergonomic chairs for unparalleled comfort during long hours.
            Enhance typing with wrist rests, reducing strain.
            Elevate your space with ergonomic desks, supporting posture and reducing body strain.</p>
        </div>

    </div>
    )
}

export default Topsellerbtn;
