import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MeuAppComponent } from './meu-app/meu-app.component';
import { MeuApp2Component } from './meu-app2/meu-app2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuFormModule } from './meu-form/meu-form.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuAppComponent,
    MeuApp2Component,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    FormsModule,
    HttpClientModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
