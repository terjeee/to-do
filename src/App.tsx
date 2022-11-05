import { Provider } from "react-redux";
import store from "./store/store";

import ToDo from "./ToDo/ToDo";

import styles from "./App.module.scss";

function App() {
  return (
    <main className={styles.app}>
      <div className={styles.maxwidth}>
        <ToDo />
      </div>
    </main>
  );
}

function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWrapper;
