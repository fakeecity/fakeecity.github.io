import './Main.css';
import { useState, useEffect } from 'react';

interface State {
	navState: Number;
    buttonText: String;
    ticker: any;
}

export default function Main() {

    const [state, setState] = useState<State>({
        navState: 0,
        buttonText: ">> Navgiate",
        ticker: {
            price: NaN,
            priceUp: false,
            doomsday: NaN,
            debt: NaN
        }
    });

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/ticker`)
            .then((response) => response.json())
            .then((response) => setState({...state, ticker:response}))
            .catch(error => console.log(error));
    })

    const {ticker} = state

    return (
        <div>
            <video autoPlay muted loop id="bgvideo">
                <source src={require("./videos/clouds.mp4")} type="video/mp4"/>
            </video>
            <div className='MainContainer'>
                <div className='window'>
                    <img src={require('./images/earthlogo.webp')} className='cornerIcon'/>
                    <p className='title'>C:/Fakeworld</p>
                    <div className='toolbar'>
                        <div className='vertical_dot' />
                        <p>File</p>
                        <p>Edit</p>
                        <p>View</p>
                        <p>Favorites</p>
                        <p>Tools</p>
                        <p>Help</p>
                    </div>
                    <div className='mainwindow'>
                        <div className='bgimagegradient'/>
                        <h1 className='logotext'>FAKEWORLD</h1>
                        <img className='fakeworldlogo' src={require('./images/fakeworld3.webp')} alt='' />
                        <div className='navbar'>
                            
                        </div>
                        <div className='ticker'> 
                            <p style={{color:'white'}}>Ethereum Price (USD)</p> 
                            <p style={ticker.priceUp ? {color:'limegreen'} : {color:'red'}}><b>${ticker.price}</b></p>
                            <p style={{color:'white'}}>US Public Debt (Trillions)</p>
                            <p style={{color:'limegreen'}}><b>{((ticker.debt)/1000000000000).toFixed(3)}</b></p>
                            <p style={{color:'white'}}>Doomsday Clock</p>
                            <p style={{color:'#b9b9b9'}}><b>{ticker.doomsday} seconds to midnight</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}