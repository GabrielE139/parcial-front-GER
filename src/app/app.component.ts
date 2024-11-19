import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrearContratosComponent } from './crear-contratos/crear-contratos.component';
import { MostrarContratosComponent } from './mostrar-contratos/mostrar-contratos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrearContratosComponent, MostrarContratosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parcial-front-ger';
}
