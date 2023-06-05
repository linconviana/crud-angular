import { FormGroup } from "@angular/forms";
import { ServiceService } from 'src/app/services/service.service';


export const getConsultaCep = (formulario: FormGroup, service: ServiceService) => {
    
    let cep = formulario.get('cep').value;

    cep = cep.replace(/\D/g, '');

    if(cep != ''){

      var validaCep = /^[0-9]{8}$/;

      if(validaCep.test(cep)){

        resetDadosForm(formulario);

        const url = `https://viacep.com.br/ws/${cep}/json/`;
        service.get(url)
        .subscribe(data => populaDadosForm(data, formulario));
      }
    }
}

const resetDadosForm = (formulario: FormGroup) =>{

    formulario.patchValue({
      logradouro: null,
      bairro: null,
      cidade: null,
    })
}

const populaDadosForm = (cepDados: any, formulario: FormGroup) =>{

    formulario.patchValue({
      logradouro: cepDados.logradouro,
      bairro: cepDados.bairro,
      cidade: cepDados.localidade,
    })
}