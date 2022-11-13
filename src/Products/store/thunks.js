import { setLoading, dismissLoading, setProducts } from './actions';

const pURL = process.env.REACT_APP_API_URL;

export const getProducts = (showDeleted = false) => async (dispatch) => {
  dispatch(setLoading());
  let response = await fetch(`${pURL}/products?showDeleted=${showDeleted}`);
  const prod = await response?.json();
  if (response.status === 200) {
    dispatch(dismissLoading());
    dispatch(setProducts(prod.data));
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
  try {
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
    dispatch(dismissLoading());
    dispatch(getProducts());
    return product;
  } catch (error) {
    dispatch(dismissLoading);
  }
};

/**
 * @param { string } productId
 * @param {{ name?: string; price?: number; providerId?: string }} data
 */
export const updateProduct = (productId, data) => async (dispatch) => {
  try {
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
    dispatch(dismissLoading());
    dispatch(getProducts());
    return product;
  } catch (error) {
    dispatch(dismissLoading());
  }
};

export const removeProduct = (productId) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await fetch(`${pURL}/products/${productId}`, {
      method: 'DELETE',
    });
    dispatch(dismissLoading());
    dispatch(getProducts());
    return response.status === 204;
  } catch (error) {
    dispatch(dismissLoading());
  }
};
