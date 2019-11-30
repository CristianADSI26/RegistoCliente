import { Component, OnInit } from '@angular/core';
import { GestionEmpleadoService } from '../../../services/gestion-empleado.service';
import { Empleado } from '../../../model/empleado';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  constructor(public gestionEmpleadoService: GestionEmpleadoService, private toastr:ToastrService ) { }

  ngOnInit() {
    this.gestionEmpleadoService.refrescarListaEmpleado();
  }

  llenarFormularioEmpleado(empleado: Empleado) {



    this.gestionEmpleadoService.formularioRegistroEmpleado.patchValue(empleado);

  }

  eliminarEmpleado(id) {
    if (confirm("¿Estas seguro de eliminar el empleado?")) {

      this.gestionEmpleadoService.eliminarEmpleado(id)

        .subscribe(res => {

          this.gestionEmpleadoService.refrescarListaEmpleado();

          this.toastr.error("empleado eliminado con exito", "Eliminar empleado");

        },

          err => {

            console.log(err)

          })



    }



  }

}
