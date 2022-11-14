import LoadingSpinner from '../LoadingSpinner';
import styles from './Button.module.css';

const sharedButton = ({text, onClick, type, loading, className}) => {
    return (
      <button type={type} onClick={onClick} disabled={loading} className={`${styles.btn} ${className}`}>
        <LoadingSpinner size="small" />
        <span>{text}</span>
      </button>
    );
  };
  
  export default sharedButton;
