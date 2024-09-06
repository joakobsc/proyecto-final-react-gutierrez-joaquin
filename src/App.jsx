import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/Catálogo";
import { NavBar } from "./components/NavBar";
import { ItemDetailsContainer } from "./components/DetalleDeProducto";
import { Provider } from "./context/CartContext";
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
            <Route path="/categoryId/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailsContainer />} />
            <Route path="*" element={<ItemListContainer />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
