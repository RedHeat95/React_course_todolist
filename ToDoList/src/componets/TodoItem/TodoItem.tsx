import { useState } from "react";
import styles from "./TodoItem.module.css";
import { Button } from "../Button/Button";

interface IProps {
    text: string;
    time: string;
    completed: boolean;
    onDelete: () => void;
    onComplete: () => void;
}

export const TodoItem = ({text, time, completed, onDelete, onComplete }: IProps) => {

    const [showTime, setShowTime]  = useState(false);

    const toggleShowTime = () => {
        setShowTime(!showTime)
    }
    return ( 
        <div className={styles.todoItem}>
            <Button text="&#10003;" onClick={onComplete}/>
            <p 
                style={{ 
                    width: "100%", 
                    textDecoration: completed ? "line-through" : "none" }} 
                    onClick={toggleShowTime}
            >
                {text} 
                {showTime ? <p>{time}</p> : null}
            </p>
            <Button text="X" onClick={onDelete}/>
        </div>
    );
};