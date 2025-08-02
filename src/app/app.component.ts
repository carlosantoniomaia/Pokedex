import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [MenuComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokedex';

}
