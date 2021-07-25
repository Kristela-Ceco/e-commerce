import axios from 'axios';

import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_SINGLE_PRODUCT,
} from './products_types';

const URL = 'http://localhost:8080';

export const fetchProducts = (which) => {
  return async (dispatch) => {
    try {
      console.log("which is ", which)
      const response = await axios.get(`${URL}/${which}`);
      console.log("response is ", response.data)
      dispatch({ type: FETCH_PRODUCTS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (itemID) => {
  return {
    type: ADD_TO_CART,
    payload: itemID,
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/products/${id}`);
      console.log("result is ", response)
      dispatch({ type: FETCH_SINGLE_PRODUCT, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};
