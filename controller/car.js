const { Response } = require("../response")
const reqCar = require('../business/car')

const car = {
    list: async (req, res) => {
        try {
            const result = await reqCar.list(req.params?.offset)
            new Response().success(res,result)
        } catch (error) {
            new Response().fail(res,error)
        }
    },
    detail: async (req, res) => {
        try {
            const result = await reqCar.detail(req.params?.carId)
            new Response().success(res,result)
        } catch (error) {
            new Response().fail(res,error)
        }
    },
}

module.exports = car
