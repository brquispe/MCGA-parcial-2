import { setLoading, dismissLoading, setProducts } from "./actions";

export const getProducts = async (dispatch) => {
  dispatch(setLoading());
  let response = await fetch("TBD");
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
