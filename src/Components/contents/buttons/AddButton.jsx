import React, { useCallback } from 'react';
import { Button } from '../../../Styles/styles';
import PostService from '../../../Services/service'
import swal from 'sweetalert2';

const AddButton = () => {

  const set_ask = useCallback(async(title, body) => {
    const data = {
      "id_usuario": 1,
      "title": title,
      "body": body
    };
    await PostService.add_post(data);
  }, [])

  const OpenSwal = () => {
    swal.fire({
      title: 'Dê um título para seu post',
      input: 'text',
      showCancelButton: true,
      inputValidator: (value)=> {
        if(!value) {
          return 'Ops, parece que você não digitou nada'
        }
      }
    }).then((title)=>{
      swal.fire({
        title: 'Explique-nos com mais detalhes o que está ocorrendo',
        input: 'textarea',
        showCancelButton: true,
        inputValidator: (value)=> {
          if(!value){
            return 'Ops, parece que você não digitou nada'
          }
        }
      }).then((body) => {
        set_ask(title.value, body.value)
      })
    })
  }
    return(
      <Button onClick={()=> OpenSwal()}>+</Button>
    );
}

export default AddButton;