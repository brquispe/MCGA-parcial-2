import styles from './ProductCard.module.css';
/**
 * @param {{ product: { _id: string; name: string; price: number; provider: { _id: string, name: string } }, onRemoveProduct: (productId: string) => boolean }}
 */
const ProductCard = ({ product, onRemoveProduct }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__header}>
        <h3>{product.name}</h3>
        <div className={styles.dropdown}>
          <button className={styles.actionButton}>...</button>
          <div className={styles['dropdown-content']}>
            <a
              title="Editar"
              href={`/products/${product._id}`}
              className={styles.btnAction}
            >
              <span>&#9998;</span>
              <span>Editar</span>
            </a>
            <button
              title="Remover"
              onClick={() => onRemoveProduct(product._id)}
              className={styles.btnAction}
              type="button"
            >
              <span>&times;</span>
              <span>Remover</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.productCard__body}>
        <p className={styles['productCard-price']}>
          <strong>$</strong>
          {product.price}
        </p>
        <p>
          <strong>Proveedor: </strong>
          {product.provider?.name}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
