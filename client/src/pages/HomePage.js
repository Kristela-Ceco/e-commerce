import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/products/products_actions';
import MainBanner from '../components/MainBanner/MainBanner';
import Categories from '../components/Categories/Categories';
import BestProducts from '../components/BestProducts/BestProducts';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Hero from '../components/Hero/Hero';
import ClientSlider from '../components/ClientSlider/ClientSlider';

const HomePage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts('products'));
  }, [dispatch]);


  const featuredProducts = products.slice(0, 6).filter(
    (product) => product
    
  );
 
  const bestProducts = products.filter((product) => product.best === true);

  return (
    <>
      <MainBanner />
      <Categories />
      <BestProducts/>
      <Hero
        subtitleHeading="extra"
        subtitleFooter="online"
        offer="30% off"
        title="lifestyle collection"
        text="free shipping on orders over $99"
      />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <ClientSlider />
    </>
  );
};

export default HomePage;
