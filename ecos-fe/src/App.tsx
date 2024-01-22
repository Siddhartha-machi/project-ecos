import { Provider } from "react-redux";

import store from "./redux/store";
import AuthLayer from "./layout/AuthLayer";

function App() {
  return (
    <Provider store={store}>
      <AuthLayer />
    </Provider>
  );
}

export default App;
