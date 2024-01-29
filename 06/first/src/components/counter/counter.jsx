import { useState } from "react";


function counter() {

    // Utilisation du hook d'état pour creér un state
    const [count, setCount] = useState(0);

    const handleIncremant = function() {
        setCount(count => count + 1);
    }

    const reset = function() {
        setCount(0);
    }

    return (
        <>
        <p>Compteur : { count }</p>
        <div>
            <button onClick={handleIncremant}> +1</button>
            <button onClick={reset}>Reset</button>
        </div>
        </>
    );
}

export default counter;