import styles from './todoitem.module.css';


export default function TodoItem({item, todos, setTodos}) {

    const handleDelete = (item) => {
        setTodos(todos.filter((todo) => item !== todo.name));
    }

    const handleClick = (name) => {
        const newTodos = todos.map((todo) => name === todo.name ? {...todo, done: !todo.done}: todo);
        setTodos(newTodos);
    }
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span className={item.done? styles.completed: ""} onClick={() => handleClick(item.name)}>
                    {item.name}
                </span>
                
                <span>
                    <button onClick={() => handleDelete(item.name)} className={styles.deleteButton}>x</button>
                </span>
            </div>
        </div>
    )
}