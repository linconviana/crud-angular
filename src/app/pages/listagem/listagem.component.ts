import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  
  //activatedRoute: any;
  
  private empresaId = null;
  private size: number = 4;
  public page: number = 0;

  public pageableEmpresa!: EmpresaPage;
  public getEmpresas: any[] = [];
  
  constructor(
    public service: ServiceService,
  ) {}
  
  ngOnInit() {
    this.getAllEmpresa(this.size, this.page);
  }

  getAllEmpresa(size: number, page: number){
    const url = `http://localhost:8080/empresa?size=${size}&page=${page}`;
    this.service.getAll(url).subscribe((result : any) => {
      debugger
      this.pageableEmpresa = result;
      this.getEmpresas = this.pageableEmpresa.content;
    });
  }

  deletarEmpresa(id: any){
    this.empresaId = id;
    const url = `http://localhost:8080/empresa/${this.empresaId}`;

    const resultado = window.confirm("Ao clicar em confirmar todas as informações sobre esta empresa serão excluídas. Tem certeza que deseja continuar?");
    if (resultado === true){     
      this.service.delete(url).subscribe(
        (data: any) => {
          alert('Apagou Empresa:')
          this.getEmpresas = this.pageableEmpresa.content.filter(x => x.id !== this.empresaId);
        }   
      );
    }
  }

  public getSearch(value: string){
    const filter = this.pageableEmpresa.content.filter((res: any) =>{
      return !res.razaoSocial.toLowerCase().indexOf(value.toLowerCase())
    })
    this.getEmpresas = filter;
  }

  public getPagination(pageNumber: number){
    this.page = pageNumber;
    this.getAllEmpresa(this.size, this.page);
  }

  public setSize(pageSize: number, pageNumber: number){
    this.size = pageSize;
    this.getAllEmpresa(pageSize, pageNumber);
  }
}

interface Empresa {
  id: number,
  razaoSocail: string,
  email: string,
  cnpj: string,
  users: []
}

interface EmpresaPage  {
  content?: Empresa[],
  totalPages: number,
  totalElements: number,
  last: boolean,
  size?: number,
  number: number,
  first: boolean,
  numberOfElements?: number,
  empty?: boolean
}