import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nav-link',
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.scss'
})
export class NavLinkComponent implements OnInit {
  @Input() routerLink?: string;
  @Input() label!: string;
  @Input() target!: string;
  @Input() classes!: string;

  ngOnInit(): void {
    this.target = this.target || '_self';
    this.routerLink = this.routerLink || '#';
    this.label = this.label || 'Link';
    this.classes = this.classes || '';
  }

}
