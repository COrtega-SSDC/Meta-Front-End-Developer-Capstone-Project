import Hero from './Hero'
import Specials from './Specials';
import Testimonials from './Testimonials';
import Backstory from './Backstory';

import Header from '../Semantic Elements/Header';
import Footer from '../Semantic Elements/Footer';

function Homepage() {

    return (
        <div className='Homepage'>
            <Header/>
            <Hero />
            <Specials />
            <Testimonials/>
            <Backstory/>
            <Footer/>
        </div>

    );

}

export default Homepage;