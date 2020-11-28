import api from "../Api";

class PostService {
  constructor() {
    throw new Error("Esta classe não pode ser instanciada");
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
}

export default PostService;