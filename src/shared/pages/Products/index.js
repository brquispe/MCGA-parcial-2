import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addProduct, getProducts } from "../../../Products/store/thunks";

const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoadingProducts } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
    const product = {
      name: 'Mouse',
      price: 4500
    };
    // dispatch(addProduct(product));
  }, [dispatch])

//   return (<div>
//     <h1>Productos</h1>
//     {isLoadingProducts && <p>Cargando...</p>}
//   </div>)
// }

if (isLoadingProducts) return <div>cargando</div>
   return (
    <div>
        <h1>Productos</h1>
        <ul>
          {products.map(product => (<li key={product._id}>{product.name}</li>))}
        </ul>
    </div>
   )
   }
export default Products;
