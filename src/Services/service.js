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

  static getPerfil(data, id_usuario){
    return new Promise((resolve, reject)=>{
      api
      .get(`/perfil/${id_usuario}`, data)
      .then((data)=>{
        resolve(data);
      })
      .catch((data)=>{
        reject(data);
      })
    })
  }

  static getPerguntas(data, id_usuario){
    return new Promise((resolve, reject)=>{
      api
      .get(`/perguntas/${id_usuario}`, data)
      .then((data)=>{
        resolve(data);
      })
      .catch((data)=>{
        reject(data);
      })
    })
}

static getRespostas(data, id_usuario){
  return new Promise((resolve, reject)=>{
    api
    .get(`/respostas/${id_usuario}`, data)
    .then((data)=>{
      resolve(data);
    })
    .catch((data)=>{
      reject(data);
    })
  })
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
}

export default PostService;