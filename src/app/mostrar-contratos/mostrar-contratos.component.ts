import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Contrato } from '../../conexion-back/models/contrato.model';
import { ContratosService } from '../../conexion-back/services/contratos.service';
@Component({
  selector: 'app-mostrar-contratos',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './mostrar-contratos.component.html',
  styleUrl: './mostrar-contratos.component.css'
})
export class MostrarContratosComponent {
  contratos: Contrato[] = [];

  constructor(private contratosService: ContratosService) { }
  ngOnInit(): void {
    // Suscribirse al BehaviorSubject de propiedades filtradas
    this.contratosService.getAllContratos().subscribe((data: Contrato[]) => {
      this.contratos = data;
    });

  }
}
