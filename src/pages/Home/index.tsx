import { UserDetailsActions, UserDetailsState, useUserDetailsStore } from '../../store';

const Home = (): JSX.Element => {
  const { token, setToken } = useUserDetailsStore(
    (state: UserDetailsState & UserDetailsActions) => state,
  );

  return (
    <div>
      {token}
      <button type="button" onClick={() => setToken(Math.random().toString())}>
        Set Token
      </button>
    </div>
  );
};

export default Home;
