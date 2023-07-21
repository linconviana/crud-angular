import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { estadosLista } from 'src/app/utils/estados';
import { validarFormulario } from 'src/app/utils/validaFormulario';
import { getConsultaCep } from 'src/app/utils/viaCep';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  ///https://www.devmedia.com.br/angular-http-como-realizar-requisicoes-em-suas-aplicacoes/40642
  //https://github.com/felipefdl/cidades-estados-brasil-json
  formulario!: FormGroup;
  /// :: mude "strict": true,para "strict": false,tsconfig.json

  public btnText: string;

  public estados: any[] = estadosLista;

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private activatedRoute: ActivatedRoute,
  ) {}
  
  ngOnInit() {

    /*this.estados = [
      {name:'São Paulo', sigla:'SP'},
      {name:'Minas Gerais', sigla:'/MG'},
      {name:'Espirito Santo', sigla:'/ES'},
      {name:'Rio de Janeiro', sigla:'/RJ'}
    ];*/

    this.btnText = 'Salvar';
    const id = this.activatedRoute.snapshot.params['id'];
    
    this.formulario = this.formBuilder.group({
      id: [null],
      razaoSocial: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      email: [null, [Validators.required, Validators.email]],
      //email: id === undefined ? [null] : {value: null, disabled: true},
      cnpj: [null],
      estado: [null],
      //estado: ['SP'],
      cep: [null, [Validators.required, Validators.minLength(8)]],
      logradouro: [null],
      bairro: [null],
      cidade: [null],
      notificacao: [false],
      sexo: ['masculino']
    });

    this.getEmpresaById();
  }

  public getEmpresaById(){

    const id = this.activatedRoute.snapshot.params['id'];

    if(id !== undefined){
      const url = `http://localhost:8080/empresa/${id}`;
      this.service.get(url)
      .subscribe(
        (data: any) => {
          this.btnText = 'Atualizar';

          this.formulario.get('id').setValue(data.id);
          this.formulario.get('razaoSocial').setValue(data.razaoSocial);
          //this.formulario.get('email').disable();
          this.formulario.get('email').setValue(data.email);
          this.formulario.get('cnpj').setValue(data.cnpj);
        }   
      );
    }
  }

  public onChange(){
    //https://www.youtube.com/watch?v=MSre76NELHQ&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=101
    /// :: popular select com estados
    this.formulario.get('estado').setValue(this.formulario.value.estado);

    ///https://www.youtube.com/watch?v=53S4LlPLwrI  -mascaras ng-mask
    //https://pt.stackoverflow.com/questions/425339/mascara-cpf-cnpj-angular-8-ng-mask
  }

  public changeRadio(sexo: string){
    this.formulario.get('sexo').setValue(sexo);
  }

  public consultaCep(){
    
    /*let cep = this.formulario.get('cep').value;

    cep = cep.replace(/\D/g, '');

    if(cep != ''){

      var validaCep = /^[0-9]{8}$/;

      if(validaCep.test(cep)){

        this.resetDadosForm();

        const url = `https://viacep.com.br/ws/${cep}/json/`;
        this.service.get(url)
        .subscribe(data => this.populaDadosForm(data));
      }
    }*/
    getConsultaCep(this.formulario, this.service);
  }

  /*resetDadosForm(){

    this.formulario.patchValue({
      logradouro: null,
      bairro: null,
      cidade: null,
    })
  }*/

  /*populaDadosForm(cepDados){

    this.formulario.patchValue({
      logradouro: cepDados.logradouro,
      bairro: cepDados.bairro,
      cidade: cepDados.localidade,
    })
  }*/

  onSubmit() {

    debugger
    if(this.formulario.valid){

      const id = this.activatedRoute.snapshot.params['id'];
      let url = 'http://localhost:8080/empresa';
      const data = JSON.stringify(this.formulario.value);

      if(id === undefined){
        this.service.post(url, data)
        .subscribe(
          (data: any) => {
            alert('Salvou Empresa:' + data.razaoSocial)
            this.resetarForm();
          }   
        );
      }
      else{
        url = url + `/${id}`;
        this.service.update(url, data)
        .subscribe(
          (data: any) => {
            alert('Atualizou Empresa:' + data.razaoSocial)
            this.resetarForm();
            window.location.href = '/listagem';
          }   
        );
      }
    }
    else{
      validarFormulario(this.formulario);
      //this.validarFormulario();
    }
  }

  resetarForm(){
    this.formulario.reset();
  }

  validar(value:string){
    if(this.formulario.get(value).value !== null)
      validarFormulario(this.formulario);
      //this.validarFormulario();
  }

  /*validarFormulario(){

    Object.keys(this.formulario.controls).forEach(campo => {

      let labelError = document.getElementsByClassName(`label-${campo}`) as HTMLCollectionOf<any>;
      let inputError = document.getElementsByClassName(`input-${campo}`) as HTMLCollectionOf<any>;
      let divError = document.getElementsByClassName(`error-input-${campo}`) as HTMLCollectionOf<any>;
      const controle = this.formulario.get(campo);
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
  }*/

  /// :: https://www.youtube.com/watch?v=53S4LlPLwrI
  /// :: https://pt.stackoverflow.com/questions/425339/mascara-cpf-cnpj-angular-8-ng-mask
  /// :: https://github.com/frontendbr/forum/issues/1569
  /// :: https://github.com/JsDaddy/ngx-mask
  /// :: https://jsdaddy.github.io/ngx-mask/#4
  /// :: npm install --save ngx-mask

  /// :: https://www.npmjs.com/package/angular-input-masks
  /// :: https://www.youtube.com/watch?v=kKk1WurbyVs&t=32s
  /// :: https://github.com/assisrafael/angular-input-masks
  /// :: https://github.com/renato/bower-angular-locale-pt-br
  /// :: npm install --save angular-input-masks
  /// :: https://assisrafael.github.io/angular-input-masks/

  /// :: https://www.youtube.com/watch?v=Ncw_tMn64Iw
  isCPF(): boolean{
    debugger
    let cnpj = this.formulario.get('cnpj').value;
    return cnpj == null ? true : cnpj.length < 12 ? true : false;
  }
 
  public getCpfCnpjMask(): string{
    debugger
    return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
  }
}
