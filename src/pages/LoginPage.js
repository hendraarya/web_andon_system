import React , {useState, useEffect} from 'react';

import { useTimer } from 'react-timer-hook';
//Import Audio
import song from "../assets/audio/Alert.mp3";
import song2 from "../assets/audio/Alarmsound.mp3";
import ReactAudioPlayer from 'react-audio-player';

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const LoginPage = () => {

    const [barState, setBarState] = useState({i: 0, bars: [23, 63, 236, 17, 2]});

    useEffect(() => {
        if (barState.i < barState.bars.length - 1) {
            setTimeout(() => {
                setBarState(({i, bars}) => {
                    // Copy the current array
                    bars = [...bars];
                    // Do the swap
                    swap(bars, i, i + 1);
                    // Set the state by returning the update
                    ++i;
                    return {i, bars};
                });
            }, 2000);
        }
        setTimeout(() => {

    },3000);
    }, [barState]);

    return (
        <div>

        
    {/* <div>{barState.bars.join(", ")}</div> */}
    
    <ReactAudioPlayer
              src={song2}
              autoPlay
              loop
              // controls
            />
            </div>
    
    );
}
export default LoginPage;