import { useEffect } from 'react';
import styles from './prodform.module.css';
import ProdInput from '../../../shared/components/prodInput';
import ProdButton from '../../../shared/components/prodButton';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useProducts } from 'Products/store/reducer';
import { addProduct, getProviders } from 'Products/store/thunks';

const ProdForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { providers, isLoadingProducts } = useProducts();

  useEffect(() => {
    dispatch(getProviders());
  }, [dispatch]);

  const navigate = useNavigate();

  const submission = (product) => {
    dispatch(addProduct(product));
    navigate('/products');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submission)}>
      <ProdInput
        register={register}
        type="text"
        placeholder="Nombre"
        name="name"
        label="Nombre"
        rules={{
          required: 'Se requiere este valor',
          pattern: { minlength: 5, message: 'No cumple con la el patron' },
        }}
      />
      {errors.name?.message}

      <ProdInput
        register={register}
        type="number"
        placeholder="Precio"
        name="price"
        label="Precio"
        rules={{
          required: 'Se requiere este valor',
          pattern: {
            value: /^[a-zA-Z0-9\.]*$/,
            message: 'Debe ser un numero con decimal',
          },
        }}
      />
      {errors.price?.message}

      <select
        name="providerId"
        id="provider"
        {...register('providerId', { required: 'El proveedor es requerido' })}
      >
        <option></option>
        {providers?.map((provider) => (
          <option id={provider._id} key={provider._id} value={provider._id}>
            {provider.name}
          </option>
        ))}
      </select>
      {errors.providerId?.message}

      <ProdButton
        text="Guardar"
        onClick={() => null}
        type="submit"
        loading={isLoadingProducts}
      />
    </form>
  );
};

export default ProdForm;
