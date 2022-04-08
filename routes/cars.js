const router = require('express').Router()
const { cars } = require('../controllers')

router.get('/', cars.view)
// router.get('/create', car.create)
// router.post('/create/store', car.create_store)
// router.get('/update/:id', car.update)
// router.post('/update/store/:id', car.update_store)
// router.get('/delete/:id', car.destroy)

module.exports = router