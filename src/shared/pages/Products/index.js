import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/Products/thunks";

const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoadingProducts } = useSelector((state) => state.products);
  console.log(String(isLoadingProducts))
  useEffect(() => {
    dispatch(getProducts(dispatch));
  }, [])

//   return (<div>
//     <h1>Productos</h1>
//     {isLoadingProducts && <p>Cargando...</p>}
//   </div>)
// }

if (isLoadingProducts) return <div>cargando</div>
   return (
    <div>
        <h1>Productos</h1>
    </div>
   )
   }
export default Products;
