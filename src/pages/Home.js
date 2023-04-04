import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Slider from '../components/Slider';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';



const Home = () => {
    return (
        <div className='col'>
            <Announcement />
            <Navbar />
            <Categories />
            <Slider />
            
            <Products />
            <Announcement />
            <Newsletter/>
            <Footer />
        </div>
    )
}


export default Home ;