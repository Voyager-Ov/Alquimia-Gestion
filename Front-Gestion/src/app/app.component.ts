import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule, // Agregar FormsModule a la lista de imports
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'Front-Gestion';
  
  ngAfterViewInit(): void {
    // Selecciona todos los paths del SVG
    const paths = document.querySelectorAll('#visual path');

    // Anima cada path
    paths.forEach((path, index) => {
      // Establece el punto de inicio de la animación
      gsap.set(path, { y: 100, opacity: 0 });

      // Anima el path
      gsap.to(path, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: index * 0.09 // Añade un retraso para que las animaciones se ejecuten en secuencia
      });
    });
  }
}
