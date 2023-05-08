import { useState } from "react";
import { useContext } from "react";
import { AppContext } from '../App';

export const ChangeProfile = () => {
    const {setUserName} =useContext(AppContext); 
    const [name, setName] = useState('');

    return (
        <div>
            <input onChange={(event) => {
                setName(event.target.value)
            }} />
            <button onClick={() => {setUserName(name)}}>Change username</button>
        </div>
    )
}