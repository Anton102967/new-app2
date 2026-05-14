import {Modal_Two} from "./components/Test.jsx";
import {useState} from "react";

function App() {
    const [state, setState] = useState(true);
    return (
        <>
            <button onClick={() => setState(true)}>Открыть модальное окно</button>
            <Modal_Two isOpen={state} onClose={() => setState(false)} />
        </>
    )
}

export default App
