import { useState } from 'react';
import styles from './styles.module.scss';
import backgroundImg from '../../assets/images/pattern-bg.png';
import { InputField } from '../../components';

const Home = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <main className={styles.container}>
      <section className={styles.headerContainer}>
        <img src={backgroundImg} alt="" />
        <div className={styles.headerContainerContent}>
          <h1>IP Address Tracker</h1>
          <InputField
            setInputValue={setInputValue}
            placeholder="Search for any IP address or domain"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
