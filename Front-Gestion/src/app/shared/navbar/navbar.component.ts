import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-navbar',
  imports: [
    MatSlideToggleModule,
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() menuItems: any[] = []; 

  isCollapsed = false; // Estado inicial: expandido


  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed; // Alternar estado
  }

}
