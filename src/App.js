import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart.js";
import CartProvider from "./store/CartProvider.js";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}{" "}
      {/* Its a portal, so
      doesnt matter where its placed */}
      <Header onShowCart={showCartHandler} />
      {/* best practice?! sending through
      2 levels the prop(aka prop drilling) or use context */}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
