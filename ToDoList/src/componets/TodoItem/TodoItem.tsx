import { useState } from "react";
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
        <div style={{ display: "flex", position: "relative"}}>
            <Button text="&#10003;" onClick={onComplete}/>
            <p style={{ textDecoration: completed ? "line-through" : "none" }} onClick={toggleShowTime}>{text} {showTime ? <p>{time}</p> : null}</p>
            <Button text="X" onClick={onDelete}/>
        </div>
    );
};