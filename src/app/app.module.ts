import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ForbiddenValidatorDirective } from './forbidden-validator.directive';
import { IdentityRevealedValidatorDirective } from './identity-revealed-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
