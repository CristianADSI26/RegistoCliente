import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionEmpleadosComponent } from './components/gestion-empleados/gestion-empleados.component';
import { RegistrarEmpleadoComponent } from './components/gestion-empleados/registrar-empleado/registrar-empleado.component';
import { ListarEmpleadoComponent } from './components/gestion-empleados/listar-empleado/listar-empleado.component';
import { GestionEmpleadoService } from './services/gestion-empleado.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    GestionEmpleadosComponent,
    RegistrarEmpleadoComponent,
    ListarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,ToastrModule.forRoot()
  ],
  providers: [GestionEmpleadoService],
  bootstrap: [AppComponent],
})
export class AppModule { }
