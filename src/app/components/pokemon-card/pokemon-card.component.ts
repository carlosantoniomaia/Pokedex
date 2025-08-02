import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pokemon-card',
  imports: [MatCardModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  @Input()
  pokemon!: any;

  @Input()
  numero!: number;

  requestImgPokemon(){
    const numberFormat = this.loadingZero(this.numero);

    return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${numberFormat}.png`;
  }

  loadingZero(str: string | number, size = 3): string{
    let s = String(str);

    while (s.length < (size || 2)){
      s = '0' + s;
    }
    return s;
  }
}
