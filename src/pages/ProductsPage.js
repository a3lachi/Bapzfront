import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import Categories from '../components/Categories';
import { useSelector , useDispatch} from "react-redux";
import updateTmz from '../redux/cartSlice'
import { store } from '../redux/store'





const ProductPage = (id) => {
    const location = useLocation() ;
    const category = location.pathname.split("/")[2] ; 
    const brr =  JSON.parse(window.localStorage.getItem('state')) ;

    return (
        <div>
            <Announcement />
            <Navbar />
            <Categories />
            <Products cat={category} />
            <Newsletter />
            <Footer />
        </div>
    )
}



export default ProductPage ;