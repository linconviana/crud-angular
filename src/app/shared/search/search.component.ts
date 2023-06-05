import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListagemComponent } from 'src/app/pages/listagem/listagem.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() public emitSearch: EventEmitter<string> = new EventEmitter();
  @Output() public emitSize: EventEmitter<number> = new EventEmitter();
  
  formulario!: FormGroup;
  public registros: any[] = [];
  
  public search(value: string){
    this.emitSearch.emit(value);
  }

  constructor(
    private formBuilder: FormBuilder,
    public listagemComponent: ListagemComponent
  ) {}

  ngOnInit() {
    this.registros = [
      {name:'2', size:'2'},
      {name:'4', size:'4'},
      {name:'6', size:'6'},
      {name:'10', size:'10'},
      {name:'25', size:'25'}
    ];

    this.formulario = this.formBuilder.group({
      size: [4]
    });
  }
 
  public onChange(){
    this.listagemComponent.setSize(this.formulario.value.size, this.listagemComponent.page);
  }
}
