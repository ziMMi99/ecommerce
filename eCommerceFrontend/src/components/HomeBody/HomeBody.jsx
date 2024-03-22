import './HomeBody.css'
import image from '../../assets/mx-master-3s-mouse-top-view-graphite.png';
function HomeBody() {
    return (
        <div className='homebody'>
            <div className='homebodytitle'>
                <h1>
                    Discover the world of ergonomics!
                </h1>
            </div>
            <div className='homebodytext'>
                <h2>
                    Are you tired of experiencing persistent discomfort in your joints after long hours of sitting?
                     Do you find yourself adjusting and readjusting, trying to find a comfortable position at your desk? You're not alone.
                </h2>
            </div>
            <div className='homebodybutton'>
                <button className='bodybutton' onClick={() => document.getElementById('scrolltotarget1').scrollIntoView({block: 'start', behavior: 'smooth'})}>
                    Explore products
                    </button>
                </div>

        </div>
    );
}

export default HomeBody;
