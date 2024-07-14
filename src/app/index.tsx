import { useContext } from "react";
import { Banner } from "../components/Banner";
import { Board } from "../components/Board";
import { Header } from "../components/Header";
import { Timer } from "../components/Timer";
import styles from "./styles.module.css";
import { AppContext } from "../context/AppContext";

function App() {
  const [state] = useContext(AppContext);
  return (
    <main className={styles.App}>
      <Header />
      <div className={styles.container}>
        <Board />
        <div className={styles.container_timer}>
          {state.hasWon && <Banner />}
          <Timer />
        </div>
      </div>
    </main>
  );
}

export default App;
