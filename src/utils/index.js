import axios  from "axios"
//请求拦截器
const instance = axios.create({
    baseURL:"https://baojia.chelun.com",
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
//响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
    // return response;
    if(response.status==200){
        return response.data;
    }else{
        this.$ontify({
            type:"waring",
            message:response.text
        })
    }
  }, function (error) {
    // Do something with response error
    this.$ontify({
        type:"waring",
        message:error
    })
    return Promise.reject(error);
  });

  export default instance