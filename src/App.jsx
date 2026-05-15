import {Moment_Moldovan} from "./components/Test.jsx";
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <Moment_Moldovan state={count}/>
            <button onClick={() =>  setCount(prev => prev + 1)}>Увеличить</button>
            <button onClick={() =>  setCount(prev => prev - 1)}>Уменьшилось</button>
        </>
    )
}

export default App
