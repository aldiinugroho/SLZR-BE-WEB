const axios = require("axios");
const secretKey = require("../constant/secretkey");

class CustomAxiosAdminService {
  mainUrl = secretKey.URL_SERVICE_ADMIN
  mainToken = `Bearer ${secretKey.TOKEN_SERVICE_ADMIN}`
  constructor(){}

  async handler(result,error = null) {
    try {
      if (error !== null) throw error
      if (result.status >= 200 && result.status <= 299) {
        return result.data.data
      } else if (result.status >= 300 && result.status <= 399) {
        throw "Error response status 3xx"
      } else if (result.status >= 400 && result.status <= 499) {
        throw "Error response status 4xx"
      } else if (result.status >= 500 && result.status <= 599) {
        throw "Error response status 5xx"
      } else {
        throw "Error unknown response status"
      }
    } catch (error) {
      return error?.message
    }
  }

  async GET(path = "") {
    try {
      const options = {
        method: 'get',
        url: `${this.mainUrl}${path}`,
        headers: {
          'content-type': 'application/json',
          'Authorization': this.mainToken
        },
      }
      const result = await axios(options);
      const parsedresult = await this.handler(result)
      return parsedresult
    } catch (error) {
      const parsedresult = await this.handler("",error)
      throw parsedresult
    }
  }

  async POST() {
  }

  async DELETE() {
  }

  async PUT() {
  }

  async PATCH() {
  }

}

module.exports = CustomAxiosAdminService