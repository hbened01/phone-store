import { createContext } from 'preact';

const Context = createContext({
  phoneListStorage: [],
  setPhoneListStorage: () => {},
});

export { Context };
