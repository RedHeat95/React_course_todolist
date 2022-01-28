import { useState } from "react";
import { Form } from "../Form/Form";
import { TodoItem } from "../TodoItem/TodoItem";

const defaultTodos: any = [
    { id: "000", text: "First todo", completed: false },
    { id: "001", text: "Second todo", completed: true },
];

type Todo = {
    id: string;
    text: string;
    completed: boolean;
}
type AddNewTodo = (textInput: string) => void;

export const TodoList = () => {

    // const [textInput, setText] = useState<string>("");

    // const [todos, setTodos] = useState<Array<any>>([]);
    const [todos, setTodos] = useState(defaultTodos);

    const onClickDelete = (id: string) => {
        setTodos([...todos.filter((todo: any) => todo.id !== id)]);    
    };

    const onClickComplete = (id: string) => {
        setTodos([
            ...todos.map((todo: Todo) => 
              todo.id === id ? { ...todo, completed: !todo.completed } : {...todo }
            )
          ])
    };

    
    const addNewTodo: AddNewTodo = (textInput: string) => {
        if(textInput) {
            const newItem = {
              id: Math.random().toString(36),
              text: textInput,
              completed: false,
            }
            setTodos([...todos, newItem])
          }
    };    

    return (
        <div
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
            <Form
                addNewTodo={() => addNewTodo}
                
            />
            {todos.map((item: Todo) => {
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