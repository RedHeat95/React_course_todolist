import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

interface IProps {
    text: string;
    setText: () => void;
    addNewTodo: () => void;
}

export const Form = ({ text, setText, addNewTodo }: IProps) => {

    

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.vulue);
    }

    const handelSabmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
    }

    return (
        <div>
            <div onSubmit={handelSabmit}>
                <Input 
                    value={text}
                    onChange={handleChange}
                />
            </div>
            <div>
                <Button text="Добавить" onClick={addNewTodo} />
            </div>
        </div>
    );
};