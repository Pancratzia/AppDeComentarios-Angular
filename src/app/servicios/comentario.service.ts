import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  url: any = 'http://localhost:5000/api/comentarios';

  constructor(private http: HttpClient) { }

  obtener(){
    return this.http.get(this.url);
  }

  eliminar(id: any){
    return this.http.delete(this.url + '/' + id);
  }

  guardar(comentario: any){
    return this.http.post(this.url, comentario);
  }

}
