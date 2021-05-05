import axios from "axios";

export class BikeService {
  //baseURL = "http://localhost:8080";
  baseURL = "https://electryride-back.herokuapp.com";
  urlEXT = "/bikes";

  header = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": this.baseURL,
    },
  };

  register(bike) {
    return axios.post(this.baseURL + this.urlEXT + "/", bike, this.header).then((res) => res.data);
  }

  findAll() {
    return axios.get(this.baseURL + this.urlEXT + "/", this.header).then((res) => res.data);
  }

  findOne(id) {
    return axios.get(this.baseURL + this.urlEXT + "/" + id, this.header).then((res) => res.data);
  }

  update(id) {
    return axios.get(this.baseURL + this.urlEXT + "/update/" + id, this.header).then((res) => res.data);
  }
}
