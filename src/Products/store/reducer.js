import { useSelector } from 'react-redux';
import { DISMISS_LOADING, SET_LOADING, SET_PRODUCTS } from './types';

/**
 * @typedef {Readonly<{products: { _id: string; name: string; price: string; provider: {_id: string} }[]; isLoadingProducts: boolean}>} ProductsState
 */

/**
 * @type ProductsState
 */
const INITIAL_STATE = {
  products: [],
  isLoadingProducts: false,
};

/**
 * @param {{ type: string; payload: unknown }} action
 */
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoadingProducts: true,
      };
    case DISMISS_LOADING:
      return {
        ...state,
        isLoadingProducts: false,
      };
    default:
      return state;
  }
};

/**
 * @returns {ProductsState}
 */
export const useProducts = () => {
  return useSelector(state => state.products);
}
export default reducer;
