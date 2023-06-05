import { FormGroup } from "@angular/forms";

export const validarFormulario = (formulario: FormGroup) =>{

    Object.keys(formulario.controls).forEach(campo => {

        let labelError = document.getElementsByClassName(`label-${campo}`) as HTMLCollectionOf<any>;
        let inputError = document.getElementsByClassName(`input-${campo}`) as HTMLCollectionOf<any>;
        let divError = document.getElementsByClassName(`error-input-${campo}`) as HTMLCollectionOf<any>;
        const controle = formulario.get(campo);
        debugger
        if(!controle.valid){
          labelError[0].classList.add('label-error')
          inputError[0].classList.add('input-error');
          divError[0].classList.remove(`error-hidden`);
        }
        else{
          if(labelError.length > 0){
            if(labelError[0].classList.contains('label-error'))
              labelError[0].classList.remove('label-error')
          }
          if(inputError.length > 0){
            if(inputError[0].classList.contains('input-error'))
              inputError[0].classList.remove('input-error')
          }
          if(divError.length > 0){
            if(!divError[0].classList.contains('input-error'))
              divError[0].classList.add('error-hidden')
          }
        }
    })
}