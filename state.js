import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [cartId, setCartId] = useState(null);
  const [cartItems, setCartItems] = useState(0);

  return (
    <AppContext.Provider value={{ 
      cartId, 
      setCartId,
      cartItems,
      setCartItems
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
