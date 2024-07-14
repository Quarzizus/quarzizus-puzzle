import { useContext, useEffect, useState } from "react";
import { TimerComponent } from "./styles";
import { formatNumber } from "../../utils/formatNumber";
import { AppContext } from "../../context/AppContext";

const Timer = () => {
  const [time, setTime] = useState<number>(0);
  const [state, dispatch] = useContext(AppContext);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const finalSeconds = seconds % 60;
    return `${formatNumber(minutes)}:${formatNumber(finalSeconds)}`;
  };

  const toActivedTimer = () => {
    dispatch({ type: "SET_ISPAUSE", payload: !state.isPause });
  };
  const handleTime = () => {
    setTime(time + 1);
  };

  useEffect(() => {
    if (!state.isPause) {
      const interval = setInterval(() => {
        handleTime();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [state.isPause, time]);

  return (
    <TimerComponent>
      <p>{formatTime(time)}</p>
      <button onClick={() => toActivedTimer()}>
        {state.isPause ? "Iniciar" : "Pausar"}
      </button>
    </TimerComponent>
  );
};

export { Timer };
