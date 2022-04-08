
const car = require('../../public/car.json')

module.exports = {
    index: (req, res) => {
        const locals = {
            data: {
                posts: car
            },
            contentName: 'Post'
        }
        res.render('cars', locals)
    }
}