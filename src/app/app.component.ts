import {Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ParentComponent} from "./components/parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild(ParentComponent, { static: true }) parentComponent!: ParentComponent;

  addLeft() {
    this.parentComponent.addLeftComponent();
  }

  addRight() {
    this.parentComponent.addRightComponent();
  }
}
