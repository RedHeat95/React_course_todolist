import React, { useState, ChangeEvent, FormEvent} from "react";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

interface IProps {
    addNewTodo: () => void;
}

export const Form = ({ addNewTodo }: IProps) => {
    const [textInput, setText] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // addNewTodo(textInput)
        setText("");
    }

    return (
        <div>
            <Input 
                value={textInput}
                onChange={handleChange}
            />
            <Button
                text="Добавить"
                onClick={addNewTodo}
            />
        </div>
    );
};