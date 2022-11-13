import { setLoading, dismissLoading, setProducts } from './actions';

const pURL = process.env.REACT_APP_API_URL;

export const getProducts = () => async (dispatch) => {
  dispatch(setLoading());
  let response = await fetch(`${pURL}/products`);
  const prod = await response?.json();
  if (response.status === 200) {
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
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    dispatch(dismissLoading());
    return;
  }
  const product = await response?.json();
  dispatch(getProducts());
  return product;
};

/**
 * @param { string } productId
 * @param {{ name?: string; price?: number; providerId?: string }} data
 */
export const updateProduct = (productId, data) => async (dispatch) => {
  dispatch(setLoading());
  let response = await fetch(`${pURL}/products/${productId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    dispatch(dismissLoading());
    return;
  }

  const product = await response?.json();
  dispatch(getProducts());
  return product;
};

export const removeProduct = (productId) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await fetch(`${pURL}/products/${productId}`, { method: 'DELETE' });
    dispatch(dismissLoading());
    dispatch(getProducts());
    return response.status === 204
  } catch (error) {
    dispatch(dismissLoading());
  }
}
