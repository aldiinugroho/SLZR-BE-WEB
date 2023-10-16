// const Configpass = require("../../config/configpass");
// const { ModelRequestShowroomCreate } = require("../../models/request/showroom/create");
// const { ModelRequestShowroomDelete } = require("../../models/request/showroom/delete");
// const { ModelRequestShowroomDetail } = require("../../models/request/showroom/detail");
// const { ModelRequestShowroomUpdate } = require("../../models/request/showroom/update");
// const serviceShowroom = require("../../models/service/showroom")

// const create = async (reqData = new ModelRequestShowroomCreate({})) => {
//   try {
//     // insert db
//     await serviceShowroom.create(reqData)
//     // get new list
//     const result = await serviceShowroom.getAllByUserId(reqData.userId)
//     return result
//   } catch (error) {
//     throw error
//   }
// }