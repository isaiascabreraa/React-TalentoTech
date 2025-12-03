import { useState } from "react"

export const Count = ({ btnText, onConfirm }) => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount((prev) => prev + 1)
    }

    const decrease = () => {
        setCount((prev) => prev > 0 ? prev - 1 : 0)
    }

    const confirm = () => {
        if(count > 0){
            onConfirm(count);
        }
    }

    return(
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                 <button onClick={decrease} disabled={count === 0}>-</button>
                    <span>{count}</span>
                <button onClick={increase}>+</button>
            </div>
            
            <button onClick={confirm} disabled={count === 0}>{btnText}</button>
        </div>
    )
}