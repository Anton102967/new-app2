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
