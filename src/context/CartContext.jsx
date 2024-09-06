import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

  const reset = () => setItems([]);
  const removeItem = (id) => {
    const filter = items.filter((i) => i.id !== id);
    setItems(filter);
  };

  const addItem = (item) => {
    setItems((prevItems) => {
      const itemExists = prevItems.some((i) => i.id === item.id);

      return itemExists
        ? prevItems.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          )
        : [...prevItems, item];
    });
  };

  console.log(items);

  return (
    <CartContext.Provider value={{ addItem, items, reset, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
