import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../model/empleado';

@Injectable({
  providedIn: 'root'
})
export class GestionEmpleadoService {
  formularioRegistroEmpleado: FormGroup;
  empleado: Empleado;
  readonly rootURL = 'http://localhost:50895/api';
  listaEmpleado: Empleado[];

  constructor(private http: HttpClient) { }

  guardarEmpleado() {



    return this.http.post(this.rootURL + '/Empleado', this.empleado)

  }

  refrescarListaEmpleado() {

    this.http.get(this.rootURL + '/Empleado')

      .toPromise()

      .then(res => this.listaEmpleado = res as Empleado[])

  }

  editarEmpleado() {

    //console.log(empleado);   

    return this.http.put(this.rootURL + '/Empleado/' + this.empleado.IdEmpleado, this.empleado)

  }

  eliminarEmpleado(id) {

    //console.log(empleado);   

    return this.http.delete(this.rootURL + '/Empleado/' + id)

  }
}
