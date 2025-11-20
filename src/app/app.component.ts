import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitlistComponent } from "./fruitlist/fruitlist.component";
import { HeaderComponent } from './shared/components/header/header.component';
import { RouterOutlet } from "../../node_modules/@angular/router";
import { FooterComponent } from './shared/components/footer/footer.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FruitlistComponent, HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  

}
