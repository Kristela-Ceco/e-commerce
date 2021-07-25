import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';

import { formatPrice } from '../../utils/formatPrice';
import Stars from '../Stars/Stars';

import { addToCart } from '../../redux/products/products_actions';

import './Product.scss';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product mb-4">
      <Link to={`/products/${product.id}`}>
        <div className="product__image-container">
          <img
            src={product.defaultImage}
            alt={product.name}
            className="product__image"
          />
        </div>
      </Link>
      <div className="product__footer">
        <div className="product__footer-heading">
          <Link to={`/products/${product.id}`}>
            <h3 className="product__footer-title">{product.name}</h3>
          </Link>
          <span className="product__footer-icon">
            <AiOutlineShopping
              onClick={() => dispatch(addToCart(product.id))}
            />
          </span>
        </div>
        <div className="product__footer-prices">
          <span>
            <span className="product__footer-price">
            {formatPrice( product.price - (product.price * product.discount/100).toFixed(2))}

            </span>
            <span className="product__footer-price--old">
            {formatPrice(product.price)}

            </span>
          </span>
          {/* stars component */}
          <Stars stars={Math.floor(Math.random() * 6) + 1 } />
        </div>
      </div>
    </div>
  );
};

export default Product;
