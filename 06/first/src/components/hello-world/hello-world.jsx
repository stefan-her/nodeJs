
import PropTypes from "prop-types";
import styles from "./hello-world.module.css";

// Composant React
function HelloWorld({firstname, lastname, gender}) {
    return (
        <div>
            <h1 className={styles.title}>Bonjour</h1>
            <h2>{firstname} {lastname} {gender}</h2>
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