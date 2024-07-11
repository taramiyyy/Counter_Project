import PropTypes from "prop-types"
import styles from "../App.module.css"
const Counter = ({Add, Remove, Reset, count}) =>{
    return(
        <div>
            <h2>{count}</h2>
            <button className={styles.btn} onClick={Add}>Add Number</button>
            <button className={styles.btn} onClick={Remove} disabled={count===0} style={count===0 ? {background:'red'}: {}}>Remove Number</button>
            <button className={styles.btn} onClick={Reset}>Reset Number</button>
        </div>
    )
}
Counter.propTypes={
    inc: PropTypes.func,
    dec: PropTypes.func,
    reset: PropTypes.func,
    count: PropTypes.number
}
export default Counter