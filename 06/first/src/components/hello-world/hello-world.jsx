
import PropTypes from "prop-types";
import styles from "./hello-world.module.css";
import clsx from 'clsx';

// Composant React
function HelloWorld({firstname, lastname, gender}) {

    let prefix;
    switch(gender) {
        case "X" : prefix = "Madame"
        break;
        case "Y" : prefix = "Monsieur"
        break;
        default : prefix = "Heuuu"
    }

    const clsWelcome = clsx({
        [styles.welcome]: true,
        [styles.x]: gender === "X",
        [styles.y]: gender === "Y"
    }); 


    return (
        <div>
            {/* <h1 className={styles.title}>Bonjour</h1> */}
            <h1 className={clsWelcome}>Bonjour</h1>
            <h2>{prefix} {firstname} {lastname}</h2>
            <p>Welcome on the first React project</p>
        </div>
    );
}

// Valeur par défaut (Optionnel)
HelloWorld.defaultProps = {
    gender: "X"
}

HelloWorld.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    gender: PropTypes.oneOf(['X', 'Y'])
}

export default HelloWorld