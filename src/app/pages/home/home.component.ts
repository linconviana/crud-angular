import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  formulario!: FormGroup;

  public paginas: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.paginas = [
      {name:'Home', path:'/'},
      {name:'Cadastro', path:'/cadastro'},
      {name:'Listagem', path:'/listagem'},
      {name:'Graficos', path:'/chart'}
    ];

    this.formulario = this.formBuilder.group({
      pagina: [null]
    });
  }
  onChange(){
    window.location.href = this.formulario.value.pagina;
  }
}
