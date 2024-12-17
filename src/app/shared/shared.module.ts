import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { RouterLink } from '@angular/router';
import { LinkActionComponent } from './link-action/link-action.component';



@NgModule({
  declarations: [
    NavLinkComponent,
    LinkActionComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    NavLinkComponent,
    LinkActionComponent
  ]
})
export class SharedModule { }
