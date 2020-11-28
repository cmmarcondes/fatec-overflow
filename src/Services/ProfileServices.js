import api from "../Api";

class ProfileService {
  constructor() {
    throw new Error("Esta classe não pode ser instanciada");
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
}
export default ProfileService;