import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquare';
  lugares : any = [
    {plan: 'pagado',cercania: 1, distancia: 4, active: true, nombre: 'Floreria'},
    {plan: 'gratuito',cercania: 2, distancia: 21, active: true, nombre: 'Donas lapasadita'},
    {plan: 'gratuito',cercania: 2, distancia: 20, active: false, nombre: 'Dulceria Doggy'},
    {plan: 'gratuito',cercania: 2, distancia: 22, active: true, nombre: 'Veterinaria Doggy'},
    {plan: 'gratuito',cercania: 3, distancia: 100, actiplan: '',ve: true, nombre: 'Micelanea'},
    {plan: 'pagado',cercania: 2, distancia: 14, active: false, nombre: 'Panaderia Doggy'},
    {plan: 'gratuito',cercania: 1, distancia: 3, active: true, nombre: 'Pasteleria Doggy'},
  ];
  constructor(){
  }

}
