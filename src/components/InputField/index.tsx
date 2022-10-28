import { memo } from 'react';
import { ReactSVG } from 'react-svg';
import arrowIcon from '../../assets/icons/icon-arrow.svg';
import styles from './styles.module.scss';

interface Props {
  placeholder: string;
  setInputValue: (value: string) => void;
}

export const InputField = memo<Props>(({ placeholder, setInputValue }) => (
  <div className={styles.container}>
    <input
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
      }}
      type="text"
      placeholder={placeholder}
    />
    <div className={styles.buttonSubmitContainer}>
      <ReactSVG src={arrowIcon} />
    </div>
  </div>
));

InputField.displayName = 'InputField';

export default InputField;