import logo from './logo.svg';
import './App.css';
import ExerciseSample from './Components/ExerciseSample';
import { type } from '@testing-library/user-event/dist/type';
import Exercise2 from './Components/Exercise2';
import Learn from './Components/FunctionalComponent';
import { doc } from 'prettier';
import Learning from './Components/ClassComponent';
// let number=[1,'kjhb',2];
function App() {
    return(
        <div className='App'>
            <header className='App-header'>
                {/* <img src={logo} className='App-logo' /> */}
                {/* <h1>Hello World!!</h1> */}
                {/* <Learning/> */}
                <Learn/>
                {/* <Learn name="I love Mango" weight="120kg"/>
                <Learn name="Do SomeThing Productive" weight="90kg"/> */}
            </header>
        </div>
    );
 //Class & ojects
}
export default App;
