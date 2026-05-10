import {Component, useState} from 'react';
import {createPortal} from "react-dom";

export function Name() {
    return <h1>My name Oleg</h1>
}

export function City() {
    return <h1>My city Megion</h1>
}

export function Email() {
    return <h1>My email Oleg@gmail.com</h1>
}

export function Phone() {
    return <h1>My phone, Samsung</h1>;
}

export function Contacts() {
    return(
        <>
            <Email />
            <Phone />
        </>
    )
}

export function Profile() {
    return (
        <>
            <h1>Имя пользователя</h1>
            <p>Описание пользователя</p>
        </>
    )
}

export function UserStatus() {
    const isLoggedIn = true;

    if (isLoggedIn) {
        return "Пользователь онлайн";
    } else {
        return "Пользователь офлайн";
    }
}

export function HobbiesList() {
     const hobbies = ['Спорт', 'Музыка', 'Чтение', 'Игры'];

     return(
         <ul>
             {hobbies.map((nobb) => (
                <li key={nobb}>{nobb}</li>
             ))}
         </ul>
     )
}

export function TaskList() {
     const tasks = [
      { id: 1, description: 'Learn React' },
      { id: 2, description: 'Practice keys' },
      { id: 3, description: 'Build task list' }
    ];

     return(
         <ul>
             {tasks.map(task => (
                 <li key={task.id}>{task.description}</li>
             ))}
         </ul>
     )


}

export function ProductCard({name, price}) {
     return(
         <div>
             <span>Товар с названием {name} по цене {price}р</span>
         </div>
     )
}

export function DynamicButton({text}) {
     return(
        <button onClick={() => alert(`Вы нажали на кнопку: ${text}`)}>
             {text}
         </button>
     )
}

export function HoverMessage() {
    const handleMouseEnter = () => {
        console.log("Мышь наведена");
    };

     return(
        <div onMouseEnter={handleMouseEnter}>
            Наведи на меня
        </div>
     )
}

export function InteractiveDiv() {
    const handleMouseLeave = () => {
        console.log("Мышь покинула элемент");
    };

    const handleOnClick  = () => {
        console.log("Вы нажали на элемент");
    };

     return(
        <div
            onClick={handleOnClick}
            onMouseLeave ={handleMouseLeave}
            style={{padding: '20px', margin: '30px'}}
        >
            Интерактивный элемент
        </div>
     )
}

export function EventWithParams() {
    const EventWitOnClick  = (message) => {
        console.log({message});
    };

     return(
        <button
            onClick={() => EventWitOnClick('Привет, React!')}
            style={{padding: '20px', margin: '30px'}}
        >
            Передать параметр
        </button>
     )
}

export function FormEvents() {
    const onSubmitHeandler = (event) => {
        event.preventDefault();
        const element = event.target.elements.text.value;
        console.log(element);
    }
     return(
         <form
            onSubmit={onSubmitHeandler}
         >
             <input
                 name="text" type="text" 
                 style={{padding: '20px', margin: '30px'}}
             />
             <button type="submit">Отправить</button>
        </form>
    )
}

export class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);



    }

    incrementCount() {
        this.setState({count: this.state.count + 1});
    }

    decrementCount() {
        this.setState({count: this.state.count - 1});
    }

    render() {
        return (
            <div>
                <div>Счетчик с числом {this.state.count}</div>
                <button onClick={this.incrementCount}>Увеличить число</button>
                <button onClick={this.decrementCount}>Уменьшить число</button>
            </div>
        )
    }
}

export function Modal({isOpen, onClose, children}) {
    if(!isOpen) return null;

     return createPortal(
         <div className='modal'>
             <div className={'modal-content'}>
                 <button onClick={() => onClose(false)} className={'close-button'}>
                     Закрыть модальное окно
                 </button>
                 {children}
             </div>
             <div onClick={() => onClose(false)} className='modal-overlay'></div>
        </div>,
         document.body


    )
}

export function ToDoList() {
    const [tasks, setTasks] = useState([{ id: 1, text: 'Купить молоко' }, { id: 2, text: 'Прочитать книгу' }]);

    const deleteTasks = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const onSubmitTasks = (e) => {
        e.preventDefault();
        setTasks([...tasks, {id: Date.now(), text: e.target.elements.text.value} ])
    }

     return (
        <>
            {tasks.map(task => (
                <div key={task.id} style={{margin: '20px', paddingLeft: '20px'}}>
                    <li >{task.text}</li>
                    <button onClick={() => deleteTasks(task.id)}>Удалить текущий элемент</button>
                </div>

            ))}

            <form
                onSubmit={onSubmitTasks}
                style={{margin: '20px', paddingLeft: '20px', display: 'flex', gap: '20px'}} action=""
            >
                <input name={'text'} type={"text"}/>
                <button >Добавить элемент</button>
            </form>
        </>
    )
}

export function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useState(false);

     return (
        <div
            style={{
                background: isDarkMode ? 'black' : 'white',
                color: isDarkMode ? 'white' : 'black',
                padding: '20px'
            }}
        >
            <button onClick={() => setIsDarkMode(prew => !prew)}
            >
                {isDarkMode ? 'Включить светлую тему' : 'Включить темную тему'}
            </button>
        </div>
    )
}

export function MultiCounter() {
    const [count, setCount] = useState(0);
     return (
        <div>
            {count}
            <>
                <button onClick={() => setCount(count => count + 1)}>Увеличить</button>
                <button onClick={() => setCount(count => count -1)}>Уменьшить</button>
                <button onClick={() => setCount(0)}>Сбросить</button>
            </>
        </div>
    )
}

export function TextCount({count}) {
    const [text, setText] = useState(null);
    const [prewCount, setPrewCount] = useState(0);

    if(count !== prewCount) {
        setPrewCount(count);
        setText(count > prewCount ? 'увеличилось' : 'уменьшилось')
    }

     return (
        <>
            {count}
            {text && <p>Текущее значение {text}</p>}
        </>
    )
}

export function UserForm() {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);

    const formSend = (e) => {
        e.preventDefault();

        console.log(name);
        console.log(email);
    }

    return (
        <>
            <form
                action=""
                onSubmit={formSend}
            >
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder={'Имя'}
                />
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    value={email}
                    placeholder={'Электронная почта'}
                />
                <button>Отправить</button>
            </form>
        </>
    )

}