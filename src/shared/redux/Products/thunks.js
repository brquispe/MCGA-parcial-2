import { setLoading, dismissLoading, setProducts } from "./actions";

const pURL = process.env.REACT_APP_API_URL;

export const getProducts = () => async (dispatch) => {
  dispatch(setLoading());
  let response = await fetch(`${pURL}/products`);
  const prod = await response?.json();
  if(response.status === 200){
    console.log(prod.data)
    dispatch(setProducts(prod.data))
    dispatch(dismissLoading());
    return
  }
  else{
    dispatch(dismissLoading())
    console.log('ERROR')
    return
  }
}
