import { Component, QueryList, ViewChildren } from '@angular/core';
import { loadRemoteModule } from '../utils/federation-utils';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @ViewChildren('comp') components!: QueryList<any>;

  remoteModules = [
    {
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      remoteName: 'vue_app',
      exposedModule: 'VueAppLoader',
    },
    {
      remoteEntry: 'http://localhost:3001/remoteEntry.js',
      remoteName: 'angular_app',
      exposedModule: 'AngularAppLoader',
    },
    {
      remoteEntry: 'http://localhost:3002/remoteEntry.js',
      remoteName: 'react_app',
      exposedModule: 'ReactAppLoader',
    },
  ];

  loaders: any = [];

  async ngAfterViewInit() {
    for (const m of this.remoteModules) {
      loadRemoteModule(m).then((module) => {
        this.loaders.push(module.default);
      });
    }
  }
}
