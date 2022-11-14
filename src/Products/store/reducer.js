import { useSelector } from 'react-redux';
import { DISMISS_LOADING, SET_LOADING, SET_PRODUCT, SET_PRODUCTS, SET_PROVIDERS } from './types';

/**
 * @typedef {{ _id: string; name: string; price: string; provider: {_id: string} }} Product
 * @typedef {{ _id: string; name: string; }} Provider
 * @typedef {Readonly<{products: Product[]; isLoadingProducts: boolean; providers: Provider[]; product?: Product}>} ProductsState
 */

/**
 * @type ProductsState
 */
const INITIAL_STATE = {
  products: [],
  isLoadingProducts: false,
  providers: [],
  product: undefined
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
    case SET_PROVIDERS:
      return {
        ...state,
        providers: action.payload
      }
    case SET_PRODUCT:
      console.log(action.payload)
      return {
        ...state,
        product: action.payload
      }
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
