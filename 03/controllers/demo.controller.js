const { MESSAGE} = process.env;

const demoController = {

    getMessage : (req, res) => {
        res.json({
            message: process.env.MESSAGE
        })
    },

    getMessageById : (req, res) => {
        const id = req.params.id;
        res.json({
            "message" : `Message avec ${id} -> ${MESSAGE}`
        })
    },
    
    getMessageByName : (req, res) => {
        const name = req.params.name;
        res.json({
            "message" : `Message avec ${name} -> ${MESSAGE}`
        })
    }
}

module.exports = demoController;


