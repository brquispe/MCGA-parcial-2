import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/Products/thunks";
import ProdForm from "../../../Products/components/prodForm";
import styles from './prod.module.css';

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
        <table>    
        <tr><th>Id Code</th><th>Name</th><th>Price</th><th>Provider</th></tr>
        {products.map((product) =>         
          <tr>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.provider.name}</td>
          </tr>
        )}      
      </table>
    </div>
   )
   }
export default Products;
