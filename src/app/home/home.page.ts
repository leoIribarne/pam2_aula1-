import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
horario:any ;
nome:string = "";
telefone:any;
curso: string = "";
hr :any;
nm :any; 
tell :any;
cs :any;
mensagem : any ;
esconder : boolean = false;
  constructor() {}
  
  salva(){
     this.hr = this.horario;
     this.nm = this.nome;
     this.tell = this.telefone;
     this.cs = this.curso;
     this.esconder = true;


  }
  esconde(){
    this.hr = "";
    this.nm = "";
    this.tell = "";
    this.cs = "";
    this.esconder = false;
  }


}
