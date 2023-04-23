import './Toggle.css';
import React from 'react';
import App from '../../App';
import { ThemeContext } from '../theme/theme';


class Toggle extends React.Component {
    state = {
         currentClass: "firstTheme"
        };
        firstTheme =() => {
            this.setState({currentClass:"firstTheme"})
        };
        secondTheme =() => {
            this.setState({currentClass:"secondTheme"})
            
        };
        thirdTheme =() => {
            this.setState({currentClass:"thirdTheme"})
            console.log('thirdTheme')
        };
         handleChange = (event) => {
            this.setState(event.target.checked);
        
            // 👇️ this is the checkbox itself
            console.log(event.target);
        
            // 👇️ this is the checked value of the field
            console.log(event.target.checked);
          };
      
        render() {
            return (
                <div className={this.state.currentClass+ 'main-div'}>
             
                   <ThemeContext.Provider value={this.state.currentClass}>
                    <div className={this.state.currentClass + "top-container"}>
                    <div>
                    <h4>calc</h4>
                    </div>
                    
                   
                   <div  id='second-item'>
                   <h4>theme</h4>
                    <div id ="theme">
                    <div id= {this.state.currentClass+ 'number'}>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    </div>
                        <div id= {this.state.currentClass+ 'dots'}>
                       
                        <input type="radio" id="firstThemeradio" onClick={this.firstTheme}  name="theme"  defaultChecked={true} />
                       
                     
                        <input type="radio" id="secondThemeradio" onClick={this.secondTheme} name="theme"   />
                       
                
                        <input type="radio" id="thirdThemeradio" onClick={this.thirdTheme}  name="theme"   />
                       
                       
            
                 
                        </div>
                    <div>
                   
                    </div>
                    </div>
                  
                  
                   </div>
           
                    </div>
               
                   <App />
       
                   </ThemeContext.Provider>
                   
                </div>
            )
        };

}


export default Toggle;