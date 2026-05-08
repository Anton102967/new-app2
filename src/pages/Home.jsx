import {Modal} from "../components/Test.jsx";
import {useState} from "react";

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
   return (
       <div>
           <button
               onClick={() => setIsModalOpen(true)}
           >
               Открыть модальное окно
           </button>
           <Modal isOpen={isModalOpen} onClose={setIsModalOpen}>
               <p>Я пишу что то внутри</p>
           </Modal>
       </div>
   )
}

export default Home
