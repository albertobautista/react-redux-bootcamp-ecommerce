import GlobalStyle from "./styles/globalStyles";
import { AppRouter } from "./routes/AppRouter";
import CartContextProvider from "./contexts/CartContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <CartContextProvider>
          <GlobalStyle />
          <AppRouter />
        </CartContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
