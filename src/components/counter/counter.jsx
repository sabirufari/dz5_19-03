import { useState } from 'react';
import styles from './counter.module.css'


function Counter() {
    const [count, setCount] = useState(0)

    const incr = () => {
        setCount(count + 1)
    }

    const decr = () => {
        setCount(count - 1)
    }

    return (
        <div className={styles.container}>
            <button onClick={decr}>-</button>
            <div className={styles.counter}>{count}</div>
            <button onClick={incr}>+</button>
        </div>
    )
}

export default Counter;