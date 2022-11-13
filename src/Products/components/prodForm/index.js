import React from 'react';
import styles from './prodform.module.css';
import ProdInput from '../../../shared/components/prodInput';
import ProdButton from '../../../shared/components/prodButton';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const ProdForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
    // const userWatch = watch('userName')
    // const passWatch = watch('Password')
    
    //change logic
    const navigate = useNavigate()
    const submission = (data) => {
      console.log(data);
      navigate("/products")
    }
    //change logic
    
    // console.log(userWatch, passWatch)

    return (
      <form className={styles.form} onSubmit={handleSubmit(submission)}>
        <ProdInput register={register} type='text' placeholder='DESCRIPCION' name='descProd'
          rules={
            {
              required: 'Se requiere este valor',
              pattern:
                { minlength: 5 , message: "No cumple con la el patron" }
             }} />
        {errors.userName?.message}

        <ProdInput register={register} type='number' placeholder='PRECIO' name='precioProd'
          rules={
            {
              required: 'Se requiere este valor',
              pattern:
                { value: /^[a-zA-Z0-9\.]*$/, message: "Debe ser un numero con decimal" }
             }} />
        {errors.userName?.message}

        <ProdInput register={register} type='text' placeholder='PROVEEDOR' name='provider'
          rules={
            { 
              required: 'contraseña obligatoria' 
              }} />
        {errors.Password?.message}
        <ProdButton text='Submit' onClick={() => null} type='submit' />
      </form>
    );
  };

  export default ProdForm;