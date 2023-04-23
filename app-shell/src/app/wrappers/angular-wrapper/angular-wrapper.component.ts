import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-angular-wrapper',
  templateUrl: './angular-wrapper.component.html',
  styleUrls: ['./angular-wrapper.component.scss'],
})
export class AngularWrapperComponent {
  @ViewChild('root') root!: ViewContainerRef
  @Input() component: any;

  constructor(private readonly viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    const compRef = this.viewContainerRef.createComponent(this.component, {});
  }
}
