const ProdInput = ({ register, type, placeholder, name, rules, label }) => {
  return (
    <>
      <label htmlFor={name}>{label || placeholder}</label>
      <input
        {...register(`${name}`, rules)}
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
      />
    </>
  );
};

export default ProdInput;
