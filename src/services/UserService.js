import axios from "axios";

export class UserService {
  baseURL = "http://localhost:8080";
  urlEXT = "/api/usuarios/";

  header = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": this.baseURL,
    },
  };
  
  register(user) {
    console.log("Header service:", this.header);
    console.log("URL : ",this.baseURL+this.urlEXT+"register");
    console.log("user register userService: ",user);
    return axios
      .post(this.baseURL + this.urlEXT + "register", user, this.header)
      .then((res) => res.data);      
  }

  findAll() {
    console.log("Header service:", this.header);
    console.log("URL : ",this.baseURL+this.urlEXT);
    return axios.get(this.baseURL+this.urlEXT, this.header).then((res) => res.data);
    /*
    const usx = axios.get(this.baseURL+this.urlEXT, this.header).then((res) => res.data);
    console.log("Usx: ",usx);
    return usx;
    */
  }

  update(product) {
    return axios
      .put(this.baseUrl + "product/" + product._id, product)
      .then((res) => res.data);
  }

  delete(id) {
    return axios.delete(this.baseUrl + "product/" + id).then((res) => res.data);
  }
}
