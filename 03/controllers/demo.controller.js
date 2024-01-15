const { MESSAGE } = process.env;


export const getMessage = (req, res) => {
    res.json({
        message: process.env.MESSAGE
    })
}

export const getMessageById = (req, res) => {
    const id = req.params.id;
    res.json({
        "message": `Message avec ${id} -> ${MESSAGE}`
    })
};

export const getMessageByName = (req, res) => {
    const name = req.params.name;
    res.json({
        "message": `Message avec ${name} -> ${MESSAGE}`
    })
};

export const getDanger = (req, res) => {
    throw new Error("Boum....");
};



