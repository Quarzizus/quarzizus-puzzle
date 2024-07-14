import { useEffect, useState } from "react";
import { TimerComponent } from "./styles";
import { formatNumber } from "../../utils/formatNumber";

const Timer = () => {
  const [time, setTime] = useState<number>(0);
  const [isTimeActive, setTimeActive] = useState<boolean>(false);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const finalSeconds = seconds % 60;
    return `${formatNumber(minutes)}:${formatNumber(finalSeconds)}`;
  };

  const toActivedTimer = () => {
    setTimeActive(!isTimeActive);
  };
  const handleTime = () => {
    setTime(time + 1);
  };

  useEffect(() => {
    if (isTimeActive) {
      const interval = setInterval(() => {
        handleTime();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isTimeActive, time]);

  return (
    <TimerComponent>
      <p>{formatTime(time)}</p>
      <button onClick={() => toActivedTimer()}>Iniciar</button>
    </TimerComponent>
  );
};

export { Timer };
