import { useEffect } from 'react';
import styles from './prodform.module.css';
import ProdInput from '../../../shared/components/prodInput';
import ProdButton from '../../../shared/components/prodButton';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useProducts } from 'Products/store/reducer';
import { addProduct, getProviders, updateProduct } from 'Products/store/thunks';
import SelectInput from 'shared/components/SelectInput';

const ProdForm = ({ product }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      name: product?.name || '',
      price: product?.price || 0,
      providerId: product?.provider || null,
    },
  });

  const dispatch = useDispatch();
  const { providers, isLoadingProducts } = useProducts();

  useEffect(() => {
    dispatch(getProviders());
  }, [dispatch]);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (product) {
      dispatch(updateProduct(product._id, data));
    } else {
      dispatch(addProduct(data));
    }
    navigate('/products');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

      <SelectInput
        control={control}
        name="providerId"
        label="Proveedor"
        rules={{ required: 'Proveedor requerido' }}
        options={providers}
        optionValue="_id"
        optionLabel="name"
        errors={errors}
      />

      <ProdButton
        text={product ? 'Guardar' : 'Agregar'}
        type="submit"
        loading={isLoadingProducts}
      />
    </form>
  );
};

export default ProdForm;
