import {
    DISMISS_LOADING,
    SET_LOADING,
    SET_PRODUCTS,
  } from "./types";
  
const INITIAL_STATE = {
    products: [],
    isLoadingProducts: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case SET_LOADING:
            return{
                ...state,
                isLoadingProducts: true,
            };
        case DISMISS_LOADING:
            return{
                ...state,
                isLoadingProducts: false,
            };
        default:
            return state;
        }
};

export default reducer;