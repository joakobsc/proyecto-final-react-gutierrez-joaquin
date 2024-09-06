import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./data/inventario.json";
import { useEffect, useState, useContext } from "react";
import { ItemListContainer } from "./components/Catálogo";
import { NavBar } from "./components/NavBar";
import { ItemDetailsContainer } from "./components/Detalle-de-Producto";
import { CartContext, Provider } from "./context/CartContext";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { Cart } from "./components/Cart";
function App() {
  const fn = (a) => a;

  return (
    <>
      <Provider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailsContainer />} />
            <Route path="*" element={<ItemListContainer />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
