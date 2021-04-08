import axios from "axios";

export class UserService {
  baseURL = "https://electryride-back.herokuapp.com";
  urlEXT = "/users/";

  header = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": this.baseURL,
    },
  };
  
  register(user) {    
    return axios.post(this.baseURL + this.urlEXT + "register", user, this.header).then((res) => res.data);      
  }

  findAll() {    
    return axios.get(this.baseURL+this.urlEXT, this.header).then((res) => res.data);   
  }
  
}
