import axios from 'axios'
const url = 'https://ccl.art-framework.com/Blog/index'
let request = (params,url) => {
  axios({
    method: 'post',
    url: url,
    data:params.query || {},
    headers: {
      'Content-Type': 'application/json'
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
  request(params,url+'/classify')
}
const classifyPage = params => {
  request(params,url+'/classifyPage')
}
const article = params => {
  request(params,url+'/article')
}
export default{
  Top,
  Banner,
  indexPage,
  classify,
  classifyPage,
  article
}
