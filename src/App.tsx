import './App.css';
import Main from './Main'
import Start from './Start'
import { useState, useEffect } from 'react';
import {CSSTransition} from 'react-transition-group';

interface State {
	beginFade: boolean;
}

export default function App() {

    const [state, setState] = useState<State>({
      beginFade: true,
    });
    
    const {beginFade} = state;

    const handleStart = () => {
        return (
          <div>
              <CSSTransition in={beginFade} unmountOnExit={true} timeout={3000} classNames="fade">
              <div id='overlay'>
                <Start/>
              </div>
              </CSSTransition>
              <Main/>
          </div>
        )
    };

    useEffect(() => {
      if(beginFade === true) {
          setTimeout(function() {
            setState({...state, beginFade:false})
          }, 2000)
        }
    }, []);

    return (
      handleStart()
    )
}