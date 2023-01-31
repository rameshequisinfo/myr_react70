import Axios from 'axios'

const axiosInstance = Axios.create({
  baseURL: ''
})

axiosInstance.interceptors.request.use(
  async (req) => {
    console.log(`=> Request : ${req?.url} `, req)
    return req
  },
  (error) => {
    console.log('axios request error =>', error.response || error)
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  async (response) => {
    console.log(`<= Response : ${response?.config?.url} : Status - ${response?.status} `, response)
    return response
  },
  async (error) => {
    console.log(
      `<= ERROR Response : ${error?.response?.config?.url} : Status - ${error?.response?.status} `,
      error?.response
    )
    return Promise.reject(error)
  }
)

const getFormData = (object) => {
  const formData = new FormData()
  Object.keys(object).forEach((key) => formData.append(key, object[key]))
  return formData
}
const APICall = async (method = 'post', body, url = null, headers = null, formData = false) => {
  const config = {
    method: method.toLowerCase(),
    timeout: 1000 * 60 * 2
  }
  if (url) {
    config.url = url
  }
  if (body && method.toLowerCase() === 'get') {
    config.params = body
  } else if (body && method.toLowerCase() === 'post' && !formData) {
    config.data = body
  } else if (body && method.toLowerCase() === 'post' && formData) {
    config.data = getFormData(body)
  } else {
    config.data = body
  }
  if (headers) {
    config.headers = headers
  }

  return new Promise((resolve) => {
    axiosInstance(config)
      .then((res) => {
        resolve({ statusCode: res.status, data: res.data })
      })
      .catch((error) => {
        if (error.response) {
          resolve({ statusCode: error.response.status, data: error.response.data })
        }
        resolve({ statusCode: 500, data: 'Something went to wrong!' })
      })
  })
}

export default APICall
