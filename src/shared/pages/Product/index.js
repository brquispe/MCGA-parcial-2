import ProdForm from '../../../Products/components/prodForm';
import styles from './product.module.css';

const ProdInputForm = () => {
  document.title = 'Agregar producto';

  return (
    <div className={styles.form}>
      <h1 className={styles.divForm}>Agregar producto</h1>
      <ProdForm />
    </div>
  );
};

export default ProdInputForm;
