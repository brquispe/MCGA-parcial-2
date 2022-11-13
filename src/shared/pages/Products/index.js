import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from 'Products/store/thunks';
import { useProducts } from 'Products/store/reducer';
import ProductCard from 'Products/components/ProductCard';
import LoadingSpinner from 'shared/components/LoadingSpinner';
import styles from './prod.module.css';

const Products = () => {
  document.title = 'Productos';
  const dispatch = useDispatch();

  const { products, isLoadingProducts } = useProducts();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onRemoveProduct = (productId) => {
    console.log(productId);
  };

  return (
    <div>
      {isLoadingProducts ? (
        <div className={styles.centerLoadingSpinner}>
          <LoadingSpinner />
        </div>
      ) : (
        <div className={styles.productDeck}>
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product._id}
              onRemoveProduct={() => onRemoveProduct(product._id)}
            />
          ))}
          {products.length === 0 && <h3>No se encontraron productos</h3>}
        </div>
      )}
    </div>
  );
};
export default Products;
