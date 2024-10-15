import {Component, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  @ViewChild('left', { read: ViewContainerRef, static: true }) left!: ViewContainerRef;
  @ViewChild('right', { read: ViewContainerRef, static: true }) right!: ViewContainerRef;

  addLeftComponent() {
    const componentRef: ComponentRef<ChildComponent> = this.left.createComponent(ChildComponent);
    componentRef.instance.value = 'Left ' + Math.random() * 100;
  }

  addRightComponent() {
    const componentRef: ComponentRef<ChildComponent> = this.right.createComponent(ChildComponent);
    componentRef.instance.value = 'Right ' + Math.random() * 100;
  }
}
