import { Component } from '@angular/core';
import { ComentarioService } from '../../servicios/comentario.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  comentarios: any[] =[{
    nombre: "Laura Ortega",
    comentario: "Primer comentario"
  },{
    nombre: "Arthuro Dugarte",
    comentario: "Segundo Comentario"
  }]

  nombre: any;
  comentario: any;


  agregarComentario() {

    let comentarioAux = {
      nombre: this.nombre,
      alias: `@${this.nombre}`,
      comentario: this.comentario
    }
    this.comentarios.push(comentarioAux);
    this.comentario = "";
    this.nombre = "";
  }


  eliminar(indice: any) {
    this.comentarios.splice(indice, 1);
  }



}
