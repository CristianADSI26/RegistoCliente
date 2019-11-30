import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GestionEmpleadoService } from '../../services/gestion-empleado.service';

@Component({
  selector: 'app-gestion-empleados',
  templateUrl: './gestion-empleados.component.html',
  styleUrls: ['./gestion-empleados.component.css']
})
export class GestionEmpleadosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
