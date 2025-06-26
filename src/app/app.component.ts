import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {













  /**
   * KEYBOARD STUFF
   **/
  keyStates: { [key: string]: boolean } = {};

  constructor() {
    const keys = 'abcdefghijklmnopqrstuvwxyz'.split('').concat(['enter', 'backspace', 'shift', ' ']);
    keys.forEach(k => this.keyStates[k] = false);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const key = this.normalizeKey(event.key);
    this.keyStates[key] = true;
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    const key = this.normalizeKey(event.key);
    this.keyStates[key] = false;
  }

  normalizeKey(key: string): string {
    key = key.toLowerCase();
    if (key === ' ') return ' ';
    if (key === 'enter') return 'enter';
    if (key === 'backspace') return 'backspace';
    if (key === 'shift') return 'shift';
    return key;
  }
}
