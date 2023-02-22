import { createContext } from 'preact';

const Context = createContext({
  phoneListStorage: [],
  setPhoneListStorage: () => {},
  isLoading: false,
  setIsLoading: () => {},
  cartListStorage: [],
  setCartListStorage: () => {},
  notify: {},
  setNotify: () => {},
});

export { Context };
