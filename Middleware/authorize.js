const authorize = (req, res, next) => {

    // using conditions in middleware
    const {user} = req.query;

    if(user === 'Abhay'){
        req.user = {name: 'Abhay', id: 3}
        next()
    }else{
        res.status(401).send('unauthorized')
    }

    // console.log('authorized');
    // next()
}

module.exports = authorize