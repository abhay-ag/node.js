const getPeople = (req, res)=> {
    res.status(200).json({success: true, data: people})
}

const createPerson = (req, res) => {
    const {name} = req.body;

    if(!name){
        return res.status(400).json({success: false, msg: 'please provide a name'})
    }
    res.status(201).json({success: true, person: name})
}

const createPersonPostman = (req, res) => {
    const {name} = req.body

    if(!name){
        return res
            .status(400)
            .json({success: false, msg: 'Please provide a name'})
    }
    // joining the provided name and the old people array
    res.status(201).send({success: true, data: [...people, name]})
}