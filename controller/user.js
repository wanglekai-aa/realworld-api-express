exports.login = async (req, res, next) => {
    try {
        res.send('post / User login test...')
    } catch (err) {
        next(err)
    }
}
// Registration
exports.register =  async (req, res, next) => {
    try {
        res.send('POST /api/users Registration ...')
    } catch (err) {
        next(err)
    }
}
exports.update = async (req, res, next) => {
    try {
        res.send('put / Update User ... ')
    } catch (err) {
        next(err)
    }
}
exports.getCur = async (req, res, next) => {
    try {
        res.send('Get Current User')
    } catch (err) {
        next(err)
    }
}
