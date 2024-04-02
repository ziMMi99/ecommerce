import './Topsellerbtn.css';

function Topsellerbtn() {
    return (
    <div className="explorebtns">
        <h1>Explore our topsellers</h1>
        <div className='cat-btn' id='scrolltotarget1'>
            <button onClick={() => document.getElementById('mouse-title').scrollIntoView({block: 'center', behavior: 'smooth'})}>Mouses</button>
            <button onClick={() => document.getElementById('keyboard-title').scrollIntoView({block: 'center', behavior: 'smooth'})}>Keyboards</button>
            <button onClick={() => document.getElementById('chair-title').scrollIntoView({block: 'center', behavior: 'smooth'})}>Chairs</button>
            <button onClick={() => document.getElementById('wristrest-title').scrollIntoView({block: 'center', behavior: 'smooth'})}>Wrist Rest</button>
            <button onClick={() => document.getElementById('desk-title').scrollIntoView({block: 'center', behavior: 'smooth'})}>Desks</button>
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
