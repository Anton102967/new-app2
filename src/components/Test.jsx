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
             >
             Передать параметр
             </input>
             <button type="submit">Отправить</button>
        </form>
    )
}