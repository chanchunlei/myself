import axios from 'axios'
const url = 'http://mojiu.com/Blog/index/'
let request = (params,url) => {
  axios({
    method: 'post',
    url: url,
    data:params.query || {},
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(function(res){
      params.success && params.success(res)
      // console.log(res)
    })
    .catch(function(err){
      //console.log(err)
    })
}

const Top = params => {
  request(params,url+'/indexNav')
}
const Banner = params => {
  request(params,url+'/index')
}
const indexPage = params => {
  request(params,url+'/paping')
}
const classify = params => {
  request(params,url+'classify')
}
export default{
  Top,
  Banner,
  indexPage,
  classify
}
