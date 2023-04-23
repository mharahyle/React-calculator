import { useContext } from 'react';
import { ThemeContext } from '../theme/theme';
import './Wrapper.css';
const Wrapper = ({ children }) => {
  const  dynamicClass = useContext(ThemeContext)
    return <div class={dynamicClass+'wrapper'}>{children}
    </div>;
  };
  
  export default Wrapper;