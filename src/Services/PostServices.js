import api from "../Api";

class PostService {
  constructor() {
    throw new Error("Esta classe não pode ser instanciada");
  }

  static getPosts(data) {
    return new Promise((resolve, reject) => {
      api
        .get(`/posts`, data)
        .then((data) => {
          resolve(data);
        })
        .catch((data) => {
          reject(data);
        });
    });
  }

  static add_post(data){
    return new Promise((resolve, reject)=>{
      api
      .post(`/posts`, data)
      .then((data)=>{
        resolve(data);
      })
      .catch((data)=>{
        reject(data);
      })
    })
  }

  static get_post_details(data, id_post){
    return new Promise((resolve, reject)=>{
      api
      .get(`/posts/${id_post}`, data)
      .then((data)=>{
        resolve(data);
      })
      .catch((data)=>{
        reject(data);
      })
    })
  }
}
export default PostService;