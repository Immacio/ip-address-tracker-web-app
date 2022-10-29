import { memo } from 'react';
import { ReactSVG } from 'react-svg';
import { ClipLoader } from 'react-spinners';
import arrowIcon from '../../assets/icons/icon-arrow.svg';
import styles from './styles.module.scss';

interface Props {
  placeholder: string;
  setInputValue: (value: string) => void;
  onClick: () => void;
  isLoading: boolean;
}

export const InputField = memo<Props>(({ placeholder, setInputValue, onClick, isLoading }) => (
  <div className={styles.container}>
    <input
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
      }}
      type="text"
      placeholder={placeholder}
    />
    <div
      role="button"
      onKeyDown={() => null}
      tabIndex={0}
      onClick={() => {
        if (isLoading) return;
        onClick();
      }}
      className={styles.buttonSubmitContainer}
    >
      {isLoading ? <ClipLoader color="#fff" size={15} /> : <ReactSVG src={arrowIcon} />}
    </div>
  </div>
));

InputField.displayName = 'InputField';

export default InputField;
