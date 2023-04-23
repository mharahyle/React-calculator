import { useContext } from 'react';
import { ThemeContext } from '../theme/theme';
import './Button.css';
const Button = ({classname,value,onClick}) => {
    const  themeClass = useContext(ThemeContext)
return <button className={themeClass +' ' +classname}  onClick= {onClick}>
    {value}
</button>
}

export default Button;