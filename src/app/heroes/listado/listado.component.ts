import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeBorrado: string = '';


  borrarHeroe() {
    //this.heroes.splice(this.heroes.length -1,1);
    //const heroeBorrado = this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
  
}

