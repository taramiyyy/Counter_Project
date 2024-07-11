
import { useState } from "react";
import Counter from "./Component/Counter";
import styles from "./App.module.css"


const App = () => {
    const [count, setCount] = useState(0);

    const AddCount = () => {
        setCount(count + 1)
    }

    const RemoveCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const ResetCount = () => {
        setCount(0)
    }


    return (
        <div className={styles.App}>
            <h1>Your Number</h1>
            <Counter Add={AddCount} Remove={RemoveCount} Reset={ResetCount} count={count} />
        </div>
    )
}

export default App;

