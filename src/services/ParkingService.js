import axios from "axios";

export class ParkingService {
  baseURL = "http://localhost:8080";
  //baseURL = "https://electryride-back.herokuapp.com";
  urlEXT = "/api/bikes/";

  header = {
    headers: {
      "Authorization": 'Bearer ' + localStorage.getItem('token'),
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": this.baseURL,
    },
  };
  
  register(bike) {    
    return axios.post(this.baseURL + this.urlEXT + "register", bike, this.header).then((res) => res.data);      
  }

  findAll() {    
    return axios.get(this.baseURL+this.urlEXT+"parkings", this.header).then((res) => res.data);   
  }  

  update(id) {    
    return axios.get(this.baseURL + this.urlEXT + "parking/" + id, this.header).then((res) => res.data);
  }
  
}
