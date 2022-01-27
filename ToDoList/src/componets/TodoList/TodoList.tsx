import { useState } from "react";
import { Form } from "../Form/Form";
import { TodoItem } from "../TodoItem/TodoItem";

const defaultTodos = [
    { id: "000", text: "First todo", completed: false },
    { id: "001", text: "Second todo", completed: true },
];

export const TodoList = () => {

    const [text, setText] = useState("");

    const [todos, setTodos] = useState(defaultTodos);

    const onClickDelete = (id: string) => {
        setTodos([...todos.filter((todo) => todo.id !== id)]);    
    };

    const onClickComplete = (id: string) => {
        setTodos([
            ...todos.map((todo) => 
                todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
            )
         ]);        
    };

    const addNewTodo = (text: string) => {
        if (text) {
            const newItem = {
                id: Math.random().toString(36),
                task: text,
                complete: false,
            }
        };
    };

    return (
        <div
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
            <Form 
                addNewTodo={addNewTodo} 
            />
            {todos.map((item) => {
                return (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        onDelete={() => onClickDelete(item.id)}
                        onComplete={() => onClickComplete(item.id)}
                        completed={item.completed}
                    />
                );
            })}
        </div>
    );
};