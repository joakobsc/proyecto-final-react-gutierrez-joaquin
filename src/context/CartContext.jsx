import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

  const reset = () => setItems([]);

  const addItem = (item) => {
    setItems((prevItems) => {
      // Verifica si el ítem ya existe en el carrito
      const itemExists = prevItems.some((i) => i.id === item.id);

      return itemExists
        ? prevItems.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + 1 } // Actualiza la cantidad del ítem existente
              : i
          )
        : [...prevItems, { ...item, quantity: 1 }]; // Agrega un nuevo ítem con cantidad 1
    });
  };

  console.log(items);

  return (
    <CartContext.Provider value={{ addItem, items, reset }}>
      {children}
    </CartContext.Provider>
  );
};
