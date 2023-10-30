import Hero from './Hero'
import Specials from './Specials';
import Testimonials from './Testimonials';
import Backstory from './Backstory';
import Footer from './Footer';

function Homepage() {

    return (
        <div className='Homepage'>
            <Hero />
            <Specials />
            <Testimonials/>
            <Backstory/>
            <Footer/>
        </div>

    );

}

export default Homepage;