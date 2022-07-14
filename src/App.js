import GlobalStyle from "./styles/globalStyles";
import { AppRouter } from "./routes/AppRouter";
import CartContextProvider from "./contexts/CartContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <CartContextProvider>
          <GlobalStyle />
          <AppRouter />
        </CartContextProvider>
      </Provider>
    </>
  );
}

export default App;
