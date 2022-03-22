import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioPerfilPageRoutingModule } from './formulario-perfil-routing.module';

import { FormularioPerfilPage } from './formulario-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormularioPerfilPageRoutingModule
  ],
  declarations: [FormularioPerfilPage]
})
export class FormularioPerfilPageModule {}
