import React from "react";
import ProdForm from "../../../Products/components/prodForm";
import styles from './product.module.css';

const ProdInputForm = () => {
    return (
      <div className={styles.form}>
        <div>FORMULARIO</div>
        <ProdForm/>
      </div>
    );
  };
  
  export default ProdInputForm;