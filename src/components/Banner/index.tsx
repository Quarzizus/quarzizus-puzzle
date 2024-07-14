import { useContext } from "react";
import { BannerComponent } from "./styles";
import { AppContext } from "../../context/AppContext";

const Banner = () => {
  const [_state, dispatch] = useContext(AppContext);

  const handleClick = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <BannerComponent>
      <p>¡ Ganaste :3 !</p>
      <button onClick={handleClick}>Reiniciar</button>
    </BannerComponent>
  );
};

export { Banner };
