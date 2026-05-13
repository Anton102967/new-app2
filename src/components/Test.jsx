import {Component, useEffect, useRef, useState} from 'react';
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

export function Timer() {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime = `${minutes} : ${seconds}`;

  const startTimer = () => {
      if(timerId !== null) return;
      const id = setInterval(() => {
        setTime(time => time + 1);
      }, 1000)
      setTimerId(id);
  };


  const pauseTimer = () => {
      clearInterval(timerId);
      setTimerId(null)
  };

  const resetTimer = () => {
      clearInterval(timerId);
      setTimerId(null);
      setTime(0);
  };

  return (
    <>
      {formattedTime}
      <button onClick={startTimer}>Старт</button>
      <button onClick={pauseTimer}>Пауза</button>
      <button onClick={resetTimer}>Сброс</button>
    </>
  );
}

export function Tabs() {
    const [activeTab, setActiveTab] = useState('home');
    return(
        <>
            <button onClick={() => setActiveTab('home')}>Главная</button>
            <button onClick={() => setActiveTab('about')}>О нас</button>
            <button onClick={() => setActiveTab('contacts')}>Контакты</button>

            {activeTab === 'home' && <p>Это главная страница</p>}
            {activeTab === 'about' && <p>Информация о нас</p>}
            {activeTab === 'contacts' && <p>Наши контакты</p>}
        </>
    )
}

export function FilterableList() {
        const [category, setCategory] = useState('Все');
        const items = [
         { id: 1, name: 'Яблоко', category: 'Фрукты' },
         { id: 2, name: 'Молоко', category: 'Молочные продукты' },
         { id: 3, name: 'Хлеб', category: 'Хлебобулочные изделия' },
    ];

    return(
        <>
            <button onClick={() => setCategory('Все')}>Все</button>
            <button onClick={() => setCategory('Фрукты')}>Фрукты</button>
            <button onClick={() => setCategory('Молочные продукты')}>Молочные продукты</button>
            <button onClick={() => setCategory('Хлебобулочные изделия')}>Хлебобулочные изделия</button>
            <ul>
                {items.filter(item => category === 'Все' || item.category === category)
                .map((item) => (
                    <li key={item.id}>{`${item.name}, ${item.category}`}</li>
                ))
            }
            </ul>

        </>
    )
}

export function ShoppingList() {
  const [products, setProducts] = useState([]);
  const randomProducts = ['Яблоко', 'Банан', 'Апельсин', 'Груша'];

  const addProduct = (value) => {
    setProducts(prev => [...prev, value]);
  };

  const addItem = () => {
        const rondomIndex = Math.floor(Math.random() * randomProducts.length);
        const randomProduct = randomProducts[rondomIndex];
        setProducts([...products, randomProduct]);
  }
  return (
    <div>
      {products.length === 0 ? (
        <p>Список продуктов пуст</p>
      ) : (
        <ul>
          {products.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <AddItem
        addItem={addItem}
        resetList={() => setProducts([])}
      />
    </div>
  );
}

function AddItem({ addItem, resetList }) {
  return (
    <div>
      <button onClick={addItem}>Добавить продукт</button>
      <button onClick={resetList}>Сбросить список</button>
    </div>
  );
}

export class CounterLifecycle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }

        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1});
    }

    componentDidMount() {
        document.title = `Count: ${this.state.count}`;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            document.title = `Count: ${this.state.count}`;
        }
    }

    componentWillUnmount() {
        console.log('Компонент будет удалён');
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.increment}>Увеличить</button>
            </div>
        )
    }
}

export function CounterEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count: ${count}`;

        return () => {
            console.log('Очистка перед обновлением или размонтированием');
        }
    }, [count])

    return (
        <div>
            {count}
            <button style={{margin: '15px'}} onClick={() => setCount(prev => prev + 1)}>
                Увеличить
            </button>
        </div>
    )
}

export function TimerNow () {
    const [time, setTime] = useState(new Date());
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if(!isActive) return;

        const id = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(id);
    }, [isActive])


    const resetTimer  = () => {
        setTime(new Date());
        setIsActive(true);
    }

    return (
        <div>
            {time.toLocaleTimeString('ru-Ru')}
            <button onClick={() => setIsActive(true)}>Старт</button>
            <button onClick={() => setIsActive(false)}>Стопа</button>
            <button onClick={resetTimer}>Обнуление</button>
        </div>
    )
}

export function TimeNotifier () {
    const [time, setTime] = useState(new Date());
    const isFirstFlaf = useRef(true);
    const [wasUpdated, setWasUpdated] = useState(false);


    useEffect(() => {
        if(!wasUpdated) {
            return;
        }
        alert(`Новое время: ${time.toLocaleTimeString('ru-RU')}`);
    }, [time,wasUpdated])

    const updateTime = () => {
        setTime(new Date());
        setWasUpdated(true)
    }

    return (
        <div>
            {time.toLocaleTimeString('ru-RU')}
            <button onClick={updateTime}>Обновить</button>
        </div>
    )
}


export function CountdownTimer ({startTime}) {
    const [restTime, setRestTime] = useState(startTime);
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (!isActive) return;

        if (restTime <= 0) {
            setIsActive(false);
            alert('Время вышло');
            return;
        }

        const id = setInterval(() => {
            setRestTime(prev => prev - 1);
        }, 1000);

        return () => clearInterval(id);
    }, [isActive, restTime]);

    const resetTimer = () => {
        setIsActive(false);
        setRestTime(startTime);
    }

    const minute = Math.floor(restTime / 60);
    const second = restTime % 60;
    return (
        <div>
            {minute},
            {second}
            <button onClick={() => setIsActive(true)}>Старт</button>
            <button onClick={() => setIsActive(false)}>Стоп</button>
            <button onClick={resetTimer}>Сброс</button>
        </div>
    )
}

export function UserFormTwo() {
    const [useForm, setUseForm] = useState({name: '', email: '', message: ''})
    const [error, setError] = useState('')
    const handleForm = (e) => {
        const {name , value} = e.target;

        setUseForm({
            ...useForm,
            [name]: value,
        })
        if (error) {
            setError('');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
          useForm.name.length < 1 ||
          useForm.email.length < 1 ||
          useForm.message.length < 1
        ) {
          setError('Введите все поля формы');
          return;
        }

        if (!useForm.email.includes('@')) {
          setError('Введите корректный email');
          return;
        }

        setError('');

        console.log(useForm);

        setUseForm({
          name: '',
          email: '',
          message: '',
        });
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={handleForm} name={'name'} value={useForm.name} type="text"/>
                <input onChange={handleForm} name={'email'} value={useForm.email} type="email"/>
                <textarea onChange={handleForm} value={useForm.message} name={'message'} />
                <button type={'submit'}>Отправить</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}

export function AutoSaveForm() {
    const [useFormAuto, setUseFormAuto] = useState( () => {
        const savedForm = localStorage.getItem('autoSaveForm');

        return savedForm ? JSON.parse(savedForm) : {name: '', email: ''};
    })


    const handleFormThree = (e) => {
        const {name, value} = e.target;
        setUseFormAuto(prev => ({...prev, [name]: value}));
    }

    useEffect(() => {
        const isEmpitiForm = !useFormAuto.name && !useFormAuto.email;

        if(isEmpitiForm) {
            return
        }

        const id = setInterval(() => {
            localStorage.setItem('autoSaveForm', JSON.stringify(useFormAuto));
        }, 5000)

        return () => clearInterval(id);
    }, [useFormAuto])

    const onSubmit = (e) => {
        e.preventDefault();

        setUseFormAuto({ name: '', email: ''})
        localStorage.removeItem('autoSaveForm');
    }

    return (

        <div>
            <form action="" onSubmit={onSubmit}>
                <input onChange={handleFormThree} name={'name'} value={useFormAuto.name} type="text"/>
                <input onChange={handleFormThree} name={'email'} value={useFormAuto.email} type="email"/>
                <button type={'submit'}>Отправить</button>
            </form>
        </div>
    )
}

export function UserFilter() {
    const initialUsers = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
      { id: 4, name: 'David' },
    ];

    const [users, setUsers] = useState(initialUsers);
    const [filteredUsers, setFilteredUsers] = useState(initialUsers);
    const inputOne = useRef(null);



    const filterArray = (e) => {
        setUseForm({...useForm, name: e.target.value});
        const filteredUsers = users.filter((user) => {
            return user.name.toLowerCase().includes(inputOne.current.value.toLowerCase());
        });
        setFilteredUsers(filteredUsers)
    }

    useEffect(() => {
        const input = inputOne.current;

        input.addEventListener('input ', filterArray)
            return () => input.removeEventListener('input', filterArray);
        ;
    })

    return (
        <div>
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <input type="text" ref={inputOne}/>
        </div>
    )

}