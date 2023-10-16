const CustomAxiosAdminService = require("../../utils/customaxiosadminservice")

const car = {
  list: async (reqData = 0) => {
    try {
      const result = await new CustomAxiosAdminService().GET(`/outbound/lzrauto/list-car/${reqData}`)
      return result
    } catch (error) {
      throw error
    }
  },
  detail: async (reqData = "") => {
    try {
      const result = await new CustomAxiosAdminService().GET(`/outbound/lzrauto/detail-car/${reqData}`)
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = car