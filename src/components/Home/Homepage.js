import Hero from './Hero'
import Specials from './Specials';
import Testimonials from './Testimonials';
import Backstory from './Backstory';

function Homepage() {

    return (
        <div className='Homepage'>
            <Hero />
            <Specials />
            <Testimonials/>
            <Backstory/>
        </div>

    );

}

export default Homepage;