import React,{ useState,useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/wrapper/Wrapper';
import Screen from './components/screen/Screen';
import ButtonBox from './components/buttonBox/ButtonBox';
import Button from './components/button/Button';
import Toggle from './components/themeToggle/Toggle';
const buttonValues = [
[7,8,9,'Del'],
[4,5,6,'+'],
[1,2,3,'-'],
['.',0,'/','*'],
['Reset' , '=']
]

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const math = (a, b, sign) =>
  sign === "+" ? a + b : sign === "-" ? a - b : sign === "*" ? a * b : a / b;

const zeroDivisionError = "Can't divide with 0";



const App=() => {
 
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          removeSpaces(calc.num) % 1 === 0 && !calc.num.toString().includes(".")
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const deletingEffect = () => {
    const initialvalue = calc.num.toString();
		if(calc.res===''){
      setCalc({
        res:  0 ,
      });
    }
		const value = initialvalue.slice(0, -1);
    setCalc({
      ...calc,
      num:Number(value),
      res: !calc.sign ? 0 : value,
    });
		
	}

  const comaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (value === '+'){
      setCalc({
        ...calc,
        sign: e.target.innerHTML,
        res: !calc.num
          ? calc.res
          : !calc.res
          ? calc.num
          : toLocaleString(
              math(
                Number(removeSpaces(calc.res)),
                Number(removeSpaces(calc.num)),
                calc.sign
              )
            ),
            num: !calc.num.toString().includes("+") ? calc.num + value : calc.num,
      });
    }
    if (value === '-'){
      setCalc({
        ...calc,
        sign: e.target.innerHTML,
        res: !calc.num
          ? calc.res
          : !calc.res
          ? calc.num
          : toLocaleString(
              math(
                Number(removeSpaces(calc.res)),
                Number(removeSpaces(calc.num)),
                calc.sign
              )
            ),
            num: !calc.num.toString().includes("-") ? calc.num + value : calc.num,
      });
    }
    if (value === '*'){
      setCalc({
        ...calc,
        sign: e.target.innerHTML,
        res: !calc.num
          ? calc.res
          : !calc.res
          ? calc.num
          : toLocaleString(
              math(
                Number(removeSpaces(calc.res)),
                Number(removeSpaces(calc.num)),
                calc.sign
              )
            ),
            num: !calc.num.toString().includes("*") ? calc.num + value : calc.num,
      });
    }
    if (value === '/'){
      setCalc({
        ...calc,
        sign: e.target.innerHTML,
        res: !calc.num
          ? calc.res
          : !calc.res
          ? calc.num
          : toLocaleString(
              math(
                Number(removeSpaces(calc.res)),
                Number(removeSpaces(calc.num)),
                calc.sign
              )
            ),
            num: !calc.num.toString().includes("/") ? calc.num + value : calc.num,
      });
    }
 
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? zeroDivisionError
            : eval(calc.num).toString(),
        sign: "",
        num:eval(calc.num).toString(),
      });
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      sign: "",
    });
  };

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;
    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };
  const buttonClickHandler = (e, btn) => {
    btn === "Reset" || calc.res === zeroDivisionError
    ? resetClickHandler()
    : btn === "+-"
    ? invertClickHandler()
    : btn === "%"
    ? percentClickHandler()
    : btn === "="
    ? equalsClickHandler()
    : btn === "/" || btn === "*" || btn === "-" || btn === "+"
    ? signClickHandler(e)
    :  btn == "Del" ? deletingEffect()
    : btn === "."
   
    ? comaClickHandler(e)
    : numClickHandler(e)
  };


  return (
<Wrapper>
  <Screen value={calc.num ? calc.num : calc.res} />
  <ButtonBox>
    {
      buttonValues.flat().map((btn,item) => {
        return (
          <Button 
          key={item}
          classname={btn=='='?'equals':btn=='*'?'X' : btn}
          value={btn}           
          onClick={(e) => buttonClickHandler(e, btn)}/>
        );
      }
      )
    }
    
  </ButtonBox>

</Wrapper>
  );
}

export default App;
