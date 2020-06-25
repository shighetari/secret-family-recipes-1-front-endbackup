import axios from "axios"

export const axiosWithAuth = () => {
  //getting token from local storage
  const token = window.localStorage.getItem('token')
  //create a new "instance" of axios with the config object built into it
  return axios.create({
    //sending request to server via function authenticator(req, res, next) for auth token
    headers: { authorization: token },
    baseURL: 'https://recipes-bw.herokuapp.com/'
    // baseURL: 'https://secret-family-recipes-1.herokuapp.com/'
  })
}
//end points 
/* 
Login: api/auth/login
Signup: api/auth/register
*/