
/**
 * Fonction de formatage 
 * @param {number} value 
 * @returns 
 */
function formatBe(value) {

    return value.toLocaleString('fr-be', {
        style: "currency",
        currency: "EUR"
    });
}

module.exports = {
    formatBe
}