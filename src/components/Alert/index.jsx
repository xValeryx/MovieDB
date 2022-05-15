
import styles from "./styles.module.scss";

function Alert({ closeFunction, isVisible, text, color }) {

    return (<>
        {isVisible && (
            <div className={styles.Alert}>
                <div className={`AlertBox ${color}` }>
                <button classname={styles.closeBtn}onClick={closeFunction}>x</button>
                <h3>{text}</h3>
                </div>
            </div>
        )}
    </>
    );
}

export default Alert;

