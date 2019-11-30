import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { GestionEmpleadoService } from 'src/app/services/gestion-empleado.service';
import { log } from 'util';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {
  exRegularLetras: any = "^[a-zA-Z ]*$";
  exRegularCorreo: any = "\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";
  exRegularNumeros: any = "^[0-9]*$";


  constructor(public gestionEmpleadoService: GestionEmpleadoService, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.gestionEmpleadoService.formularioRegistroEmpleado = this.formBuilder.group({

      IdEmpleado: [0],
      Nombre: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],

      Direccion: ["", [Validators.required, Validators.maxLength(60)]],

      Telefono: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern(this.exRegularNumeros)]],

      Email: ["", [Validators.required, , Validators.maxLength(40), Validators.pattern(this.exRegularCorreo)]]

    });
  }
  get Nombre() {
    return this.gestionEmpleadoService.formularioRegistroEmpleado.controls["Nombre"];
  }
  get Direccion() {
    return this.gestionEmpleadoService.formularioRegistroEmpleado.controls["Direccion"];
  }
  get Telefono() {
    return this.gestionEmpleadoService.formularioRegistroEmpleado.controls["Telefono"];
  }
  get Email() {
    return this.gestionEmpleadoService.formularioRegistroEmpleado.controls["Email"];
  }

  onSubmit() {

    this.gestionEmpleadoService.empleado = this.gestionEmpleadoService.formularioRegistroEmpleado.value;

    //console.log("El id es: " + this.service.formData.IdTarjeta);  

    if (this.gestionEmpleadoService.empleado.IdEmpleado == 0) {

      this.guardarEmpleado();

    } else {

      this.editarEmpleado();

    }

  }

  guardarEmpleado() {



    this.gestionEmpleadoService.guardarEmpleado().subscribe(

      res => {

        this.gestionEmpleadoService.formularioRegistroEmpleado.reset();

        this.toastr.success("Se registró el empleado", "Registro de empleado");

        this.gestionEmpleadoService.refrescarListaEmpleado();

      },

      err => {

        console.log(err);

      }

    )

  }

  editarDetallePago() {



    this.gestionEmpleadoService.editarEmpleado().subscribe(



      res => {

        this.gestionEmpleadoService.formularioRegistroEmpleado.reset();

        this.toastr.info("Se registró método de pago", "Registro de pago");

        this.gestionEmpleadoService.refrescarListaEmpleado();

      },

      err => {

        console.log(err);

      }

    )

  }

  editarEmpleado() {



    this.gestionEmpleadoService.editarEmpleado().subscribe(



      res => {

        this.gestionEmpleadoService.formularioRegistroEmpleado.reset();

        this.toastr.info("Se actualizó el empleado", "Registro de pago");

        this.gestionEmpleadoService.refrescarListaEmpleado();

      },

      err => {

        console.log(err);

      }

    )

  }
}
