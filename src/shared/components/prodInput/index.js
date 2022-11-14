import styles from './Input.module.css';

const ProdInput = ({ register, type, placeholder, name, rules, label, className, ...props }) => {
  return (
    <div className={`${styles.formControl} ${className || ''}`}>
      <label htmlFor={name}>{label || placeholder}</label>
      <input
        {...props}
        {...register(`${name}`, rules)}
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
      />
    </div>
  );
};

export default ProdInput;
