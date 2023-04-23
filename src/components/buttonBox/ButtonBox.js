import { useContext } from 'react';
import { ThemeContext } from '../theme/theme';
import './ButtonBox.css';
const ButtonBox=({children}) =>{
    const  themeClass = useContext(ThemeContext)
return <div className={themeClass+"outerButtonBox"}>
    <div className={themeClass+"buttonBox"}>
    {children}
    </div>
    
    </div>
};

export default ButtonBox;