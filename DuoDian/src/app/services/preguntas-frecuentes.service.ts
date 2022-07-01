import { Injectable } from '@angular/core';
import { Consultas } from '../model/consultas';

@Injectable({
  providedIn: 'root'
})
export class PreguntasFrecuentesService {

  private consultas: Consultas[]= [
    {pregunta: "¿Cuales son los requisitos para solicitar tarjeta?", respuesta:"Debe ser mayor de edad, contar con un salario minimo de 13,6UF y estar excento de Dicom"},
    {pregunta: "¿Como puedo realizar un reclamo?", respuesta:"Dirigirse a la sección reclamos en el menú principal"},
    {pregunta: "¿Puedo comprar a través de esta aplicación?", respuesta:"No, la aplicación está destinada para asistencia del cliente"},
    {pregunta: "¿Cuanto se demoran en darme respuesta por mi solicitud de tarjeta?", respuesta:"20 dias hábiles luego de su solicitud, este plazo puede variar según las condiciones sanitarias"},
    {pregunta: "¿Puedo realizar reposicion de tarjeta?", respuesta:"Debe realizar en la sección de reclamos su solicitud de reposición"},
    {pregunta: "¿Como obtengo mi tarjeta?", respuesta:"Debe dirigirse a la sucursal indicada en el estado de solicitud de tarjeta, esto está ligado al cambio según contexto sanitario"},
  ]
  
getConsultas(): Consultas[]{
  return this.consultas;
}
  constructor() { }
}

