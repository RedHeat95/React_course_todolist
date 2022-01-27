import { Button } from "../Button/Button";

interface IProps {
    text: string;
    completed: boolean;
    onDelete: () => void;
    onComplete: () => void;
}

export const TodoItem = ({text, completed, onDelete, onComplete}: IProps) => {
    return ( 
        <div style={{ display: "flex" }}>
            <Button text="&#10003;" onClick={onComplete}/>
            <p style={{ textDecoration: completed ? "line-through" : "none" }}>{text}</p>
            <Button text="x" onClick={onDelete}/>
        </div>
    );
};