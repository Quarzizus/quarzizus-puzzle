import { Board } from "../components/Board";
import { Header } from "../components/Header";
import styles from "./styles.module.css";

function App() {
  return (
    <main className={styles.App}>
      <Header />
      <Board />
    </main>
  );
}

export default App;
