import { Board } from "../components/Board";
import { Header } from "../components/Header";
import { Timer } from "../components/Timer";
import styles from "./styles.module.css";

function App() {
  return (
    <main className={styles.App}>
      <Header />
      <div className={styles.container}>
        <Board />
        <Timer />
      </div>
    </main>
  );
}

export default App;
