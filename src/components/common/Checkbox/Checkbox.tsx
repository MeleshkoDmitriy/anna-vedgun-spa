import { FC, useId } from 'react';
import styles from './Checkbox.module.scss';
import { IoCheckmarkOutline } from 'react-icons/io5';

interface CheckboxProps {
  isChecked: boolean;
  onChange: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({ isChecked, onChange }) => {
  const id = useId();

  const handleChange = () => {
    onChange();
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={isChecked}
          id={id}
          onChange={handleChange}
        />
        {isChecked && <IoCheckmarkOutline className={styles.icon} />}
      </label>
    </div>
  );
};
