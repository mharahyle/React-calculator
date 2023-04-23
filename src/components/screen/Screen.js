import { Textfit } from "react-textfit";
import './Screen.css'
import { ThemeContext } from "../theme/theme";
import { useContext } from "react";
const Screen = ({ value }) => {
  const  dynamicClass = useContext(ThemeContext)
    return (
      <Textfit className={dynamicClass+'screen'} mode="single" max={32}>
        {value}
      </Textfit>
    );
  };
  
  export default Screen;