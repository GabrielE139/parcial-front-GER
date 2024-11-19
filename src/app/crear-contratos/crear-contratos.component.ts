import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContratosService } from '../../conexion-back/services/contratos.service';
import { Contrato } from '../../conexion-back/models/contrato.model';

@Component({
  selector: 'app-crear-contratos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-contratos.component.html',
  styleUrl: './crear-contratos.component.css'
})
export class CrearContratosComponent {
  id: number = 0;
  identificador: string = '';
  valor: number = 0;
  nombre_contratante: string = '';
  documento_contratante: string = '';
  nombre_contratantista: string = '';
  documento_contratantista: string = '';
  fecha_inicial: Date = new Date();
  fecha_final: Date = new Date();

  constructor(private contratosService: ContratosService) { }

  onSubmit() {
    const contrato: Contrato = {
      id: this.id,
      identificador: this.identificador,
      valor: this.valor,
      nombre_contratante: this.nombre_contratante,
      documento_contratante: this.documento_contratante,
      nombre_contratantista: this.nombre_contratantista,
      documento_contratantista: this.documento_contratantista,
      fecha_inicial: this.fecha_inicial,
      fecha_final: this.fecha_final
    };

    this.contratosService.crearContrato(contrato).subscribe(
      () => alert('Contrato creado'),
      (error) => console.log(error)
    );

  }
}

