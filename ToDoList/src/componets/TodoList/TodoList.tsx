import { useState } from "react";
import { Form } from "../Form/Form";
import { TodoItem } from "../TodoItem/TodoItem";

interface ITodoItem {
    id: string;
    text: string;
    time: string;
    completed: boolean;
}

export const TodoList = () => {
    const [text, setText] = useState<string>("");

    const [todos, setTodos] = useState<ITodoItem[]>([]);
    
    const addNewTodo = () => {
        if (text !== "") {
            const date = new Date();
            const newTodo = {
                id: "id" + Math.random().toString(16).slice(2),
                text: text,
                completed: false,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            };    
            const newTodos = [...todos, newTodo];
    
            setTodos(newTodos);
    
            setText("")

        } else {
            alert("Введите что-нибудь")
        }        
    };

    const onClickComplete = (id: string) => {
        const newTodos = todos.map(item => {
            if (item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        });
        setTodos(newTodos);
    };

    const onClickDelete = (id: string) => {
        setTodos([...todos.filter((todo) => todo.id !== id)]);    
    };
    
    return (
        <div
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
            <h1>ToDoList</h1>

            <Form
                addNewTodo={addNewTodo}
                text={text} 
                setText={setText}
            />

            {todos.length === 0 ? 
                <p>Начни уже делать что-нибудь</p> : 
                null
            }
            {todos.map((item) => {
                return (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        time={item.time}
                        completed={item.completed}
                        onDelete={() => onClickDelete(item.id)}
                        onComplete={() => onClickComplete(item.id)}
                    />
                );
            })}
            <p>Всего дел: {todos.length}</p>
            <p>Выполненые: {todos.reduce((prev, curr) => {
                    if (curr.completed) {
                        return prev + 1;
                    }
                    return prev;
                }, 0)}
            </p>
        </div>
    );
};