import { setLoading, dismissLoading, setProducts } from './actions';

const pURL = process.env.REACT_APP_API_URL;

export const getProducts = () => async (dispatch) => {
  dispatch(setLoading());
  let response = await fetch(`${pURL}/products`);
  const prod = await response?.json();
  if (response.status === 200) {
    console.log(prod.data);
    dispatch(setProducts(prod.data));
    dispatch(dismissLoading());
    return;
  } else {
    dispatch(dismissLoading());
    return;
  }
};

/**
 * @param {{ name: string; price: number; providerId?: string }} data
 */
export const addProduct = (data) => async (dispatch) => {
  dispatch(setLoading());
  let response = await fetch(`${pURL}/products`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (!response.ok) {
    dispatch(dismissLoading());
    return;
  }
  const product = await response?.json();
  return product;
};
