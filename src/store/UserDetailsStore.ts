import create from 'zustand';

export interface UserDetailsState {
  token: string | null;
  userId: string | null;
}

export interface UserDetailsActions {
  setToken: (token: string) => void;
  setUserId: (userId: string) => void;
  reset: () => void;
}

const initialState: UserDetailsState = {
  token: null,
  userId: null,
};

export const useUserDetailsStore = create<UserDetailsState & UserDetailsActions>((set) => ({
  ...initialState,
  setToken: (newToken) => set(() => ({ token: newToken })),
  setUserId: (newUserId) => set(() => ({ userId: newUserId })),
  reset: () => {
    set(initialState);
  },
}));

export default useUserDetailsStore;
