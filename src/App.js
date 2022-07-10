import GlobalStyle from "./styles/globalStyles";
import { AppRouter } from "./routes/AppRouter";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <GlobalStyle />
        <AppRouter />
      </CartContextProvider>
    </>
  );
}

export default App;
