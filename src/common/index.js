
const backendDomain ="http://localhost:8080";


 const SummaryApi = {
  SignUp: {
    url: `${backendDomain}/api/signUp`,
    method: "POST",
  },
  SignIn: {
    url: `${backendDomain}/api/signin`,
    method: "POST",
  },
  Current_user:{
    url: `${backendDomain}/api/user-details`,
    method: "GET",
  },
  logout_user :{
    url:`${backendDomain}/api/userLogout`,
    method : "GET",
   
  },
  allUser : {
    url:`${backendDomain}/api/all-user`, 
    method : "GET",         
  },


updateUser : {
  url:`${backendDomain}/api/update-user`, 
  method : "POST",

},


uploadProduct :{
  url:`${backendDomain}/api/upload-product`, 
  method : "POST",

},


getproduct :{
  url:`${backendDomain}/api/get-product`, 
  method : "GET",

}



 };


export default SummaryApi;