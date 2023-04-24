import { Injectable } from '@angular/core';

const users = [
  {
    username: 'user1',
    password: 'user1',
  },
  {
    username: 'user2',
    password: 'user2',
  },
  {
    username: 'user3',
    password: 'user3',
  },
];

const remoteModules = [
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

@Injectable({
  providedIn: 'root',
})
export class AppService {
  loggedUser: { username: string; password: string } | null = null;
  authorized_modules: typeof remoteModules = []

  login(username: string, password: string) {
    const user = users.find(
      (item) => item.username === username && item.password === password
    );

    if (!user) return false;

    this.loggedUser = user;

    switch(user.username) {
      case 'user3': {
        this.authorized_modules = remoteModules // all modules
        break
      }
      case 'user2': {
        this.authorized_modules = remoteModules.slice(0, 2) // takes first 2
        break
      }
      default: {
        this.authorized_modules = [remoteModules[0]] // take first
      }
    }

    return true;
  }
}
