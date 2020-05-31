import axios from '../axios'

// 获取data
const getData = () => {
  return axios.get(`api/test`)
}

const hello = {
  getData,
}
export default hello
