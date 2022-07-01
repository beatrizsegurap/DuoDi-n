import { Component, OnInit } from '@angular/core';
import { Consultas } from 'src/app/model/consultas';
import { PreguntasFrecuentesService } from 'src/app/services/preguntas-frecuentes.service';

@Component({
  selector: 'app-consultas-registrado',
  templateUrl: './consultas-registrado.component.html',
  styleUrls: ['./consultas-registrado.component.css']
})
export class ConsultasRegistradoComponent implements OnInit {
  public preguntas: Consultas[]=[];
  constructor(private PreguntasFrecuentes: PreguntasFrecuentesService) { }

  ngOnInit(): void {
    this.preguntas = this.PreguntasFrecuentes.getConsultas();
  }

}
