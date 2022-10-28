import styles from './styles.module.scss';
import backgroundImg from '../../assets/images/pattern-bg.png';

const Home = (): JSX.Element => (
  <main className={styles.container}>
    <section className={styles.headerContainer}>
      <img src={backgroundImg} alt="" />
      <div className={styles.headerContainerContent}>
        <h1>IP Address Tracker</h1>
      </div>
    </section>
  </main>
);

export default Home;
